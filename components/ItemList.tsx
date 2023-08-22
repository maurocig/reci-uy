"use client";

import { Product } from "@/types";
import Image from "next/image";
import Item from "./Item";

export interface ProductItem extends Product {
  twClass?: string;
}

type ItemListProps = {
  products: ProductItem[];
  showDescription?: boolean;
};

export default function ItemList({
  products,
  showDescription = false,
}: ItemListProps) {
  products.forEach((product) => {
    switch (product.brand) {
      case "Liderkit":
        product.twClass = "bg-orange-400";
        return;
      case "Thermo King":
        product.twClass = "bg-sky-300";
        return;
      case "Fibrasil":
        product.twClass = "bg-white";
        return;
    }
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, i) => {
        return (
          <div key={`${product.model}${i}`}>
            <Item
              product={product}
              showDescription={showDescription}
              tagColor={product.twClass}
            />
          </div>
        );
      })}
    </div>
  );
}
