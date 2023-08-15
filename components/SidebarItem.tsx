import { useMobileMenu } from "@/hooks/useMobileMenu";
import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  name: string;
  url: string;
  icon: IconType;
  active: boolean;
};

export default function SidebarItem({
  name,
  url,
  icon: Icon,
  active,
}: SidebarItemProps) {
  const mobileMenu = useMobileMenu();

  const closeMenuIfOpen = () => {
    if (mobileMenu.isOpen) {
      mobileMenu.onClose();
    }
  };

  return (
    <Link href={url} onClick={closeMenuIfOpen}>
      <div
        className={twMerge(
          "flex min-w-full items-center rounded-lg px-3 py-2 text-gray-200 transition duration-200 hover:bg-white/10 ",
          active && "bg-slate-200/90 text-black hover:bg-slate-200/80"
        )}
      >
        <Icon className="mr-4 inline-block" size={20} />{" "}
        <p className="inline ">{name}</p>
      </div>
    </Link>
  );
}
