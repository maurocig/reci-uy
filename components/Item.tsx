import { Product } from "@/types";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Button from "./ui/Button";

type ItemProps = {
  product: Product;
  key: string;
};

export default function Item({ product, key }: ItemProps) {
  return (
    <button className="group relative flex flex-col justify-between overflow-hidden rounded-md bg-slate-200 duration-200 hover:scale-[103%] hover:drop-shadow-3xl">
      <div className="flex h-3/4 flex-col place-items-center bg-white p-5 ">
        <Image
          src={product.thumbnail}
          width={300}
          height={300}
          alt="Product Image"
          className="aspect-square object-contain transition-all duration-200 group-hover:scale-[106%]"
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-between transition-all">
        <p
          className="flex h-[60px] w-full items-center pl-6 text-start text-lg font-semibold text-gray-900  "
          key={key}
        >
          {product.title}
        </p>

        <div className="mb-3 ">
          <Button className="shadow-xl transition-all group-hover:opacity-100 sm:opacity-0">
            Ver equipo <FaChevronRight className="m-0 inline p-0" />
          </Button>
        </div>

        {/*
        <p className="bg-gradient-to-b from-transparent to-slate-900/40 p-3 text-[1rem] text-blue-700 opacity-0 transition-all  duration-500 group-hover:opacity-100  lg:text-lg">
          {product.shortDescription}
        </p> 
		  */}
      </div>
    </button>
  );
}
