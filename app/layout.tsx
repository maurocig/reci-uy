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
            {children}
         </body>
      </html>
   );
}
