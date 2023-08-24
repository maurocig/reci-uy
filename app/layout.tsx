import Sidebar from '@/components/Sidebar';
import { MobileMenuProvider } from '@/providers/mobile-menu-provider';
import { robotoFlex } from './fonts';
import './globals.css';
import Navbar from './navbar';

export const metadata = {
  title: 'Reci Importaciones',
  description: 'Sitio en construcción.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <Navbar />
        <MobileMenuProvider />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[auto_1fr] ">
          <Sidebar className="mt-[65px] hidden  md:block" />
          <main
            className="mt-[65px] text-slate-200"
            // className="flex min-h-[calc(100vh-113px)] flex-col rounded-lg from-slate-900/20 via-sky-950/10 to-blue-950/25 p-0 shadow-lg backdrop-blur-lg backdrop-filter
            // md:bg-gradient-to-b md:p-4 "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
