/* DEMO tier bajo — Gimnasio (tema oscuro) */
export const site = {
  name: "Pulso",
  tagline: "Entrena con propósito",
  logoText: "PULSO",
  whatsapp: "34600777888",
  email: "hola@gimnasiopulso.es",
  formAccessKey: "TU-ACCESS-KEY-WEB3FORMS",
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Instalaciones", href: "#features" },
    { label: "Cuotas", href: "#pricing" },
    { label: "Apúntate", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Gimnasio · Bilbao",
    title: "Tu mejor versión\nempieza hoy",
    subtitle: "Salas equipadas, clases dirigidas y entrenadores que te guían. Primera semana gratis para que lo pruebes sin excusas.",
    ctaPrimary: { label: "Semana gratis", href: "#contacto" },
    ctaSecondary: { label: "Ver cuotas", href: "#pricing" },
    image: "",
  },
  featuresTitle: "Todo lo que necesitas",
  features: [
    { icon: "🏋️", title: "Sala de fuerza", text: "Peso libre y máquinas de gama alta." },
    { icon: "🔥", title: "Clases dirigidas", text: "HIIT, ciclo, body pump y más, cada día." },
    { icon: "🧑‍🏫", title: "Entrenadores", text: "Plan personalizado y seguimiento real." },
    { icon: "🕒", title: "Abierto 6–24h", text: "Entrena cuando te encaje, todos los días." },
  ],
  pricingTitle: "Elige tu cuota",
  pricing: [
    { name: "Mensual", price: "29€", period: "/mes", features: ["Acceso total", "Clases incluidas", "Sin permanencia"], cta: "Apuntarme", highlight: false },
    { name: "Trimestral", price: "75€", period: "/3 meses", features: ["Ahorras 12€", "Acceso total", "1 sesión PT gratis"], cta: "Apuntarme", highlight: true },
    { name: "Anual", price: "260€", period: "/año", features: ["Ahorras 88€", "Acceso total", "Plan nutricional"], cta: "Apuntarme", highlight: false },
  ],
  cta: { title: "Sin excusas. Empieza ya.", subtitle: "Primera semana gratis. Te enseñamos todo el primer día.", button: { label: "Probar gratis", href: "#contacto" } },
  footer: { address: "Gran Vía 30, 48001 Bilbao", phone: "+34 600 777 888", hours: "Lun–Dom · 06:00–24:00", social: { instagram: "https://instagram.com/", facebook: "", tiktok: "https://tiktok.com/" } },
} as const;
export type Site = typeof site;
