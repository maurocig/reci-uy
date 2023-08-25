import Box from '@/components/Box';
import Banner from '@/components/banner';
import FeatureList from '@/components/feature-list';
import HomeIconsSection from '@/components/home-icons-section';
import { CheckSquare, Diamond, LucideWrench, Square } from 'lucide-react';
import Image from 'next/image';
import { FaTruckLoading, FaWrench } from 'react-icons/fa';
import { IoIosPeople, IoMdPeople } from 'react-icons/io';
import { RiTruckFill } from 'react-icons/ri';
import { TbSnowflake } from 'react-icons/tb';

export default function Home() {
  const productItems = [
    {
      icon: TbSnowflake,
      text: 'Equipos de frío',
      url: '/equipos',
      imageUrl: '/images/equipo-trailer.jpg',
    },
    {
      icon: RiTruckFill,
      text: 'Carrocerías',
      url: '/carrocerias',
      imageUrl: '/images/liderkit-atras.jpg',
    },
    {
      icon: FaTruckLoading,
      text: 'Accesorios',
      url: '/accesorios',
      imageUrl: '/images/rampa-palfinger.jpg',
    },
  ];

  const serviceItems = [
    {
      icon: FaWrench,
      text: 'Servicio técnico',
      url: '/servicios#servicio-tecnico',
      imageUrl: '',
    },
    {
      icon: IoIosPeople,
      text: 'Asesoramiento',
      url: '/servicios#asesoramiento',
      imageUrl: '',
    },
    {
      icon: FaTruckLoading,
      text: 'Accesorios',
      url: '/accesorios',
      imageUrl: '',
    },
  ];

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <Banner
        title="Especialistas en transporte carretero"
        description="Contamos con más de 20 años de experiencia en el rubro."
        buttonText="Conocer más"
        image="/images/portada-b.jpeg"
      />

      <Box className="lg:p-6">
        <HomeIconsSection title="Productos" items={productItems} />
      </Box>

      <Box className="lg:p-6">
        <div className="grid w-full gap-4 lg:gap-6 h-fit sm:grid-cols-2 md:grid-cols-3">
          <div className="p-4 border rounded-lg shadow-lg md:col-span-2 border-cyan-100/80 bg-cyan-100/10 md:p-6 ">
            <h2 className="flex items-center w-full gap-2 text-xl font-semibold text-center sm:text-start">
              <FaWrench className="inline" size={20} /> Servicio técnico
            </h2>
            <p>Realizado por técnicos especializados Thermo King.</p>
            <FeatureList
              features={[
                'Repuestos originales',
                'Personal especializado',
                'Venta y colocación',
              ]}
            />
          </div>
          <div className="relative col-span-1">
            <Image
              src={'/images/servicio-tk.jpg'}
              alt="Servicio técnico"
              fill
              className="object-cover object-center rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Box>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <Box className="lg:p-6">
          <h2 className="flex items-center w-full gap-2 text-xl font-semibold text-center sm:text-start">
            <FaWrench className="inline" /> Asesoramiento
          </h2>
          <div
            style={{
              backgroundImage: 'url(./images/asesoramiento-stock.jpeg)',
            }}
            className="bg-cover rounded-lg"
          >
            <div className="p-4 overflow-hidden rounded-lg backdrop-blur-sm lg:p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse
              quibusdam sed doloremque magni quae omnis, asperiores iusto itaque
              at delectus voluptas laudantium odit voluptate, fugit, tempore
              assumenda explicabo magnam!
            </div>
          </div>
        </Box>
        <Box className="lg:p-6">
          <h2 className="w-full text-xl font-semibold text-center sm:text-start">
            Servicio post venta
          </h2>
          <div
            style={{
              backgroundImage: 'url(./images/serie-t.jpg)',
            }}
            className="bg-cover rounded-lg"
          >
            <div className="p-4 rounded-lg overflow:hidden backdrop-blur-sm bg-slate-700/20 lg:p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse
              quibusdam sed doloremque magni quae omnis, asperiores iusto itaque
              at delectus voluptas laudantium odit voluptate, fugit, tempore
              assumenda explicabo magnam!
            </div>
          </div>
        </Box>
      </div>

      <Box>
        <div>banner logos</div>
      </Box>
    </div>
  );
}
