import { type Accesorio } from "@/types";
import Image from "next/image";

export default function AccesorioItem({
  label,
  brand,
  code,
  description,
  colors,
  images,
  observations,
  category,
}: Accesorio) {
  return (
    <a
      className="hover: group flex h-[300px] flex-col space-y-4 rounded-lg bg-gradient-to-b from-white/30 to-sky-300/70 p-4 text-slate-800 opacity-90 backdrop-blur transition duration-500 hover:bg-gradient-to-b hover:opacity-100 hover:shadow-xl md:h-[370px] lg:space-y-6 lg:p-6"
      href={`/accesorios/${code}`}
    >
      <div className="flex max-h-[65%] place-content-center p-2 transition duration-500 group-hover:scale-[105%] md:max-h-[65%]">
        <Image
          src={`/images/accesorios/${images[0]}`}
          alt={label}
          width="300"
          height="300"
          className="object-contain"
        />
      </div>
      <div className="flex h-full flex-col justify-between space-y-2">
        <h2 className="text-lg font-medium md:text-[1.3rem]">{label}</h2>
        <h3 className="text-md md:text-lg">{brand}</h3>
      </div>
      {/* <p className="text-lg">{code}</p> */}
      {/* <p className="text-lg">{description}</p> */}
      {/* <p className="text-lg">{colors}</p> */}
      {/* <p className="text-lg">{observations}</p> */}
    </a>
  );
}
