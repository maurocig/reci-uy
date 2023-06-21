import Link from 'next/link';
import { IconType } from 'react-icons';

type SidebarItemProps = {
   name: string;
   url: string;
   icon: IconType;
};

export default function SidebarItem({ name, url, icon: Icon }: SidebarItemProps) {
   return (
      <Link href={url}>
         <div className="flex items-center min-w-full p-3 text-gray-200 transition duration-200 rounded-md hover:bg-white/10 text-md">
            <Icon className="inline-block mr-4" size={20} /> <p className="inline font-semibold">{name}</p>
         </div>
      </Link>
   );
}
