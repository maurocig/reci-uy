import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Reci Importaciones',
   description: 'Sitio en construcción.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navbar />
            <div className="grid sm:grid-cols-[auto_1fr] gap-4 p-4 ">
               <Sidebar className="" />
               <main className="flex flex-col min-h-[calc(100vh-113px)] px-6 pt-4 rounded-md text-slate-200 bg-slate-700/30">
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}
