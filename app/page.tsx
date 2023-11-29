import Box from '@/components/box';
import Banner from '@/components/banner';
import BannerLogos from '@/components/banner-logos';
import FeatureList from '@/components/feature-list';
import HomeIconsSection from '@/components/home-icons-section';
import {
  ArrowRightCircle,
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
import ItemList from '@/components/ItemList';
import { equipos } from '@/public/assets/equipos';
import { Product } from '@/types';

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

  const ev: Product[] = [equipos[equipos.length - 1]];

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <Banner
        title="Especialistas en transporte carretero"
        description="Contamos con más de 20 años de experiencia en el rubro."
        buttonText="Conocer más"
        image="/images/edit/portada-a-2.png"
      />

      {/* Productos */}
      <Box className="lg:p-6">
        <HomeIconsSection title="Productos" items={productItems} />
      </Box>

      {/* Servicio técnico */}
      <Box className="">
        <div className="grid w-full gap-6 lg:gap-6 h-fit sm:grid-cols-2 ">
          <div className="bg-opacity-0 rounded-lg border-cyan-100/80 ">
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              <Wrench className="inline" size={17} /> Servicio técnico
            </h2>
            <p className="mb-2 xl:text-lg text-gray-400 ms-[25px]">
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
        <div
          // style={{ backgroundImage: 'url(/images/asesoramiento-2.jpg' }}
          className="bg-center bg-cover rounded-lg bg-opacity-5 "
        >
          <Box className="h-full lg:p-6 backdrop-blur">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              <FileText className="inline" size={17} /> Asesoramiento
            </h2>
            <div className="space-y-2">
              <p>
                Nuestro compromiso es brindarle un asesoramiento experto y
                personalizado para ayudarlo a tomar decisiones informadas.
              </p>
              <p>
                Nuestro equipo de profesionales con experiencia en la industria
                lo guiará a lo largo del proceso de selección, asegurándose de
                que obtenga la solución que mejor se adapte a las necesidades de
                su flota.
              </p>
              <a
                href="/contacto"
                className="flex items-center justify-start w-full gap-2 opacity-80 hover:opacity-100 group text-cyan-400"
              >
                <span className="group-hover:underline">Quiero asesorarme</span>{' '}
                <ArrowRightCircle size={15} />
              </a>
            </div>
          </Box>
        </div>
        <div
          // style={{ backgroundImage: 'url(/images/asesoramiento-stock.jpeg' }}
          className="bg-center bg-cover rounded-lg bg-opacity-5 "
        >
          <Box className="h-full lg:p-6 backdrop-blur">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              <CalendarCheck2 className="inline" size={18} /> Servicio post
              venta
            </h2>

            <div className="space-y-2">
              <p>
                Sabemos que la confiabilidad y el rendimiento continuo de sus
                activos son esenciales para su negocio de transporte carretero.
                Por eso, además de la venta de equipamiento también ofrecemos un
                excepcional servicio post venta.
              </p>
              <p>
                Nuestro soporte integral abarca desde la resolución de problemas
                técnicos hasta la disponibilidad de repuestos originales.
                Además, todos nuestros productos cuentan con garantía original
                del fabricante.
              </p>
            </div>
          </Box>
        </div>
      </div>

      {/* LINE */}
      <Box className="lg:p-6">
        <ItemList
          title="Thermo King Línea EV"
          description="Unidades 100% eléctricas para camiones medianos y grandes"
          products={ev}
          buttonText="Ver producto"
        >
          <Box className="hidden w-full col-span-2 border border-slate-200/10 lg:block bg-sky-400/10 ">
            <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
              Thermo King Serie EV para vehículos eléctricos
            </h2>
            <p className="mb-2 text-lg text-slate-300">
              Instalamos el primer equipo Thermo King 100% eléctrico de
              latinoamérica.
            </p>
            <p className="hidden xl:block">
              La alta fiabilidad, eficiencia energética y rendimiento de Thermo
              King llegan al transporte eléctrico. Ideal para transporte de
              alimentos y productos farmacéuticos en la cadena de frío.
            </p>
            <a
              href="/equipos/ev-500"
              className="flex items-center justify-start w-full gap-2 mt-4 opacity-80 hover:opacity-100 group text-cyan-400"
            >
              <span className="group-hover:underline">Ver producto</span>{' '}
              <ArrowRightCircle size={15} />
            </a>
          </Box>
        </ItemList>
      </Box>
      {/* <Box className="bg-red-500 bg-opacity-100"> */}
      <div className="p-4 rounded-lg shadow-lg bg-white/20 lg:p-6">
        <BannerLogos
          logosUrl={[
            '/images/logos/logo-lk.png',
            '/images/logos/logo-fb.png',
            '/images/logos/logo-tk-full.png',
          ]}
          logosHorUrl={[
            '/images/logos/logo-tk-hor.png',
            '/images/logos/logo-fb.png',
            '/images/logos/logo-lk-hor-2.png',
          ]}
        />
      </div>
    </div>
  );
}
