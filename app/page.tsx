import Banner from "@/components/banner";
import HomeIconsSection from "@/components/home-icons-section";
import { FaTruckLoading, FaWrench } from "react-icons/fa";
import { IoIosPeople, IoMdPeople } from "react-icons/io";
import { RiTruckFill } from "react-icons/ri";
import { TbSnowflake } from "react-icons/tb";

export default function Home() {
  const productItems = [
    {
      icon: TbSnowflake,
      text: "Equipos de frío",
      url: "/equipos",
      imageUrl: "/images/link-icons/equipo-trailer.jpg",
    },
    {
      icon: RiTruckFill,
      text: "Carrocerías",
      url: "/carrocerias",
      imageUrl: "/images/liderkit-atras.jpg",
    },
    {
      icon: FaTruckLoading,
      text: "Accesorios",
      url: "/accesorios",
      imageUrl: "/images/link-icons/rampa-palfinger.jpg",
    },
  ];

  const serviceItems = [
    {
      icon: FaWrench,
      text: "Servicio técnico",
      url: "/servicios#servicio-tecnico",
      imageUrl: "",
    },
    {
      icon: IoIosPeople,
      text: "Asesoramiento",
      url: "/servicios#asesoramiento",
      imageUrl: "",
    },
    {
      icon: FaTruckLoading,
      text: "Accesorios",
      url: "/accesorios",
      imageUrl: "",
    },
  ];

  return (
    <div className="space-y-6">
      <Banner
        title="Especialistas en transporte carretero"
        description="Contamos con más de 20 años de experiencia en el rubro."
        buttonText="Conocer más"
        image="/images/portada-b.jpeg"
      />

      <HomeIconsSection title="Productos" items={productItems} />
    </div>
  );
}
