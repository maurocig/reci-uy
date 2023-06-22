import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

type SidebarItemProps = {
   name: string;
   url: string;
   icon: IconType;
   active: boolean;
};

export default function SidebarItem({ name, url, icon: Icon, active }: SidebarItemProps) {
   return (
      <Link href={url}>
         <div
            className={twMerge(
               'flex items-center min-w-full p-3 text-gray-200 transition duration-200 rounded-md hover:bg-white/10 text-md',
               active && 'bg-slate-200/90 text-black hover:bg-slate-200/80'
            )}
         >
            <Icon className="inline-block mr-4" size={20} /> <p className="inline font-semibold">{name}</p>
         </div>
      </Link>
   );
}
