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

const mainItems = [
   {
      name: 'Inicio',
      url: '/',
      icon: HiHome,
   },
];

const productItems = [
   {
      name: 'Equipos de frío',
      url: '/equipox',
      icon: TbSnowflake,
   },
   {
      name: 'Carrocerías',
      url: '/carrocerias',
      icon: RiTruckFill,
   },
   {
      name: 'Accesorios',
      url: '/accesorios',
      icon: FaTruckLoading,
   },
];

const otherItems = [
   {
      name: 'Servicios',
      url: '/servicios',
      icon: FaWrench,
   },
   {
      name: 'Nosotros',
      url: '/nosotros',
      icon: MdInfo,
   },
   {
      name: 'Contacto',
      url: '/contacto',
      icon: HiMail,
   },
];

function Icon() {}

export default function Sidebar({ className }: SidebarProps) {
   return (
      <div className={className}>
         <Box>
            {mainItems.map((item, i) => (
               <SidebarItem name={item.name} url={item.url} icon={item.icon} key={'item' + i} />
            ))}
         </Box>
         <Spacer />
         <Box>
            {productItems.map((item, i) => (
               <SidebarItem name={item.name} url={item.url} icon={item.icon} key={'productItem' + i} />
            ))}
         </Box>
         <Spacer />
         <Box>
            {otherItems.map((item, i) => (
               <SidebarItem name={item.name} url={item.url} icon={item.icon} key={'productItem' + i} />
            ))}
         </Box>
      </div>
   );
}
