import React from "react";
import { Search, Plus, Minus, Info } from "lucide-react";
import { getLocalizedMenu, MenuItem } from "../menuData.ts";
import { Language, TranslationSet } from "../translations.ts";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  cart: { [itemId: string]: number };
  language: Language;
  t: TranslationSet;
}

// Map categories to beautiful emojis for a warm visual layout
const categoryEmojis: { [key: string]: string } = {
  pizza: "🍕",
  sandwich: "🍔",
  libanais: "🌯",
  makloub: "🥖",
  baguette: "🥖",
  cornet: "🍿",
  tacos: "🌮",
  bonbons: "🍬",
  ciabatta: "🍞",
  supplements: "🍟",
  boissons: "🥤",
};

export default function MenuSection({
  onAddToCart,
  onRemoveFromCart,
  cart,
  language,
  t
}: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("pizza");
  const [searchQuery, setSearchQuery] = React.useState("");

  const localizedCategories = React.useMemo(() => {
    return getLocalizedMenu(language);
  }, [language]);

  const filteredCategories = localizedCategories.filter((category) => {
    // If we have a search query, show categories that have matching items
    if (searchQuery.trim() === "") return category.id === selectedCategory;
    return true;
  });

  const getFilteredItems = (items: MenuItem[]) => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(query)))
    );
  };

  const allItemsFlat = React.useMemo(() => {
    return localizedCategories.flatMap((c) => c.items);
  }, [localizedCategories]);

  return (
    <section id="menu" className="py-20 bg-gray-50 border-y border-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            {t.menuTitle}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-600 font-sans">
            {t.menuDesc}
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="space-y-6 mb-10">
          {/* Search input */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.menuSearchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-sky-100 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm font-sans text-sm transition-all"
              id="menu-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-sky-500"
              >
                {t.menuSearchClear}
              </button>
            )}
          </div>

          {/* Category Tabs (Horizontal scrolling on mobile) */}
          {!searchQuery && (
            <div className="flex overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2.5 scrollbar-thin scrollbar-thumb-sky-100 justify-start md:justify-center">
              {localizedCategories.map((category) => {
                const isActive = selectedCategory === category.id;
                const emoji = categoryEmojis[category.id] || "🍽️";
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm flex items-center gap-1.5 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:opacity-95"
                        : "bg-white text-gray-600 border border-sky-50 hover:bg-sky-50/50 hover:text-sky-600"
                    }`}
                    id={`tab-${category.id}`}
                  >
                    <span>{emoji}</span>
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Menu Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const items = getFilteredItems(category.items);
            if (items.length === 0) return null;

            const emoji = categoryEmojis[category.id] || "🍽️";

            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header (Only if searching) */}
                {searchQuery && (
                  <div className="flex items-center gap-3 border-b border-sky-100 pb-3">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 font-sans">
                      {emoji} {category.name}
                    </span>
                    <span className="text-xs bg-sky-100 text-sky-800 font-mono px-2 py-0.5 rounded-full font-bold">
                      {items.length} {items.length === 1 ? t.menuItemsCountSingle : t.menuItemsCount}
                    </span>
                  </div>
                )}

                {/* Grid of Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => {
                    const quantity = cart[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl border border-sky-50/80 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-sky-100 relative overflow-hidden"
                        id={`menu-card-${item.id}`}
                      >
                        {/* Interactive glow effect on card hover */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="space-y-3 relative z-10">
                          {/* Item Name and Price */}
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 font-sans group-hover:text-sky-600 transition-colors">
                              {item.name}
                            </h4>
                            <span className="text-base font-bold text-emerald-600 font-mono shrink-0 bg-emerald-50 px-2 py-0.5 rounded-md">
                              {item.price.toFixed(3)} <span className="text-xs font-semibold">DT</span>
                            </span>
                          </div>

                          {/* Ingredients Tags (Only if available, like for Pizza) */}
                          {item.ingredients && item.ingredients.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {item.ingredients.map((ing, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono font-medium bg-sky-50/80 text-sky-700 px-2 py-0.5 rounded-full"
                                >
                                  {ing}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Description */}
                          {item.description && (
                            <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Add to Cart Actions */}
                        <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between relative z-10">
                          <span className="text-[10px] font-mono text-gray-400">
                            {t.menuCode}: {item.id.toUpperCase()}
                          </span>

                          {quantity > 0 ? (
                            <div className="flex items-center bg-sky-50 rounded-lg p-1 border border-sky-200">
                              <button
                                onClick={() => onRemoveFromCart(item.id)}
                                className="p-1 text-sky-600 hover:bg-white rounded-md transition-all active:scale-90"
                                aria-label="Rimuovi"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-mono font-bold text-sm text-sky-800 px-3 min-w-[20px] text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => onAddToCart(item)}
                                className="p-1 text-sky-600 hover:bg-white rounded-md transition-all active:scale-90"
                                aria-label="Aggiungi"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => onAddToCart(item)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-500 text-white font-semibold text-xs hover:bg-sky-600 transition-all active:scale-95 shadow-sm shadow-sky-500/10"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              {t.menuAdd}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* No search results found */}
          {getFilteredItems(allItemsFlat).length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-sky-50 p-8 max-w-md mx-auto shadow-sm">
              <Info className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-1">{t.menuNotFoundTitle}</h4>
              <p className="text-sm text-gray-500 mb-4">
                {t.menuNotFoundDesc.replace("{query}", searchQuery)}
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 bg-sky-100 text-sky-700 rounded-xl text-sm font-semibold hover:bg-sky-200 transition-colors"
              >
                {t.menuNotFoundBtn}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
