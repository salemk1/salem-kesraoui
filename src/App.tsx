import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import MenuSection from "./components/MenuSection.tsx";
import ChefAssistant from "./components/ChefAssistant.tsx";
import ReservationSection from "./components/ReservationSection.tsx";
import ReviewsSection from "./components/ReviewsSection.tsx";
import CartDrawer from "./components/CartDrawer.tsx";
import { getLocalizedMenu, MenuItem } from "./menuData.ts";
import { Language, translations } from "./translations.ts";
import { Phone, Mail, MapPin, Clock, Heart, Award, ArrowUp } from "lucide-react";

export default function App() {
  const [language, setLanguage] = React.useState<Language>("it");
  const [cart, setCart] = React.useState<{ [itemId: string]: number }>({});
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const t = React.useMemo(() => {
    return translations[language];
  }, [language]);

  // 🛒 Cart Handlers
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const currentQty = prev[itemId] || 0;
      if (currentQty <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: currentQty - 1
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  // Convert the in-memory flat map to a list of fully populated localized menu items
  const cartItemsList = React.useMemo(() => {
    const localizedMenu = getLocalizedMenu(language);
    return Object.keys(cart).map((itemId) => {
      // Find the corresponding item in all categories
      const foundItem = localizedMenu
        .flatMap((c) => c.items)
        .find((item) => item.id === itemId);
      return foundItem;
    }).filter((item): item is MenuItem => !!item);
  }, [cart, language]);

  const cartCount = React.useMemo(() => {
    return Object.values(cart).reduce((acc: number, qty) => acc + (qty as number), 0);
  }, [cart]);

  // 🧭 Scroll Handler
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Track scrolling to highlight navbar links and toggle the scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll to top visibility
      setShowScrollTop(window.scrollY > 500);

      const scrollPosition = window.scrollY + 200; // Offset for focus
      const sections = ["hero", "menu", "chef", "reservation", "reviews"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRtl = language === "ar";

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-sky-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsOpenCart(true)}
        onScrollTo={handleScrollTo}
        activeSection={activeSection}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />

      {/* Main Sections flow */}
      <main>
        {/* Home Welcome */}
        <Hero onScrollTo={handleScrollTo} t={t} />

        {/* Interactive Menu List */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cart={cart}
          language={language}
          t={t}
        />

        {/* Real-time AI Chef Interactor */}
        <ChefAssistant language={language} t={t} />

        {/* Interactive Booking Table pass */}
        <ReservationSection language={language} t={t} />

        {/* Live Customer Social Board */}
        <ReviewsSection language={language} t={t} />
      </main>

      {/* Shopping Cart Sliding Panel overlay */}
      <CartDrawer
        isOpen={isOpenCart}
        onClose={() => setIsOpenCart(false)}
        cart={cart}
        cartItemsList={cartItemsList}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        language={language}
        t={t}
      />

      {/* FOOTER (Visual Anchor) */}
      <footer className="bg-slate-900 text-slate-300 font-sans text-sm border-t border-slate-800" style={{ direction: isRtl ? "rtl" : "ltr" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-slate-800">
            {/* Restaurant brand */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className={`flex items-center gap-3 ${isRtl ? "justify-start" : "justify-start"}`}>
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center border border-slate-800 shadow-lg shrink-0">
                  <Award className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-sans tracking-tight text-white bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Resto Rayen
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm text-left">
                {t.footerDesc}
              </p>
              <div className="flex gap-4 pt-1">
                <span className="text-xs bg-slate-800/80 text-sky-400 px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider">
                  {t.footerTag1}
                </span>
                <span className="text-xs bg-slate-800/80 text-emerald-400 px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider">
                  {t.footerTag2}
                </span>
              </div>
            </div>

            {/* Hours and location */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className={`text-white font-bold text-xs uppercase tracking-widest ${isRtl ? "border-r-2 pr-2 pl-0" : "border-l-2 pl-2 pr-0"} border-emerald-500`}>
                {t.footerContactsTitle}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Resto Rayen, Avenue 2 Mars, Mahdia</span>
                </li>
                <li className="flex items-center gap-2.5" style={{ direction: "ltr" }}>
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-mono">+216 56 034 046</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Kesraouisalem@icloud.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.footerHoursLabel} {t.footerHoursValue}</span>
                </li>
              </ul>
            </div>

            {/* Quick action shortcuts */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h4 className={`text-white font-bold text-xs uppercase tracking-widest ${isRtl ? "border-r-2 pr-2 pl-0" : "border-l-2 pl-2 pr-0"} border-sky-500`}>
                {t.footerNavTitle}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => handleScrollTo("hero")} className="text-left text-slate-400 hover:text-white transition-colors">{t.navHome}</button>
                <button onClick={() => handleScrollTo("menu")} className="text-left text-slate-400 hover:text-white transition-colors">{t.navMenu}</button>
                <button onClick={() => handleScrollTo("chef")} className="text-left text-slate-400 hover:text-white transition-colors">{t.navChef}</button>
                <button onClick={() => handleScrollTo("reservation")} className="text-left text-slate-400 hover:text-white transition-colors">{t.navReservation}</button>
                <button onClick={() => handleScrollTo("reviews")} className="text-left text-slate-400 hover:text-white transition-colors">{t.navReviews}</button>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-sans gap-4">
            <p className="text-center sm:text-left">
              &copy; 2026 <strong>Resto Rayen</strong>. {t.footerCopyright}
            </p>
            <p className="flex items-center gap-1">
              {t.footerMadeWith} <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-1" /> per gli amanti dello street food e della pizza.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 ${isRtl ? "right-6" : "left-6"} p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-40 border border-sky-400/50 animate-in fade-in slide-in-from-bottom-4 duration-300`}
          aria-label={t.scrollToTopLabel}
          id="scroll-to-top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
