"use client";

import Sidebar from "@/components/Sidebar";
import Modal from "@/components/ui/modal";
import { useMobileMenuToggle } from "@/hooks/useMobileMenuToggle";

export default function MobileMenu() {
  const { isOpen, onToggle } = useMobileMenuToggle();

  return (
    <Modal title="Menu" description="" onClose={() => onToggle} isOpen={isOpen}>
      <Sidebar className="" />
    </Modal>
  );
}
