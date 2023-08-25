'use client';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

export function MobileMenuSheet() {
  const mobileMenu = useMobileMenu();

  return (
    <Sheet open={mobileMenu.isOpen} onOpenChange={mobileMenu.onClose}>
      <SheetContent className="transition border-none shadow-lg w-fit bg-gradient-to-br from-slate-700/90 via-slate-600/90 to-teal-700/90">
        <SheetHeader>
          <SheetTitle className="text-white">Menú</SheetTitle>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
