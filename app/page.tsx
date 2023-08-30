import Box from '@/components/Box';
import Banner from '@/components/banner';
import FeatureList from '@/components/feature-list';
import HomeIconsSection from '@/components/home-icons-section';
import {
  CalendarCheck,
  CalendarCheck2,
  CheckSquare,
  Diamond,
  FileText,
  LucideWrench,
  Square,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { FaList, FaTruckLoading, FaWrench } from 'react-icons/fa';
import { IoIosPeople, IoMdPeople } from 'react-icons/io';
import { RiTruckFill } from 'react-icons/ri';
import { TbSnowflake } from 'react-icons/tb';
import { Balancer } from 'react-wrap-balancer';

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
    <Balancer>
      <div className="flex flex-col space-y-4 lg:space-y-6">
        <Banner
          title="Especialistas en transporte carretero"
          description="Contamos con más de 20 años de experiencia en el rubro."
          buttonText="Conocer más"
          image="/images/portada-b.jpeg"
        />

        {/* Productos */}
        <Box className="lg:p-6">
          <HomeIconsSection title="Productos" items={productItems} />
        </Box>

        {/* Servicio técnico */}
        <Box className="lg:p-6">
          <div className="grid w-full gap-6 lg:gap-6 h-fit sm:grid-cols-2 ">
            <div className="bg-opacity-0 rounded-lg border-cyan-100/80 ">
              <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
                <Wrench className="inline" size={17} /> Servicio técnico
              </h2>
              <p className="ml-6">
                Realizado por técnicos especializados Thermo King.
              </p>
              <FeatureList
                features={[
                  'Personal especializado',
                  'Repuestos originales',
                  'Venta y colocación',
                  'Service y mantenimiento',
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

        {/* Panel split */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          <Box className="lg:p-6">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              <FileText className="inline" size={17} /> Asesoramiento
            </h2>
            <div
              style={{
                backgroundImage: 'url(./images/asesoramiento-2.jpg)',
              }}
              className="bg-left-bottom bg-cover rounded-lg"
            >
              <div className="p-4 overflow-hidden text-white rounded-lg backdrop-brightness-50 backdrop-blur-sm lg:p-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                esse quibusdam sed doloremque magni quae omnis, asperiores iusto
                itaque at delectus voluptas laudantium odit voluptate, fugit,
                tempore assumenda explicabo magnam!
              </div>
            </div>
          </Box>
          <Box className="lg:p-6">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              <CalendarCheck2 className="inline" size={18} /> Servicio post
              venta
            </h2>
            <div
              style={{
                backgroundImage: 'url(./images/serie-t.jpg)',
              }}
              className="bg-cover rounded-lg"
            >
              <div className="p-4 rounded-lg overflow:hidden backdrop-brightness-75 backdrop-blur-sm bg-slate-700/20 lg:p-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                esse quibusdam sed doloremque magni quae omnis, asperiores iusto
                itaque at delectus voluptas laudantium odit voluptate, fugit,
                tempore assumenda explicabo magnam!
              </div>
            </div>
          </Box>
        </div>

        <Box>
          <div className="flex justify-around w-full">
            <div>ThermoKing </div>
            <div>Liderkit</div>
            <div>Fibrasil</div>
          </div>
        </Box>
      </div>
    </Balancer>
  );
}
