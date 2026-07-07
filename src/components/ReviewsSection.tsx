import React from "react";
import { Star, MessageSquare, Plus, Check } from "lucide-react";
import { Language, TranslationSet } from "../translations.ts";

interface ReviewsSectionProps {
  language: Language;
  t: TranslationSet;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ReviewsSection({ language, t }: ReviewsSectionProps) {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [formData, setFormData] = React.useState({
    author: "",
    rating: 5,
    comment: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");

  // Fetch initial reviews on mount
  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (response.ok) {
        setReviews(data);
      }
    } catch (err) {
      console.error("Fetch reviews error:", err);
    }
  };

  React.useEffect(() => {
    fetchReviews();
  }, []);

  const handleRatingChange = (newRating: number) => {
    setFormData((prev) => ({ ...prev, rating: newRating }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.comment) return;

    setIsSubmitting(true);
    setSuccessMsg("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const newReview = await response.json();
      if (response.ok) {
        setReviews((prev) => [newReview, ...prev]);
        setFormData({ author: "", rating: 5, comment: "" }); // Reset form
        setSuccessMsg(t.revFormSuccess);
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        const errAlert = language === "ar"
          ? "حدث خطأ أثناء حفظ تقييمك. يرجى المحاولة لاحقاً."
          : language === "fr"
          ? "Impossible d'ajouter l'avis. Veuillez réessayer."
          : "Impossibile caricare la recensione. Riprova.";
        alert(errAlert);
      }
    } catch (err) {
      console.error("Add review error:", err);
      const connErr = language === "ar"
        ? "خطأ في الشبكة. يرجى التحقق من الاتصال وإعادة المحاولة."
        : language === "fr"
        ? "Erreur réseau. Veuillez vérifier votre connexion et réessayer."
        : "Errore di rete. Riprova.";
      alert(connErr);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to render stars
  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= rating;
          return (
            <button
              key={star}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && handleRatingChange(star)}
              className={`${interactive ? "cursor-pointer transition-transform hover:scale-115 active:scale-95" : ""}`}
              aria-label={`Vota ${star} stelle`}
            >
              <Star
                className={`w-4 h-4 ${
                  isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  };

  // Helper to localize date/time strings on the fly for custom feel
  const getLocalizedDate = (dateStr: string) => {
    if (dateStr === "Oggi") {
      return language === "ar" ? "اليوم" : language === "fr" ? "Aujourd'hui" : "Oggi";
    }
    if (dateStr === "Ieri") {
      return language === "ar" ? "أمس" : language === "fr" ? "Hier" : "Ieri";
    }
    if (dateStr === "3 giorni fa") {
      return language === "ar" ? "منذ 3 أيام" : language === "fr" ? "Il y a 3 jours" : "3 giorni fa";
    }
    if (dateStr === "1 settimana fa") {
      return language === "ar" ? "منذ أسبوع" : language === "fr" ? "Il y a 1 semaine" : "1 settimana fa";
    }
    return dateStr;
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            {t.revBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            {t.revTitle}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-600 font-sans text-sm sm:text-base">
            {t.revDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Write a review (col-span-4) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-sky-50/50 to-emerald-50/20 rounded-3xl border border-sky-100/55 p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-sky-200/10 rounded-full blur-xl"></div>
            
            <h3 className="text-lg font-bold text-gray-900 font-sans mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-sky-500" />
              {t.revFormTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">{t.revFormName}</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder={t.revFormNamePlaceholder}
                  required
                  className="w-full px-4 py-2.5 border border-sky-100 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  id="review-author-input"
                />
              </div>

              {/* Stars rating selection */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 block">{t.revFormRating}</label>
                <div className="bg-white border border-sky-100 rounded-xl p-3.5 flex justify-center shadow-sm">
                  {renderStars(formData.rating, true)}
                </div>
              </div>

              {/* Comment */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">{t.revFormComment}</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder={t.revFormCommentPlaceholder}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-sky-100 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                  id="review-comment-input"
                />
              </div>

              {/* Feedback messages */}
              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                  {successMsg}
                </div>
              )}

              {/* Submit btn */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.author || !formData.comment}
                className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-all active:scale-95 shadow-sm shadow-sky-500/20 flex items-center justify-center gap-1.5"
                id="submit-review-btn"
              >
                <Plus className="w-4 h-4" />
                {t.revFormSubmit}
              </button>
            </form>
          </div>

          {/* Feed list (col-span-8) */}
          <div className="lg:col-span-8 space-y-4" style={{ direction: "ltr" }}>
            {reviews.length === 0 ? (
              <div className="py-12 text-center bg-gray-50 border border-dashed border-sky-100 rounded-2xl">
                <span className="text-gray-400">{t.revFormEmpty}</span>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-sky-100/50 hover:border-sky-100 p-5 rounded-2xl shadow-sm transition-all duration-200 text-left"
                  id={`review-item-${review.id}`}
                >
                  <div className="flex justify-between items-start mb-2.5 gap-2">
                    <div>
                      <h4 className="font-bold text-gray-900 font-sans text-sm sm:text-base leading-tight">
                        {review.author}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">
                        {getLocalizedDate(review.date)}
                      </span>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed whitespace-pre-wrap">
                    {review.comment}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
