"use client";

import { useMobileMenuToggle } from "@/hooks/useMobileMenuToggle";
import { HiOutlineMenu } from "react-icons/hi";

type MenuToggleProps = {};

export default function MenuToggle({}: MenuToggleProps) {
  const { isOpen, onToggle } = useMobileMenuToggle();

  const handleClick = () => {
    onToggle(isOpen);
  };

  return (
    <div className="">
      <button onClick={() => handleClick()}>
        <HiOutlineMenu size={40} />
      </button>
    </div>
  );
}
