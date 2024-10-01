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
}: Accesorio) {
  return (
    <a
      className="flex flex-col p-4 space-y-4 transition duration-500 rounded-lg hover: group bg-gradient-to-b from-white/30 to-sky-300/70 text-slate-800 opacity-80 backdrop-blur hover:bg-gradient-to-b hover:opacity-100 hover:shadow-xl lg:space-y-6 lg:p-6"
      href={`/accesorios/{code}`}
    >
      <div className="transition duration-500 group-hover:scale-[105%]">
        <Image
          src={`/images/accesorios/${images[0]}`}
          alt={label}
          width="300"
          height="300"
        />
      </div>
      <div className="flex flex-col justify-between h-full space-y-2">
        <h2 className="text-[1.3rem] font-medium">{label}</h2>
        <h3 className="text-lg">{brand}</h3>
      </div>
      {/* <p className="text-lg">{code}</p> */}
      {/* <p className="text-lg">{description}</p> */}
      {/* <p className="text-lg">{colors}</p> */}
      {/* <p className="text-lg">{observations}</p> */}
    </a>
  );
}
