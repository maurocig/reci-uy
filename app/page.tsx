import Banner from "@/components/banner";
import HomeItem from "@/components/home-item";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { CiWarning } from "react-icons/ci";
import { FaTruckLoading } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RiTruckFill } from "react-icons/ri";
import { TbSnowflake } from "react-icons/tb";

export default function Home() {
  return (
    <div className="space-y-6">
      <Banner
        title="Especialistas en transporte carretero"
        description="Contamos con más de 20 años de experiencia en el rubro."
        buttonText="Conocer más"
        image="/images/portada-a.jpeg"
      />

      <section className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-semibold">Productos</h2>
        <div className="grid min-h-[100px] w-full max-w-[500px] grid-cols-3 gap-2 sm:gap-5 ">
          <HomeItem icon={TbSnowflake} text="Equipos de frío" url="/equipos" />
          <HomeItem icon={RiTruckFill} text="Carrocerías" url="/carrocerias" />
          <HomeItem icon={FaTruckLoading} text="Accesorios" url="/accesorios" />
        </div>
      </section>
    </div>
  );
}
