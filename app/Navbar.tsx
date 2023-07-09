import Image from "next/image";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <div className="fixed z-50 flex h-20 w-full items-center justify-between bg-gradient-to-br from-slate-100 to-white/[65%] px-4 shadow-lg shadow-black/25 backdrop-blur-lg backdrop-filter">
      <div className="">
        <div className="relative h-[35px] w-[130px] overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Logotipo de Reci"
            className="object-contain"
            fill
          />
        </div>
        {/* <p className="absolute m-0 ml-[45px] text-center text-[.65rem] font-semibold"> */}
        {/* IMPORTACIONES */}
        {/* </p> */}
      </div>
    </div>
  );
}
