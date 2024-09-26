import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { Plug, SnowflakeIcon } from "lucide-react";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type ItemProps = {
  product: Product;
  buttonText: string;
  buttonIcon?: IconType;
  showDescription?: boolean;
  tagColor?: string | undefined;
};

export default function Item({
  showDescription,
  product,
  tagColor,
  buttonIcon: ButtonIcon,
  buttonText,
}: ItemProps) {
  return (
    <div
      role="button"
      className="group relative flex aspect-[3/2] w-full flex-col justify-between overflow-hidden rounded-lg bg-slate-200 shadow-lg lg:aspect-square"
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-100 to-sky-200 ring-gray-400">
        <Image
          src={product.thumbnail}
          fill
          alt="Product Image"
          className="relative object-cover transition rounded-xl drop-shadow-lg group-hover:scale-105 group-hover:rounded-xl group-hover:drop-shadow-xl"
        />
      </div>

      {/* overlay */}
      <div className="absolute flex flex-col items-center justify-between w-full h-full p-4 overflow-hidden transition-all">
        <div className="flex justify-between w-full">
          <p
            className={twMerge(
              `flex items-center self-start whitespace-nowrap rounded-full px-4 py-1 text-start font-semibold
						 text-gray-900 shadow-sm ring-black transition `,
              tagColor
            )}
          >
            {product.title}
            {product.line === "VP Truck" && (
              <span className="flex items-center justify-start ml-2 text-xs text-blue-800">
                MAX
                <SnowflakeIcon className="inline ml-1" size={11} />
              </span>
            )}
          </p>
          {product.model === "V-500" && (
            <p
              className={twMerge(
                `flex items-center self-start whitespace-nowrap rounded-full bg-teal-400 px-3 py-1 text-start
						 font-semibold text-gray-900 shadow-sm ring-black transition`
                // tagColor
              )}
            >
              <span className="mr-1 lg:hidden xl:inline">Dual</span>
              <Plug className="inline" size={14} />
            </p>
          )}

          {/* New tag */}
          {product.isNew && (
            <p
              className={`mr-[-50px] flex rotate-45 items-center self-end rounded-none bg-red-500 px-10 py-1 text-start font-semibold text-gray-900 shadow-sm ring-black transition`}
            >
              <span className="flex items-center justify-end ml-2 text-white">
                Nuevos!
              </span>
            </p>
          )}
        </div>

        {showDescription && (
          <p className="hidden p-3 transition-all opacity-0 bg-gradient-to-b from-transparent to-slate-900/40 group-hover:opacity-100 sm:block">
            {product.shortDescription}
          </p>
        )}

        <div className="mb-4 transition-all">
          <Button className="px-6 overflow-hidden transition rounded-full shadow-lg opacity-100 text-md bg-teal-500/80 text-slate-800 filter backdrop-blur group-hover:opacity-100 sm:opacity-0">
            {buttonText}{" "}
            {ButtonIcon ? (
              <ButtonIcon className="inline p-0 ml-2" />
            ) : (
              <FaChevronRight className="inline p-0 ml-2" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
