import Image from 'next/image';

type NavbarProps = {};

const links = [
   {
      name: 'Equipos',
      url: '/equipos',
   },
   {
      name: 'Carrocerías',
      url: '/carrocerias',
   },
];

export default function Navbar({}: NavbarProps) {
   return (
      <div className="flex items-center justify-between h-20 px-4 bg-slate-200">
         <div className="">
            <div className="relative h-[35px] overflow-hidden w-[200px]">
               <Image src="/images/logo.png" alt="Logotipo de Reci" className="object-contain" fill />
            </div>
            <p className="m-0 text-[.65rem] font-semibold text-center ml-[80px] absolute">IMPORTACIONES</p>
         </div>
      </div>
   );
}
