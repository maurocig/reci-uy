import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <div className="fixed z-50 flex h-[65px] w-full items-center justify-between bg-gradient-to-br from-slate-100 to-white/[65%] px-4 shadow-lg shadow-black/25 backdrop-blur-lg backdrop-filter">
      <div className="">
        <Link href={"/"}>
          <div className="relative h-[30px] w-[130px] overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Logotipo de Reci"
              className="object-contain"
              fill
            />
          </div>
        </Link>
        {/* <p className="absolute m-0 ml-[45px] text-center text-[.65rem] font-semibold"> */}
        {/* IMPORTACIONES */}
        {/* </p> */}
      </div>
      <div className="">
        <MenuIcon size={35} className="md:hidden" />
      </div>
    </div>
  );
}
