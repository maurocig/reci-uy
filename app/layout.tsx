import Sidebar from "@/components/Sidebar";
import { robotoFlex } from "./fonts";
import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Reci Importaciones",
  description: "Sitio en construcción.",
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
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[auto_1fr] ">
          <Sidebar className="mt-[65px] hidden md:block" />
          <main
            className="to-blue-200-15 via-teal-200/15 mt-[65px] flex min-h-[calc(100vh-113px)] flex-col
					rounded-md from-slate-200/5 p-0 text-slate-200 backdrop-filter 
					md:bg-gradient-to-b md:p-4 "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
