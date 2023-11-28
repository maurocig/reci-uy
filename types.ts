export type SidebarItem = {
  active:
    | 'inicio'
    | 'equipos'
    | 'carrocerias'
    | 'accesorios'
    | 'servicios'
    | 'nosotros'
    | 'contacto';
};

export type Product = {
  title: string;
  thumbnail: string;
  productType: string;
  brand: string;
  model: string;
  price: number;
  pictureUrls?: string[];
  stock: number;
  url: string;
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
