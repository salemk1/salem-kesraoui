import React from "react";
import { X, ShoppingCart, Plus, Minus, Trash2, MapPin, Phone, MessageSquare, Receipt, CheckCircle, Clock } from "lucide-react";
import { MenuItem } from "../menuData.ts";
import { Language, TranslationSet } from "../translations.ts";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [itemId: string]: number };
  cartItemsList: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
  language: Language;
  t: TranslationSet;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  cartItemsList,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  language,
  t
}: CartDrawerProps) {
  const [deliveryMethod, setDeliveryMethod] = React.useState<"asporto" | "consegna">("asporto");
  const [customerInfo, setCustomerInfo] = React.useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedOrder, setSubmittedOrder] = React.useState<any | null>(null);
  const [trackerStep, setTrackerStep] = React.useState(0); // 0: Ricevuto, 1: In prep, 2: In consegna, 3: Consegnato
  const [trackerTime, setTrackerTime] = React.useState(25); // Minutes left

  // Auto-advance order status tracker steps for a realistic live feedback experience!
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (submittedOrder && trackerStep < 3) {
      interval = setInterval(() => {
        setTrackerStep((prev) => {
          if (prev < 3) {
            // Decrease remaining time randomly
            setTrackerTime((t) => Math.max(2, t - Math.floor(Math.random() * 6) - 2));
            return prev + 1;
          }
          return prev;
        });
      }, 9000); // Progresses every 9 seconds for demo simulation
    }
    return () => clearInterval(interval);
  }, [submittedOrder, trackerStep]);

  if (!isOpen) return null;

  // Compute checkout sums
  const subtotal = cartItemsList.reduce((acc, item) => {
    const qty = cart[item.id] || 0;
    return acc + item.price * qty;
  }, 0);

  const deliveryFee = deliveryMethod === "consegna" ? 3.000 : 0.000;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItemsList.length === 0) return;
    if (!customerInfo.name || !customerInfo.phone) {
      const errContact = language === "ar"
        ? "الاسم ورقم الهاتف مطلوبان."
        : language === "fr"
        ? "Le nom et le téléphone sont obligatoires."
        : "I campi Nome e Telefono sono richiesti.";
      alert(errContact);
      return;
    }
    if (deliveryMethod === "consegna" && !customerInfo.address) {
      const errAddr = language === "ar"
        ? "عنوان التوصيل مطلوب لطلبات الدليفري."
        : language === "fr"
        ? "L'adresse de livraison est obligatoire."
        : "L'indirizzo di consegna è obbligatorio.";
      alert(errAddr);
      return;
    }

    setIsSubmitting(true);
    try {
      const orderPayload = {
        items: cartItemsList.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: cart[item.id]
        })),
        total,
        customer: customerInfo,
        deliveryMethod
      };

      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmittedOrder(data.order);
        setTrackerStep(0);
        setTrackerTime(deliveryMethod === "consegna" ? 35 : 20);
      } else {
        const errPlace = language === "ar"
          ? "فشل في إرسال الطلب. يرجى إعادة المحاولة."
          : language === "fr"
          ? "Erreur lors de l'envoi de la commande. Veuillez réessayer."
          : "Errore nell'inoltro dell'ordine. Riprova.";
        alert(errPlace);
      }
    } catch (err) {
      console.error("Order placing error:", err);
      const connErr = language === "ar"
        ? "خطأ في الشبكة. يرجى التحقق من الاتصال وإعادة المحاولة."
        : language === "fr"
        ? "Erreur de connexion. Veuillez réessayer."
        : "Errore di rete. Controlla la connessione e riprova.";
      alert(connErr);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAndReset = () => {
    if (submittedOrder) {
      onClearCart();
      setSubmittedOrder(null);
      setCustomerInfo({ name: "", phone: "", address: "", notes: "" });
    }
    onClose();
  };

  const isRtl = language === "ar";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Overlay Backdrop */}
      <div
        onClick={handleCloseAndReset}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className={`absolute inset-y-0 max-w-full flex ${isRtl ? "left-0 pr-10" : "right-0 pl-10"}`}>
        <div 
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-sky-500 to-sky-600 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5.5 h-5.5 text-white" />
              <h2 className="text-lg font-bold font-sans">{t.cartTitle}</h2>
              {!submittedOrder && cartItemsList.length > 0 && (
                <span className="bg-white text-sky-700 text-xs font-bold px-2 py-0.5 rounded-full font-mono mx-1.5">
                  {cartItemsList.reduce((acc, item) => acc + (cart[item.id] || 0), 0)}
                </span>
              )}
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-5.5 h-5.5" />
            </button>
          </div>

          {/* Submitted Order Tracker Screen */}
          {submittedOrder ? (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Tracker Status Card */}
                <div className="text-center space-y-3 pb-4 border-b border-gray-100">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-200 mx-auto animate-bounce">
                    <CheckCircle className="text-emerald-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-sans">{t.cartOrderTrackerTitle}</h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">{t.cartOrderTrackerId}: {submittedOrder.id}</p>
                  </div>
                </div>

                {/* Simulated live progress bar */}
                <div className="space-y-4 font-sans text-sm bg-sky-50/50 rounded-2xl p-4 border border-sky-100/30">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      {t.cartOrderProgressLabel}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 font-sans">
                      <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>{t.cartOrderProgressTime} <strong className="font-mono text-sky-600 text-sm">{trackerTime}m</strong></span>
                    </div>
                  </div>

                  {/* Visual Stepper */}
                  <div className="grid grid-cols-4 gap-1.5 relative pt-4 pb-2" style={{ direction: "ltr" }}>
                    {/* Stepper background line */}
                    <div className="absolute top-[25px] left-0 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
                    <div
                      className="absolute top-[25px] left-0 h-1 bg-sky-500 -z-10 rounded-full transition-all duration-500"
                      style={{ width: `${(trackerStep / 3) * 100}%` }}
                    ></div>

                    {[
                      { step: 0, label: t.cartStep1, emoji: "📥" },
                      { step: 1, label: t.cartStep2, emoji: "🍳" },
                      { step: 2, label: t.cartStep3, emoji: "🛵" },
                      { step: 3, label: t.cartStep4, emoji: "✅" }
                    ].map((st) => {
                      const isActive = trackerStep >= st.step;
                      return (
                        <div key={st.step} className="text-center space-y-1">
                          <div
                            className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[10px] font-bold border-2 transition-all ${
                              isActive
                                ? "bg-sky-500 text-white border-sky-300 scale-110 shadow-sm"
                                : "bg-white text-gray-400 border-gray-200"
                            }`}
                          >
                            {isActive ? "✓" : st.step + 1}
                          </div>
                          <span
                            className={`block text-[9px] sm:text-[10px] font-bold leading-tight ${
                              isActive ? "text-sky-700 font-bold" : "text-gray-400"
                            }`}
                          >
                            {st.emoji} {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Receipt Details Card */}
                <div className="bg-white border border-gray-150 rounded-2xl p-4 space-y-3 shadow-inner">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 border-b border-gray-50 pb-2">
                    <Receipt className="w-3.5 h-3.5 text-gray-400" />
                    {t.cartReceiptTitle}
                  </h4>

                  <div className="space-y-2 max-h-36 overflow-y-auto">
                    {submittedOrder.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-sans text-gray-700">
                        <span>
                          {item.quantity}x <strong className="font-medium text-gray-800">{item.name}</strong>
                        </span>
                        <span className="font-mono">{(item.price * item.quantity).toFixed(3)} DT</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-dashed border-gray-150 pt-2.5 mt-2 space-y-1 text-xs">
                    <div className="flex justify-between text-gray-500">
                      <span>{t.cartReceiptMethod}</span>
                      <span className="font-semibold uppercase text-sky-600">
                        {submittedOrder.deliveryMethod === "consegna" ? t.cartConsegnaBtn.split(" ")[0] : t.cartAsportoBtn.split(" ")[0]}
                      </span>
                    </div>
                    {submittedOrder.deliveryMethod === "consegna" && (
                      <div className="flex justify-between text-gray-500">
                        <span>{t.cartReceiptDeliveryFee}</span>
                        <span className="font-mono">3.000 DT</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-gray-900 border-t border-gray-100 pt-2 text-sm">
                      <span>{t.cartReceiptTotal}</span>
                      <span className="font-mono text-emerald-600">{submittedOrder.total.toFixed(3)} DT</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseAndReset}
                className="w-full py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95"
              >
                {t.cartCloseAndClearBtn}
              </button>
            </div>
          ) : (
            /* ACTIVE CART SCREEN */
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {cartItemsList.length === 0 ? (
                /* Empty state */
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center border border-sky-100">
                    <ShoppingCart className="w-8 h-8 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-sans">{t.cartEmptyTitle}</h3>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto font-sans mt-1">
                      {t.cartEmptyDesc}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 bg-sky-100 hover:bg-sky-200 text-sky-700 text-xs font-semibold rounded-xl transition-all"
                  >
                    {t.cartEmptyBtn}
                  </button>
                </div>
              ) : (
                /* Non-empty cart layout */
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Items List scrollable */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 border-b border-gray-100">
                    {cartItemsList.map((item) => {
                      const qty = cart[item.id] || 0;
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-3 bg-white border border-sky-50/80 rounded-2xl shadow-sm hover:border-sky-100 transition-all justify-between"
                        >
                          <div className="space-y-1 flex-1 text-left">
                            <h4 className="font-bold text-gray-900 font-sans text-sm leading-tight">
                              {item.name}
                            </h4>
                            <span className="font-mono text-emerald-600 font-bold text-xs bg-emerald-50 px-1.5 py-0.5 rounded">
                              {item.price.toFixed(3)} DT
                            </span>
                          </div>

                          {/* Qty controller & trash */}
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-0.5" style={{ direction: "ltr" }}>
                              <button
                                onClick={() => onRemoveFromCart(item.id)}
                                className="p-1 text-gray-500 hover:bg-white rounded hover:text-sky-500 transition-all"
                                aria-label="Decrementa"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono text-xs font-bold text-gray-700 px-2 min-w-[16px] text-center">
                                {qty}
                              </span>
                              <button
                                onClick={() => onAddToCart(item)}
                                className="p-1 text-gray-500 hover:bg-white rounded hover:text-sky-500 transition-all"
                                aria-label="Incrementa"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => {
                                // Decrement to zero
                                for (let i = 0; i < qty; i++) {
                                  onRemoveFromCart(item.id);
                                }
                              }}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              aria-label="Elimina elemento"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Delivery choice + checkout inputs */}
                  <div className="bg-gray-50 border-t border-gray-100 overflow-y-auto max-h-[45%] shrink-0">
                    <form onSubmit={handlePlaceOrder} className="p-4 sm:p-6 space-y-4">
                      {/* Metodo consegna tabs */}
                      <div className="grid grid-cols-2 gap-2 p-1 bg-white border border-gray-200 rounded-xl shadow-inner shrink-0">
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod("asporto")}
                          className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                            deliveryMethod === "asporto"
                              ? "bg-sky-500 text-white font-bold"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {t.cartAsportoBtn}
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod("consegna")}
                          className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                            deliveryMethod === "consegna"
                              ? "bg-sky-500 text-white font-bold"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {t.cartConsegnaBtn}
                        </button>
                      </div>

                      <div className="space-y-3 pt-1 text-left">
                        {/* Name */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                            {t.cartFormName}
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            placeholder={t.cartFormNamePlaceholder}
                            required
                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-sky-500"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                            {t.cartFormPhone}
                          </label>
                          <div className="relative" style={{ direction: "ltr" }}>
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[10px] text-gray-400 font-mono font-bold">
                              +216
                            </span>
                            <input
                              type="tel"
                              name="phone"
                              value={customerInfo.phone}
                              onChange={handleInputChange}
                              placeholder={t.cartFormPhonePlaceholder}
                              required
                              className="w-full pl-12 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-sky-500 font-mono"
                            />
                          </div>
                        </div>

                        {/* Address (Only if delivery is selected) */}
                        {deliveryMethod === "consegna" && (
                          <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                              {t.cartFormAddress}
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={customerInfo.address}
                              onChange={handleInputChange}
                              placeholder={t.cartFormAddressPlaceholder}
                              required
                              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            />
                          </div>
                        )}

                        {/* Notes */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                            {t.cartFormNotes}
                          </label>
                          <textarea
                            name="notes"
                            value={customerInfo.notes}
                            onChange={handleInputChange}
                            placeholder={t.cartFormNotesPlaceholder}
                            rows={2}
                            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
                          />
                        </div>
                      </div>

                      {/* Calculations Panel */}
                      <div className="border-t border-gray-200 pt-3 space-y-1.5">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{t.cartCalcSubtotal}</span>
                          <span className="font-mono">{subtotal.toFixed(3)} DT</span>
                        </div>
                        {deliveryMethod === "consegna" && (
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{t.cartCalcDelivery}</span>
                            <span className="font-mono">3.000 DT</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm text-gray-900 font-bold border-t border-gray-200/50 pt-2">
                          <span>{t.cartCalcTotal}</span>
                          <span className="font-mono text-emerald-600 text-base">{total.toFixed(3)} DT</span>
                        </div>
                      </div>

                      {/* Submit Order Action Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || cartItemsList.length === 0 || !customerInfo.name || !customerInfo.phone}
                        className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                      >
                        {isSubmitting ? t.cartSubmittingBtn : t.cartSubmitBtn}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
