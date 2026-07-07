import React from "react";
import { ShoppingCart, ChefHat, Menu as MenuIcon, X, Globe } from "lucide-react";
import { Language, TranslationSet } from "../translations.ts";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationSet;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onScrollTo,
  activeSection,
  language,
  onLanguageChange,
  t
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showLangMenu, setShowLangMenu] = React.useState(false);

  const navItems = [
    { id: "hero", label: t.navHome },
    { id: "menu", label: t.navMenu },
    { id: "chef", label: t.navChef },
    { id: "reservation", label: t.navReservation },
    { id: "reviews", label: t.navReviews },
  ];

  const languagesList = [
    { code: "it" as Language, label: "Italiano", flag: "🇮🇹" },
    { code: "fr" as Language, label: "Français", flag: "🇫🇷" },
    { code: "ar" as Language, label: "العربية", flag: "🇹🇳" }
  ];

  const handleNavClick = (sectionId: string) => {
    onScrollTo(sectionId);
    setIsOpen(false);
  };

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-sky-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("hero")}>
            <div className="relative w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
              <ChefHat className="text-white w-7 h-7" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/20 to-transparent"></div>
            </div>
            <div>
              <span className="text-2xl font-sans font-bold tracking-tight text-gray-900 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Resto Rayen
              </span>
              <p className="text-[10px] font-mono text-emerald-600 tracking-widest font-semibold uppercase">
                {t.logoSub}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-2 ${
                  activeSection === item.id
                    ? "text-sky-600 font-semibold"
                    : "text-gray-600 hover:text-sky-500"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"></span>
                )}
              </button>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-100 text-xs font-semibold text-gray-700 bg-sky-50/50 hover:bg-sky-50 transition-colors"
                id="lang-selector-desktop"
              >
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>{currentLangObj.flag} {currentLangObj.label}</span>
              </button>
              {showLangMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowLangMenu(false)}></div>
                  <div className="absolute right-0 mt-2 w-36 bg-white border border-sky-100 rounded-xl shadow-xl z-20 py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center gap-2 transition-colors ${
                          language === lang.code
                            ? "bg-sky-50 text-sky-600 font-bold"
                            : "text-gray-700 hover:bg-sky-50/50"
                        }`}
                      >
                        <span className="text-sm">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all duration-200 hover:scale-105"
              aria-label="Carrello"
              id="cart-trigger"
            >
              <ShoppingCart className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button, Language and Cart */}
          <div className="flex items-center gap-2.5 md:hidden">
            {/* Quick Mobile Language Switcher Button (cycles languages) */}
            <button
              onClick={() => {
                const currentIndex = languagesList.findIndex((l) => l.code === language);
                const nextIndex = (currentIndex + 1) % languagesList.length;
                onLanguageChange(languagesList[nextIndex].code);
              }}
              className="p-2 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors flex items-center justify-center"
              aria-label="Cambia lingua"
              title="Cambia lingua"
            >
              <span className="text-base">{currentLangObj.flag}</span>
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all duration-200"
              aria-label="Carrello mobile"
              id="cart-trigger-mobile"
            >
              <ShoppingCart className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-sky-500 hover:bg-sky-50 transition-colors focus:outline-none"
              aria-label="Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-sky-100 animate-in fade-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-sky-50 text-sky-600 font-semibold border-l-4 border-sky-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-sky-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
