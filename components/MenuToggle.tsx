"use client";

import { useMobileMenu } from "@/hooks/useMobileMenu";
import { HiOutlineMenu } from "react-icons/hi";

type MenuToggleProps = {};

export default function MenuToggle({}: MenuToggleProps) {
  const { isOpen, onClose } = useMobileMenu();

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="">
      <button onClick={() => handleClick()}>
        <HiOutlineMenu size={40} />
      </button>
    </div>
  );
}
