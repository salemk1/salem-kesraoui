import { ChefHat, ArrowRight, Utensils, Calendar } from "lucide-react";
import { TranslationSet } from "../translations.ts";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
  t: TranslationSet;
}

export default function Hero({ onScrollTo, t }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-sky-50 via-emerald-50/20 to-white">
      {/* Abstract background blobs reminiscent of the Resto Rayen logo colors */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider animate-bounce">
              <ChefHat className="w-4 h-4 text-emerald-600" />
              {t.heroBadge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 tracking-tight leading-tight">
              {t.heroTitle1} <br />
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600 bg-clip-text text-transparent">
                {t.heroTitleGradient}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              {t.heroDesc}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => onScrollTo("menu")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold shadow-lg shadow-sky-500/20 transition-all duration-200 hover:-translate-y-0.5"
                id="hero-order-now"
              >
                {t.heroBtnMenu}
                <ArrowRight className="ml-2 w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                onClick={() => onScrollTo("reservation")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                id="hero-book-table"
              >
                <Calendar className="mr-2 ml-2 w-5 h-5 text-sky-500" />
                {t.heroBtnBook}
              </button>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-sky-100 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-sky-600 font-sans">{t.heroHighlightFresh}</span>
                <span className="text-xs font-medium text-gray-500">{t.heroHighlightFreshDesc}</span>
              </div>
              <div className="text-center lg:text-left border-x border-sky-100 px-4">
                <span className="block text-2xl font-bold text-emerald-600 font-sans">{t.heroHighlightPizza}</span>
                <span className="text-xs font-medium text-gray-500">{t.heroHighlightPizzaDesc}</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-sky-600 font-sans">{t.heroHighlightSpeed}</span>
                <span className="text-xs font-medium text-gray-500">{t.heroHighlightSpeedDesc}</span>
              </div>
            </div>
          </div>

          {/* Graphical Logo Presentation & Featured Dishes */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Spinning border reminiscent of the logo ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-sky-200 animate-spin" style={{ animationDuration: "120s" }}></div>
              <div className="absolute -inset-4 rounded-full border-2 border-emerald-100 animate-spin" style={{ animationDuration: "90s" }}></div>

              {/* Main Circular Image Wrapper matching the Resto Rayen logo structure */}
              <div className="absolute inset-4 bg-gradient-to-tr from-sky-400 to-sky-100 rounded-full overflow-hidden shadow-2xl border-8 border-white flex flex-col items-center justify-center">
                {/* Simulated landscape from the logo */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                
                {/* Stylized Logo Illustration with CSS */}
                <div className="z-10 text-center px-6">
                  <div className="mx-auto w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-4 relative group hover:scale-105 transition-transform duration-300">
                    <ChefHat className="text-white w-14 h-14" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans text-[10px] px-1.5 py-0.5 font-bold uppercase rounded-full">
                      Chef
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans tracking-tight text-slate-900 drop-shadow-sm">
                    Resto Rayen
                  </h3>
                  <div className="h-0.5 w-16 bg-emerald-500 mx-auto my-2 rounded-full"></div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-950 font-mono">
                    {t.logoSub}
                  </p>
                </div>

                {/* Sky blue logo background elements (clouds & water style) */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-emerald-500/80 to-sky-500/30 backdrop-blur-[2px]"></div>
              </div>

              {/* Float Card 1: Fast Food */}
              <div className="absolute -top-4 -right-2 bg-white rounded-2xl p-3 shadow-xl border border-sky-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: "6s" }}>
                <span className="text-2xl">🍔</span>
                <div>
                  <span className="block text-xs font-bold text-gray-900">{t.heroFloatFast}</span>
                  <span className="text-[10px] text-gray-500">{t.heroFloatFastDesc}</span>
                </div>
              </div>

              {/* Float Card 2: Pizza */}
              <div className="absolute bottom-8 -left-8 bg-white rounded-2xl p-3 shadow-xl border border-sky-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: "4s" }}>
                <span className="text-2xl">🍕</span>
                <div>
                  <span className="block text-xs font-bold text-gray-900">{t.heroFloatPizza}</span>
                  <span className="text-[10px] text-gray-500">{t.heroFloatPizzaDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
