"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export function MobileMenuSheet() {
  const mobileMenu = useMobileMenu();

  return (
    <Sheet open={mobileMenu.isOpen} onOpenChange={mobileMenu.onClose}>
      <SheetContent className="border-none shadow-lg bg-slate-800/95">
        <SheetHeader>
          <SheetTitle className="text-white">Menú</SheetTitle>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
