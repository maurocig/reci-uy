import { Product } from "@/types";
import Image from "next/image";
import Item from "./Item";

type ItemListProps = {
  products: Product[];
  showDescription?: boolean;
};

export default function ItemList({
  products,
  showDescription = false,
}: ItemListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, i) => {
        return (
          <div key={`productDiv${i}`}>
            <Item
              product={product}
              showDescription={showDescription}
              key={`producto${i}`}
              tagColor={
                product.brand === "Liderkit"
                  ? "bg-gradient-to-b from-orange-500/70 to-orange-400/70 "
                  : "bg-gradient-to-b from-sky-200/70 to-sky-100/70 "
              }
            />
          </div>
        );
      })}
    </div>
  );
}
