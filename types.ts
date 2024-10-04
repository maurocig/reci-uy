import { EnumType } from "typescript";

export type SidebarItem = {
  active:
    | "inicio"
    | "equipos"
    | "carrocerias"
    | "accesorios"
    | "servicios"
    | "nosotros"
    | "contacto";
};

export type Product = {
  title: string;
  thumbnail: string;
  productType: string;
  brand: string;
  model: string;
  price: number;
  stock: number;
  url: string;
  pictureUrls?: string[];
  line?: string;
  shortDescription?: string;
  description?: string;
  billboardImage?: string;
  image?: string;
  urlSpecs?: string;
  urlTk?: string;
  features?: string[];
  isNew?: boolean;
};

export type Accesorio = {
  label: string;
  brand: string;
  code: string;
  description: string;
  colors: string[];
  images: string[];
  observations: string;
  category: "luminaria" | "parachoques" | "tabiques";
  url?: string;
};
