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
      <div className="flex items-center justify-between h-16 px-4 bg-slate-200">
         <div className="relative h-10 p-4 overflow-hidden w-[200px]">
            <Image src="/images/logo.png" alt="Logo de Reci" className="object-contain" fill />
         </div>
      </div>
   );
}
