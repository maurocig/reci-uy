import Image from 'next/image';
import { CiWarning } from 'react-icons/ci';

export default function Home() {
   return (
      <main className="flex flex-col items-center min-h-screen p-8 text-center text-slate-200">
         <div className="flex flex-col items-center pt-32">
            <CiWarning size={80} className="self-center" />
            <h1 className="mb-4 text-4xl">Sitio en construcción.</h1>
            <p className="mb-12">Estamos realizando mejoras en nuestro sitio web.</p>
            <a href="https://www.instagram.com/reci_importaciones/" className="flex flex-col justify-center">
               <p className="mb-2 font-bold">Seguinos en Instagram:</p>
               <Image
                  className="self-center"
                  src="/images/ig-logo.png"
                  width={50}
                  height={50}
                  alt="instagram logo"
               />
            </a>
         </div>
      </main>
   );
}
