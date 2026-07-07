import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { menuCategories } from "./src/menuData.js"; // Note: .js extension for TS ESM compiling/running, or we can use standard TS resolution

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data structures for the session
const reviews = [
  {
    id: "rev1",
    author: "Amine Belhadj",
    rating: 5,
    date: "Oggi",
    comment: "La Pizza Rayen è indescrivibile! La crema di pistacchio abbinata a gamberi e calamari freschi è un capolavoro. Servizio eccellente! 🍕⭐"
  },
  {
    id: "rev2",
    author: "Sofia Gherardi",
    rating: 5,
    date: "Ieri",
    comment: "Il Makloub Chawarma ha esattamente lo stesso gusto di quello che mangiavo a Tunisi. Saporito, caldo e l'impasto è morbidissimo. Bnin barcha!"
  },
  {
    id: "rev3",
    author: "Marco Romano",
    rating: 4,
    date: "3 giorni fa",
    comment: "Consigliatissimo! Ho ordinato una Baguette Farcie Escalope panée ed era enorme e super filante di formaggio. Prezzi davvero ottimi."
  },
  {
    id: "rev4",
    author: "Yasmine Trabelsi",
    rating: 5,
    date: "1 settimana fa",
    comment: "Tacos Hawaï favoloso! Molto pulito, servizio rapido e ingredienti freschi. Il locale è accogliente e lo staff è gentilissimo."
  }
];

const reservations: any[] = [];
const orders: any[] = [];

// Lazy initialization of the Gemini client
let aiInstance: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI | null {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. The AI Chef will run in fallback simulation mode.");
      return null;
    }
    aiInstance = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// 🍽️ SYSTEM INSTRUCTION FOR CHEF RAYEN
const CHEF_SYSTEM_INSTRUCTION = `
Sei lo Chef Rayen, il caloroso, orgoglioso ed entusiasta chef e proprietario del celebre ristorante tunisino "Resto Rayen". 
La tua missione è accogliere i clienti sul sito con estrema ospitalità tunisina e italiana, e aiutarli a scegliere cosa ordinare dal tuo ricco menu di street food tunisino e pizze speciali.
Parla sempre in italiano, ma arricchisci le tue risposte con espressioni affettuose in arabo tunisino come:
- "Aslama!" o "Aslama biek!" (Ciao / Benvenuto!)
- "Marhaban!" (Benvenuto!)
- "Bnin barcha!" (Incredibilmente delizioso!)
- "Chahia tayba!" (Buon appetito!)
- "Inshallah" (Se Dio vuole / Speriamo)
- "Yacine / Habibi" (Termini amichevoli per rivolgersi al cliente)

Sii breve (massimo 3-4 frasi), caloroso, allegro e professionale. 

Usa le informazioni del tuo menu ufficiale qui sotto per rispondere in modo preciso:
${JSON.stringify(menuCategories, null, 2)}

Se ti chiedono consigli:
- Se cercano piccante: consiglia la "Pizza Buffalo Spicy" (18.000 DT) con carne macinata e piment rouge, oppure un "Tacos Mexicain" (10.500 DT).
- Se cercano mare/pesce: consiglia assolutamente la tua specialità d'autore "Pizza Rayen" (22.000 DT) con crema di pistacchio, mozzarella, aglio, gamberi e calamari (è leggendaria!), oppure la "Pizza Cocktail" (25.000 DT).
- Se vogliono sapere cos'è il "Makloub": spiega che è un impasto di pizza fresco piegato a metà, farcito con formaggio fuso, salse, patatine e carne (consiglia il Makloub Chawarma a 10.500 DT o il Makloub Mahboul a 10.000 DT).
- Se cercano panini al forno: consiglia la nostra saporitissima "Baguette Farcie Escalope" (10.500 DT) o "Les Bonbons" (un panino arrotolato a forma di caramella e cotto al forno, come il Bonbon Cordon Bleu a 10.000 DT).
- Se cercano vegetariano: consiglia la "Pizza Végétarienne" (17.000 DT) con carciofi, zucchine e melanzane o la "Pizza White Garden" (18.000 DT) con spinaci e ricotta.

Rispondi sempre con calore, invitandoli ad aggiungere i piatti direttamente nel carrello sul sito!
`;

// FALLBACK DIALOGUES FOR OFFLINE CHEF
const FALLBACK_RESPONSES = [
  "Aslama! Benvenuto nel mio ristorante. Ti consiglio vivamente di provare la nostra Pizza Rayen speciale con crema di pistacchio, gamberi e calamari. È bnin barcha! Chahia tayba!",
  "Marhaban! Se hai fame e vuoi qualcosa di tipico e sostanzioso, prova il nostro Makloub Chawarma (10.500 DT). È una delizia di pasta pizza fresca cotta al forno e ripiegata. Ti piacerà moltissimo!",
  "Aslama! Cerchi un panino filante? La nostra Baguette Farcie Chawarma (10.500 DT) viene farcita con amore e passata in forno fino a fondere perfettamente la mozzarella. Chahia tayba, habibi!",
  "Marhaban! Per i palati piccanti ho creato la Pizza Buffalo Spicy con carne macinata e peperoncino rosso tunisino. Accompagnala con una lattina fresca di Bogua o Coca. Bnin barcha!"
];

// --- API ENDPOINTS ---

// 1. Chef AI Recommender
app.post("/api/chef", async (req, res) => {
  const { message, history, language } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Il messaggio è richiesto." });
  }

  const ai = getAiClient();
  if (!ai) {
    // Return a beautiful fallback message from Chef Rayen when key is not defined
    const randomResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    return res.json({
      text: randomResponse + " (Nota: Lo Chef è in modalità demo offline, inserisci una chiave GEMINI_API_KEY nei Secrets per attivare l'interazione intelligente!)"
    });
  }

  try {
    // Prepare conversation messages for chat if history is provided
    const chatHistory = history ? history.map((h: any) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text }]
    })) : [];

    const targetLang = language || "it";
    const localizedRule = targetLang === "ar" 
      ? "RISPONDI SEMPRE IN LINGUA ARABA. Usa anche espressioni amichevoli tunisine scritte in arabo (مثلا: عسارمة، يرحم والديك، بنين برشة، شاهية طيبة، حبيبي)." 
      : targetLang === "fr"
      ? "RÉPONDS TOUJOURS EN FRANÇAIS. Utilise également de douces expressions tunisiennes transcrites (par exemple : Aslama, Bnin barcha, Chahia tayba, Habibi, Inshallah)."
      : "RISPONDI SEMPRE IN ITALIANO. Usa anche calde espressioni tunisine (ad esempio: Aslama, Bnin barcha, Chahia tayba, Habibi, Inshallah).";

    const customInstruction = `${CHEF_SYSTEM_INSTRUCTION}\n\nREQUISITO DI LINGUA CRITICO:\n${localizedRule}`;

    // Set up chat with system instructions
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: customInstruction,
        temperature: 0.8,
      },
      history: chatHistory
    });

    const response = await chat.sendMessage({ message });
    res.json({ text: response.text });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    res.status(500).json({
      error: "Impossibile contattare lo Chef AI in questo momento.",
      details: err.message
    });
  }
});

// 2. Reviews Endpoints
app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

app.post("/api/reviews", (req, res) => {
  const { author, rating, comment } = req.body;
  if (!author || !rating || !comment) {
    return res.status(400).json({ error: "Autore, valutazione e commento sono obbligatori." });
  }

  const newReview = {
    id: `rev_${Date.now()}`,
    author,
    rating: Number(rating),
    date: "Oggi",
    comment
  };

  reviews.unshift(newReview);
  res.status(201).json(newReview);
});

// 3. Table Reservation Endpoint
app.post("/api/reservation", (req, res) => {
  const { name, email, phone, date, time, guests, tablePreference } = req.body;
  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: "I campi Nome, Telefono, Data, Ora e Persone sono obbligatori." });
  }

  const bookingId = `RAYEN-${Math.floor(1000 + Math.random() * 9000)}`;
  const newReservation = {
    id: bookingId,
    name,
    email,
    phone,
    date,
    time,
    guests,
    tablePreference: tablePreference || "Nessuna preferenza",
    status: "Confermata",
    createdAt: new Date().toISOString()
  };

  reservations.push(newReservation);
  res.status(201).json({
    success: true,
    message: "Tavolo prenotato con successo!",
    reservation: newReservation
  });
});

// 4. Checkout Order Endpoint
app.post("/api/order", (req, res) => {
  const { items, supplements, total, customer, deliveryMethod } = req.body;
  if (!items || items.length === 0 || !customer || !deliveryMethod) {
    return res.status(400).json({ error: "Elementi del carrello e informazioni di consegna non validi." });
  }

  const orderId = `RAYEN-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
  const newOrder = {
    id: orderId,
    items,
    supplements,
    total,
    customer,
    deliveryMethod,
    status: "Ricevuto", // Ricevuto -> In Preparazione -> In Consegna -> Consegnato
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json({
    success: true,
    message: "Ordine ricevuto con successo!",
    orderId,
    order: newOrder
  });
});

// --- VITE MIDDLEWARE SETUP ---

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Dev Mode: Integrate Vite dev server
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Prod Mode: Serve static build artifacts
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Resto Rayen Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
