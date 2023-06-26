import Image from "next/image";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <div className="flex h-20 items-center justify-between bg-slate-200/90 px-4">
      <div className="">
        <div className="relative h-[35px] w-[130px] overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Logotipo de Reci"
            className="object-contain"
            fill
          />
        </div>
        <p className="absolute m-0 ml-[45px] text-center text-[.65rem] font-semibold">
          IMPORTACIONES
        </p>
      </div>
    </div>
  );
}
