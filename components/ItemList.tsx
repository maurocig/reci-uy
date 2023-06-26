import { Product } from "@/types";
import Image from "next/image";
import Item from "./Item";

type ItemListProps = {
  products: Product[];
};

export default function ItemList({ products }: ItemListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {products.map((product, i) => {
        return (
          <div key={`productDiv${i}`}>
            <Item product={product} key={`producto${i}`} />
          </div>
        );
      })}
    </div>
  );
}
