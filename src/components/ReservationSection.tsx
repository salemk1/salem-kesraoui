import React from "react";
import { Calendar, Clock, Users, MapPin, CheckCircle, Ticket, Compass } from "lucide-react";
import { Language, TranslationSet } from "../translations.ts";

interface ReservationSectionProps {
  language: Language;
  t: TranslationSet;
}

interface SeatingTable {
  id: string;
  name: string;
  capacity: number;
  location: string;
}

const getLocalizedTables = (language: Language) => {
  const tableWord = language === "ar" ? "طاولة" : language === "fr" ? "Table" : "Tavolo";
  const locations = {
    it: {
      terrace: "Terrazza Esterna 🌿",
      oven: "Vista Forno a Legna 🔥",
      window: "Finestra Panoramica 🪟",
      family: "Salone Familiare 👨‍👩‍👧‍👦",
      cozy: "Angolo Intimo ✨"
    },
    fr: {
      terrace: "Terrasse Extérieure 🌿",
      oven: "Vue sur Four à Bois 🔥",
      window: "Fenêtre Panoramique 🪟",
      family: "Salon Familial 👨‍👩‍👧‍👦",
      cozy: "Coin Intime ✨"
    },
    ar: {
      terrace: "شرفة خارجية 🌿",
      oven: "إطلالة على فرن الحطب 🔥",
      window: "إطلالة على النافذة 🪟",
      family: "الصالون العائلي 👨‍👩‍👧‍👦",
      cozy: "ركن هادئ ✨"
    }
  }[language] || {
    terrace: "Terrazza Esterna 🌿",
    oven: "Vista Forno a Legna 🔥",
    window: "Finestra Panoramica 🪟",
    family: "Salone Familiare 👨‍👩‍👧‍👦",
    cozy: "Angolo Intimo ✨"
  };

  return [
    { id: "t1", name: `${tableWord} 1`, capacity: 2, location: locations.terrace },
    { id: "t2", name: `${tableWord} 2`, capacity: 4, location: locations.oven },
    { id: "t3", name: `${tableWord} 3`, capacity: 2, location: locations.window },
    { id: "t4", name: `${tableWord} 4`, capacity: 6, location: locations.family },
    { id: "t5", name: `${tableWord} 5`, capacity: 4, location: locations.terrace },
    { id: "t6", name: `${tableWord} 6`, capacity: 2, location: locations.cozy }
  ];
};

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
];

export default function ReservationSection({ language, t }: ReservationSectionProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    time: "20:00",
    guests: "2",
  });
  const [selectedTableId, setSelectedTableId] = React.useState("t2");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [confirmedReservation, setConfirmedReservation] = React.useState<any | null>(null);

  const localizedTables = React.useMemo(() => {
    return getLocalizedTables(language);
  }, [language]);

  const selectedTable = React.useMemo(() => {
    return localizedTables.find((t) => t.id === selectedTableId) || localizedTables[1];
  }, [localizedTables, selectedTableId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tablePreference: `${selectedTable.name} (${selectedTable.location})`
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setConfirmedReservation(data.reservation);
      } else {
        const errAlert = language === "ar"
          ? "حدث خطأ أثناء الحجز. يرجى إعادة المحاولة."
          : language === "fr"
          ? "Erreur lors de la réservation. Veuillez réessayer."
          : "Errore durante la prenotazione. Riprova.";
        alert(errAlert);
      }
    } catch (error) {
      console.error("Reservation submit error:", error);
      const netErr = language === "ar"
        ? "خطأ في الشبكة. يرجى التحقق من الاتصال وإعادة المحاولة."
        : language === "fr"
        ? "Erreur réseau. Veuillez vérifier votre connexion et réessayer."
        : "Errore di rete. Controlla la tua connessione e riprova.";
      alert(netErr);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-20 bg-sky-950/95 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/60 via-slate-950 to-slate-950 -z-10"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            {t.resBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            {t.resTitle}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-sky-200/80 font-sans text-sm sm:text-base">
            {t.resDesc}
          </p>
        </div>

        {confirmedReservation ? (
          /* CONFIRMED RESERVATION TICKET */
          <div className="max-w-md mx-auto bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/30 animate-in fade-in zoom-in duration-300">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white p-6 text-center relative">
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
              <CheckCircle className="w-12 h-12 text-emerald-300 mx-auto mb-3 animate-pulse" />
              <h3 className="text-xl font-bold font-sans">{t.resConfirmTitle}</h3>
              <p className="text-xs text-sky-100/90 font-mono mt-1">{t.resConfirmSub}</p>
            </div>

            {/* Ticket Details */}
            <div className="p-6 space-y-6 pt-8 relative text-left" style={{ direction: "ltr" }}>
              {/* Ticket border dot separations */}
              <div className="absolute -top-4 -left-3 w-6 h-6 bg-sky-950 rounded-full"></div>
              <div className="absolute -top-4 -right-3 w-6 h-6 bg-sky-950 rounded-full"></div>

              {/* Booking Pass ID */}
              <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold block">
                    {t.resConfirmIdLabel}
                  </span>
                  <span className="text-lg font-mono font-bold text-sky-700 tracking-wider">
                    {confirmedReservation.id}
                  </span>
                </div>
                <Ticket className="w-10 h-10 text-sky-500/80" />
              </div>

              {/* Guest & Contact Info */}
              <div className="grid grid-cols-2 gap-4 text-sm font-sans border-b border-gray-100 pb-5">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">{t.resConfirmGuest}</span>
                  <span className="font-semibold text-gray-800">{confirmedReservation.name}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">{t.resConfirmPhone}</span>
                  <span className="font-semibold text-gray-800">{confirmedReservation.phone}</span>
                </div>
              </div>

              {/* Date & Time Info */}
              <div className="grid grid-cols-3 gap-3 text-sm font-sans border-b border-gray-100 pb-5 text-center">
                <div className="bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/30">
                  <Calendar className="w-4.5 h-4.5 text-sky-600 mx-auto mb-1" />
                  <span className="text-[10px] text-gray-400 block">{t.resConfirmDate}</span>
                  <span className="font-bold text-xs text-gray-800">{confirmedReservation.date}</span>
                </div>
                <div className="bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/30">
                  <Clock className="w-4.5 h-4.5 text-sky-600 mx-auto mb-1" />
                  <span className="text-[10px] text-gray-400 block">{t.resConfirmTime}</span>
                  <span className="font-bold text-xs text-gray-800">{confirmedReservation.time}</span>
                </div>
                <div className="bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/30">
                  <Users className="w-4.5 h-4.5 text-sky-600 mx-auto mb-1" />
                  <span className="text-[10px] text-gray-400 block">{t.resConfirmPeople}</span>
                  <span className="font-bold text-xs text-gray-800">
                    {confirmedReservation.guests} {Number(confirmedReservation.guests) === 1 ? t.resFormPersonLabel : t.resFormPeopleLabel}
                  </span>
                </div>
              </div>

              {/* Table details */}
              <div className="space-y-1.5 font-sans">
                <span className="text-xs text-gray-400 block">{t.resConfirmTableArea}</span>
                <div className="flex items-center gap-2 text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-sm">
                  <MapPin className="w-4.5 h-4.5 shrink-0" />
                  {confirmedReservation.tablePreference}
                </div>
              </div>

              {/* Rules / Notes */}
              <div className="text-[11px] text-gray-500 font-sans leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-700 mb-1">{t.resConfirmNotesTitle}</p>
                {t.resConfirmNotesBody}
              </div>

              <button
                onClick={() => setConfirmedReservation(null)}
                className="w-full py-3 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-gray-800 transition-colors"
              >
                {t.resConfirmAnotherBtn}
              </button>
            </div>
          </div>
        ) : (
          /* RESERVATION SCHEDULER LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Form inputs (col-span-5) */}
            <form onSubmit={handleFormSubmit} className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-sans text-sky-300 border-b border-white/10 pb-2">
                  {t.resFormTitle}
                </h3>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">{t.resFormName}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.resFormNamePlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-sky-200/40 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">{t.resFormPhone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.resFormPhonePlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-sky-200/40 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">{t.resFormEmail}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.resFormEmailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-sky-200/40 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Date */}
                  <div className="col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-sky-200">{t.resFormDate}</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  {/* Guests */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sky-200">{t.resFormGuests}</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num} className="bg-sky-950 text-white">
                          {num} {num === 1 ? t.resFormPersonLabel : t.resFormPeopleLabel}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time picker */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-sky-200">{t.resFormTime}</label>
                  <div className="grid grid-cols-4 gap-2 max-h-24 overflow-y-auto border border-white/10 p-2 rounded-xl bg-slate-950/40 scrollbar-thin scrollbar-thumb-white/10">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, time: slot }))}
                        className={`py-1 rounded-md text-[11px] font-mono font-bold transition-colors ${
                          formData.time === slot
                            ? "bg-sky-500 text-white"
                            : "bg-white/5 text-sky-200 hover:bg-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.phone}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/30 transition-all duration-200 active:scale-95"
                id="submit-reservation-btn"
              >
                {isSubmitting ? t.resFormSubmitting : t.resFormSubmit}
              </button>
            </form>

            {/* Interactive Visual Map (col-span-7) */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between" style={{ direction: "ltr" }}>
              <div>
                <h3 className="text-lg font-bold font-sans text-sky-300 border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>{t.resMapTitle}</span>
                  <span className="text-xs text-sky-200/60 font-normal">{t.resMapSub}</span>
                </h3>

                {/* Legend */}
                <div className="flex gap-4 justify-center py-4 text-xs font-sans border-b border-white/5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-md bg-emerald-500 block"></span>
                    <span>{t.resMapSelected}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-md bg-white/5 border border-white/20 block"></span>
                    <span>{t.resMapAvailable}</span>
                  </div>
                </div>

                {/* Map Grid representational layout */}
                <div className="bg-slate-950/60 border border-white/10 p-6 rounded-2xl relative min-h-[220px] flex flex-col justify-between">
                  {/* Entrance Label */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-800 text-[10px] font-mono px-3 py-0.5 rounded-full uppercase border border-sky-600 font-bold">
                    {t.resMapEntrance}
                  </div>

                  {/* Wood oven representational panel */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-950/80 text-red-300 text-[10px] font-mono px-3 py-6 rounded-xl border border-red-800 flex items-center justify-center [writing-mode:vertical-lr] font-bold">
                    {t.resMapOven}
                  </div>

                  {/* Tables Layout */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto pr-12">
                    {localizedTables.map((table) => {
                      const isSelected = selectedTableId === table.id;
                      return (
                        <button
                          key={table.id}
                          type="button"
                          onClick={() => setSelectedTableId(table.id)}
                          className={`aspect-square p-3.5 rounded-2xl border flex flex-col items-center justify-between transition-all group ${
                            isSelected
                              ? "bg-emerald-500 text-white border-emerald-400 scale-105 shadow-lg shadow-emerald-500/20"
                              : "bg-white/5 text-sky-200 border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
                          id={`table-select-${table.id}`}
                        >
                          <span className="text-xs font-bold font-sans">{table.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                            isSelected ? "bg-emerald-600 text-white" : "bg-white/10 text-sky-300"
                          }`}>
                            {table.capacity} {t.resFormPeopleLabel}
                          </span>
                          <Compass className={`w-4 h-4 mt-1 transition-transform ${isSelected ? "text-white" : "text-sky-400/80 group-hover:rotate-45"}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Selected Table details bar */}
              <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between font-sans text-sm">
                <div>
                  <span className="text-xs text-sky-300 block">{t.resMapSelectedTable}</span>
                  <span className="font-bold text-white text-base">{selectedTable.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-sky-300 block">{t.resMapPosition}</span>
                  <span className="font-semibold text-emerald-400">{selectedTable.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
