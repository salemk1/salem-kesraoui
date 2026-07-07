import React from "react";
import { ChefHat, Send, Sparkles, HelpCircle, X, MessageSquare, CornerDownLeft } from "lucide-react";
import { Language, TranslationSet } from "../translations.ts";

interface ChefAssistantProps {
  language: Language;
  t: TranslationSet;
}

interface Message {
  role: "user" | "chef";
  text: string;
}

const quickPromptsByLang = {
  it: [
    "Consigliami la tua specialità!",
    "Che cos'è il Makloub?",
    "Qualcosa di piccante 🔥",
    "Menu vegetariano 🥗",
    "Che cos'è 'Les Bonbons'? 🍬"
  ],
  fr: [
    "Conseillez-moi votre spécialité !",
    "Qu'est-ce que le Makloub ?",
    "Quelque chose de piquant 🔥",
    "Menu végétarien 🥗",
    "Qu'est-ce que 'Les Bonbons' ? 🍬"
  ],
  ar: [
    "بماذا تنصحني كأكلة خاصة؟",
    "ما هو المقلوب التونسي؟",
    "أكلة حارة ولذيذة 🔥",
    "خيارات نباتية 🥗",
    "ما هي أكلة البونبون؟ 🍬"
  ]
};

export default function ChefAssistant({ language, t }: ChefAssistantProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Initialize and update the first message if language changes and no real conversation has started yet
  React.useEffect(() => {
    if (messages.length <= 1) {
      setMessages([
        {
          role: "chef",
          text: t.chefWelcomeMsg
        }
      ]);
    }
  }, [language, t.chefWelcomeMsg]);

  const quickPrompts = quickPromptsByLang[language] || quickPromptsByLang.it;

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chef", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: messages, // Pass conversation history to maintain context
          language: language
        })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setMessages((prev) => [...prev, { role: "chef", text: data.text }]);
      } else {
        const errText = language === "ar"
          ? "عذراً يا حبيبي، هناك مشكلة فنية مؤقتة! يرجى إعادة المحاولة."
          : language === "fr"
          ? "Désolé, habibi, il y a un problème technique temporaire ! Veuillez réessayer."
          : "Scusami, habibi, si è spento momentaneamente il forno del mio server! Prova a ripetere la domanda.";
        setMessages((prev) => [
          ...prev,
          {
            role: "chef",
            text: errText
          }
        ]);
      }
    } catch (error) {
      console.error("Chef assistant fetch error:", error);
      const connErrText = language === "ar"
        ? "أوه لا، هناك مشكلة في الاتصال! حاول مجدداً بعد قليل."
        : language === "fr"
        ? "Oh non, il y a un problème de connexion ! Réessayez dans un instant."
        : "Oh no, c'è un piccolo intoppo nella mia linea! Riprova tra poco.";
      setMessages((prev) => [
        ...prev,
        {
          role: "chef",
          text: connErrText
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chef" className="py-20 bg-gradient-to-b from-white to-sky-50/50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-100">
            <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
            {t.chefBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            {t.chefTitle}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-600 font-sans text-sm sm:text-base">
            {t.chefDesc}
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-white rounded-3xl border border-sky-100/80 shadow-xl overflow-hidden flex flex-col h-[550px]" id="chef-chat-container">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-600 px-6 py-4 flex items-center justify-between text-white shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/50 flex items-center justify-center">
                  <ChefHat className="text-white w-6 h-6" />
                </div>
                {/* Active pulse */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-bold font-sans text-base leading-tight">Chef Rayen AI</h3>
                <p className="text-[10px] font-mono text-emerald-100 uppercase tracking-widest font-semibold">
                  {t.chefActiveStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/25 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-spin" style={{ animationDuration: "12s" }} />
              {t.chefStatusText}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-sky-100/50">
            {messages.map((msg, index) => {
              const isChef = msg.role === "chef";
              return (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 max-w-[85%] ${
                    isChef ? "self-start" : "self-end ml-auto flex-row-reverse"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                      isChef
                        ? "bg-gradient-to-br from-sky-500 to-emerald-500 text-white border-white"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {isChef ? <ChefHat className="w-4 h-4" /> : <span className="text-xs font-bold">Tu</span>}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-sans shadow-sm border ${
                      isChef
                        ? "bg-white text-gray-800 border-sky-50 rounded-tl-none leading-relaxed"
                        : "bg-sky-500 text-white border-sky-400 rounded-tr-none leading-relaxed"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5 max-w-[80%] self-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white flex items-center justify-center border border-white shadow-sm">
                  <ChefHat className="w-4 h-4" />
                </div>
                <div className="bg-white text-gray-500 border border-sky-50 rounded-2xl rounded-tl-none px-4 py-3 text-sm shadow-sm flex items-center gap-2">
                  <span className="font-semibold font-sans">{t.chefThinkingText}</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-start Suggestions */}
          <div className="px-6 py-3 bg-white border-t border-gray-50 shrink-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-sky-400" /> {t.chefFaqLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="text-xs font-sans font-medium px-3 py-1.5 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 hover:text-sky-800 transition-colors border border-sky-100 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="p-4 bg-white border-t border-sky-100 flex gap-2 shrink-0 items-center"
            id="chef-chat-form"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chefPlaceholder}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-xl border border-sky-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-sans transition-all disabled:opacity-60"
              id="chef-chat-input"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all active:scale-95 shadow-md shadow-sky-500/20 flex items-center justify-center shrink-0 disabled:opacity-40 disabled:scale-100 disabled:shadow-none"
              id="chef-chat-submit"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
