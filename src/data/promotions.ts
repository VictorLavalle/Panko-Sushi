export interface Promotion {
  id: string;
  day: string;
  dayEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  badge: string;
  badgeEn: string;
  badgeColor: string;
  cta: string;
  ctaEn: string;
}

export const promotions: Promotion[] = [
  {
    id: "diario-lonely",
    day: "Todos los días",
    dayEn: "Every day",
    title: "Combo Lonely Kawai",
    titleEn: "Lonely Kawai Combo",
    description: "1 refresco de avia + 1 rollo panko o karui (pollo o arrachera) + 1 mochi",
    descriptionEn: "1 Avia drink + 1 panko or karui roll (chicken or steak) + 1 mochi",
    price: "$135",
    badge: "De la casa",
    badgeEn: "House Pick",
    badgeColor: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
    cta: "Ordena ahora",
    ctaEn: "Order now",
  },
  {
    id: "lunes-combo",
    day: "Lunes",
    dayEn: "Monday",
    title: "Combo Mixto",
    titleEn: "Mixed Combo",
    description: "1 Gohan + 1 Rollo de pollo o arrachera",
    descriptionEn: "1 Gohan + 1 Roll — chicken or steak",
    price: "$199",
    badge: "Lunes Especial",
    badgeEn: "Monday Special",
    badgeColor: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
    cta: "Pídelo hoy",
    ctaEn: "Order today",
  },
  {
    id: "martes-gohan",
    day: "Martes",
    dayEn: "Tuesday",
    title: "2x Gohan",
    titleEn: "2x Gohan",
    description: "2 Gohan de pollo $175 · 2 de arrachera $195",
    descriptionEn: "2 Chicken Gohan $175 · 2 Steak Gohan $195",
    price: "$175",
    badge: "Favorito",
    badgeEn: "Favorite",
    badgeColor: "bg-pink-500/8 text-pink-600 dark:text-pink-400",
    cta: "Ordena ahora",
    ctaEn: "Order now",
  },
  {
    id: "martes-boneless",
    day: "Martes",
    dayEn: "Tuesday",
    title: "2x Boneless & Chips",
    titleEn: "2x Boneless & Chips",
    description: "2 órdenes con papas. Sabores: BBQ, Búfalo, Chipotle, Cajún",
    descriptionEn: "2 orders with fries. Flavors: BBQ, Buffalo, Chipotle, Cajun",
    price: "$245",
    badge: "Top Seller",
    badgeEn: "Top Seller",
    badgeColor: "bg-pink-500/8 text-pink-600 dark:text-pink-400",
    cta: "Lo quiero",
    ctaEn: "I want it",
  },
  {
    id: "miercoles-rollos",
    day: "Mié & Jue",
    dayEn: "Wed & Thu",
    title: "2x Rollos",
    titleEn: "2x Rolls",
    description: "Pollo $195 · Arrachera $205 · Camarón $215. Empanizado o natural",
    descriptionEn: "Chicken $195 · Steak $205 · Shrimp $215. Breaded or natural",
    price: "$195",
    badge: "Más vendido",
    badgeEn: "Best Seller",
    badgeColor: "bg-purple-500/8 text-purple-600 dark:text-purple-400",
    cta: "Ordena ahora",
    ctaEn: "Order now",
  },
  {
    id: "jueves-yakimeshi",
    day: "Jueves",
    dayEn: "Thursday",
    title: "2x Yakimeshi",
    titleEn: "2x Yakimeshi",
    description: "2 de pollo $199 · 2 de arrachera $219",
    descriptionEn: "2 Chicken $199 · 2 Steak $219",
    price: "$199",
    badge: "De la casa",
    badgeEn: "House Favorite",
    badgeColor: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
    cta: "Pídelo hoy",
    ctaEn: "Order today",
  },
  {
    id: "finde-cuates",
    day: "Vie & Sáb",
    dayEn: "Fri & Sat",
    title: "Combo Cuates",
    titleEn: "Buddy Combo",
    description: "1 entrada + 2 refrescos + 2 rollos a elegir",
    descriptionEn: "1 starter + 2 drinks + 2 rolls of your choice",
    price: "$340",
    badge: "Para compartir",
    badgeEn: "Shareable",
    badgeColor: "bg-pink-500/8 text-pink-600 dark:text-pink-400",
    cta: "Perfecto para dos",
    ctaEn: "Perfect for two",
  },
];
