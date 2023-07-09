import Sidebar from "@/components/Sidebar";
import Navbar from "./Navbar";
import { inter } from "./fonts";
import "./globals.css";

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
      <body className={inter.className}>
        <Navbar />
        <div className="grid gap-4 p-4 sm:grid-cols-[auto_1fr] ">
          <Sidebar className="mt-[80px]" />
          <main className="mt-[80px] flex min-h-[calc(100vh-113px)] flex-col rounded-md bg-gradient-to-b from-slate-100/5 to-teal-100/5 px-6 pt-4 text-slate-200 backdrop-filter ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
