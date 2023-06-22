'use client';

import { usePathname } from 'next/navigation';
import { FaRegSnowflake, FaTruckLoading, FaWrench } from 'react-icons/fa';
import { HiHome, HiInformationCircle, HiMail } from 'react-icons/hi';
import { IoIosSnow, IoMdSnow } from 'react-icons/io';
import { MdInfo } from 'react-icons/md';
import { RiTruckFill } from 'react-icons/ri';
import { TbSnowflake } from 'react-icons/tb';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Spacer from './ui/Spacer';

type SidebarProps = {
   className: string;
};

export default function Sidebar({ className }: SidebarProps) {
   const pathname = usePathname();

   const mainItems = [
      {
         name: 'Inicio',
         url: '/',
         icon: HiHome,
         active: pathname === '/',
      },
   ];

   const productItems = [
      {
         name: 'Equipos de frío',
         url: '/equipos',
         icon: TbSnowflake,
         active: pathname === '/equipos',
      },
      {
         name: 'Carrocerías',
         url: '/carrocerias',
         icon: RiTruckFill,
         active: pathname === '/carrocerias',
      },
      {
         name: 'Accesorios',
         url: '/accesorios',
         icon: FaTruckLoading,
         active: pathname === '/accesorios',
      },
   ];

   const otherItems = [
      {
         name: 'Servicio técnico',
         url: '/servicios',
         icon: FaWrench,
         active: pathname === '/servicios',
      },
      {
         name: 'Nosotros',
         url: '/nosotros',
         icon: MdInfo,
         active: pathname === '/nosotros',
      },
      {
         name: 'Contacto',
         url: '/contacto',
         icon: HiMail,
         active: pathname === '/contacto',
      },
   ];

   return (
      <div className={className}>
         {/* INICIO */}
         <Box>
            {mainItems.map((item, i) => (
               <SidebarItem
                  name={item.name}
                  url={item.url}
                  icon={item.icon}
                  active={item.active}
                  key={'item' + i}
               />
            ))}
         </Box>
         <Spacer />
         {/* Productos */}
         <Box>
            {productItems.map((item, i) => (
               <SidebarItem
                  active={item.active}
                  name={item.name}
                  url={item.url}
                  icon={item.icon}
                  key={'productItem' + i}
               />
            ))}
         </Box>
         <Spacer />
         {/* Otros */}
         <Box>
            {otherItems.map((item, i) => (
               <SidebarItem
                  active={item.active}
                  name={item.name}
                  url={item.url}
                  icon={item.icon}
                  key={'productItem' + i}
               />
            ))}
         </Box>
      </div>
   );
}
