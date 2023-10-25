import Sidebar from '@/components/Sidebar';
import { MobileMenuProvider } from '@/providers/mobile-menu-provider';
import { Toaster } from 'react-hot-toast';
import { Balancer } from 'react-wrap-balancer';
import { robotoFlex } from './fonts';
import './globals.css';
import Navbar from './navbar';
import { keywords } from '@/public/assets/keywords';

export const metadata = {
  title: 'Reci Importaciones',
  description:
    'Ofrecemos soluciones integrales para el transporte carretero. Trabajamos con las marcas líderes del sector como Thermo King, Liderkit, y Fibrasil',
  keywords: keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="FkSUfDquF8TEhX0zvl2BxiOmb452WHOXmJWiNExouxw"
      />
      <Toaster />
      <body className={robotoFlex.className}>
        <Navbar />
        <MobileMenuProvider />
        <div className="grid lg:gap-6 grid-cols-1 lg:p-6 gap-4 p-4 m-auto max-w-7xl md:grid-cols-[auto_1fr] ">
          <Sidebar className="mt-[65px] hidden  md:block" />
          <main className="mt-[65px] text-slate-200 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
