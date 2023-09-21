'use client';

import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Mail, MenuIcon, Phone, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const mobileMenu = useMobileMenu();

  return (
    <div className="fixed z-50 flex flex-col h-[65px] w-full items-center justify-center bg-gradient-to-br from-slate-100 to-white/80 shadow-lg shadow-black/25 backdrop-blur-sm backdrop-filter">
      <div className="flex self-center justify-between w-full px-4 7xl:px-0 max-w-7xl">
        <div className="flex items-center">
          <Link href={'/'}>
            <div className="relative h-[32px] w-[130px] overflow-hidden  ">
              <Image
                src="/images/logo.png"
                alt="Logotipo de Reci"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* <p className="absolute m-0 ml-[45px] text-center text-[.65rem] font-semibold"> */}
          {/* IMPORTACIONES */}
          {/* </p> */}
        </div>

        <div className="flex-col items-start justify-center hidden h-full text-sm md:flex">
          <div className="flex items-center gap-2">
            <Mail size={12} />
            <span className="text-slate-800">ventasreci@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} /> <span className="text-slate-800">22970648</span>
          </div>
        </div>
        <MenuIcon size={35} className="md:hidden" onClick={mobileMenu.onOpen} />
      </div>
    </div>
  );
}
