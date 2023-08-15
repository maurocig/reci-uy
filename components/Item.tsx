import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type ItemProps = {
  product: Product;
  key: string;
  showDescription?: boolean;
  tagColor?: string | undefined;
};

export default function Item({
  showDescription,
  product,
  key,
  tagColor,
}: ItemProps) {
  return (
    <button className="group relative flex aspect-[5/3] w-full flex-col justify-between overflow-hidden rounded-lg bg-slate-200 shadow-lg duration-200 hover:scale-[103%] hover:drop-shadow-3xl sm:aspect-square">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-100 to-sky-200 ring-gray-400">
        <Image
          src={product.thumbnail}
          fill
          alt="Product Image"
          className="relative object-cover transition-all duration-200 group-hover:scale-[106%]"
        />
      </div>

      {/* overlay */}
      <div className="absolute flex h-full w-full flex-col items-center justify-between transition-all">
        <p
          className={twMerge(
            `ml-3 mt-3 flex items-center self-start rounded-full px-6 py-1 text-start font-semibold text-gray-900 shadow-md shadow-black/20 ring-black`,
            tagColor
          )}
          key={key}
        >
          {product.title}
        </p>

        {showDescription && (
          <p className="hidden bg-gradient-to-b from-transparent to-slate-900/40 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:block ">
            {product.shortDescription}
          </p>
        )}

        <div className="mb-4 transition-all ">
          <Button className="text-md font-semibold opacity-100 shadow-lg transition-all ease-in group-hover:opacity-100 sm:opacity-0">
            Ver producto <FaChevronRight className="m-0 inline p-0" />
          </Button>
        </div>
      </div>
    </button>
  );
}
