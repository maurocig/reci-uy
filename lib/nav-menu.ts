import { usePathname } from "next/navigation";
import { FaTruckLoading, FaWrench } from "react-icons/fa";
import { HiHome, HiMail } from "react-icons/hi";
import { MdInfo } from "react-icons/md";
import { RiTruckFill } from "react-icons/ri";
import { TbSnowflake } from "react-icons/tb";

let pathname = "";

export const mainItems = [
  {
    name: "Inicio",
    url: "/",
    icon: HiHome,
    active: pathname === "/",
  },
];

export const productItems = [
  {
    name: "Equipos de frío",
    url: "/equipos",
    icon: TbSnowflake,
    active: pathname === "/equipos",
  },
  {
    name: "Carrocerías",
    url: "/carrocerias",
    icon: RiTruckFill,
    active: pathname === "/carrocerias",
  },
  {
    name: "Accesorios",
    url: "/accesorios",
    icon: FaTruckLoading,
    active: pathname === "/accesorios",
  },
];

export const otherItems = [
  {
    name: "Servicio técnico",
    url: "/servicios",
    icon: FaWrench,
    active: pathname === "/servicios",
  },
  {
    name: "Nosotros",
    url: "/nosotros",
    icon: MdInfo,
    active: pathname === "/nosotros",
  },
  {
    name: "Contacto",
    url: "/contacto",
    icon: HiMail,
    active: pathname === "/contacto",
  },
];
