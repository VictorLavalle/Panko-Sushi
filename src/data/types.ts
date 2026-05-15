/** A protein option with its own price */
export interface ProteinOption {
  name: string;
  price: number;
}

/** A single menu item */
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  descriptionEn?: string;
  price?: number;
  proteinOptions?: ProteinOption[];
  tag?: "popular" | "new" | "spicy" | "chef" | "shareable" | "house";
}

/** A menu category grouping items */
export interface Category {
  id: string;
  name: string;
  displayOrder: number;
  description?: string;
  descriptionEn?: string;
  items: MenuItem[];
}

/** Complete menu data structure */
export interface MenuData {
  categories: Category[];
  restaurant: RestaurantData;
}

/** Restaurant metadata */
export interface RestaurantData {
  name: string;
  tagline: string;
  phone: string;
  address: string;
  addressUrl: string;
  instagram: string;
  instagramUrl: string;
  facebook: string;
  facebookUrl: string;
  hours: string;
  logoSrc: string;
}
