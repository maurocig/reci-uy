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
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const mobileMenu = useMobileMenu();

  return (
    <div className="fixed z-50 flex flex-col h-[65px] w-full items-center justify-center bg-gradient-to-br from-slate-100 to-white/[65%] shadow-lg shadow-black/25 backdrop-blur-lg backdrop-filter">
      <div className="flex self-center justify-between w-full px-4 7xl:px-0 max-w-7xl">
        <div className="">
          <Link href={'/'}>
            <div className="relative h-[30px] w-[130px] overflow-hidden">
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
        <MenuIcon size={35} className="md:hidden" onClick={mobileMenu.onOpen} />
      </div>
    </div>
  );
}
