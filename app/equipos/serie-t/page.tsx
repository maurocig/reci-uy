'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import Spacer from '@/components/ui/Spacer';
import {
  ArrowLeft,
  ArrowLeftCircle,
  ExternalLink,
  ListChecks,
  Sheet,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiExternalLink } from 'react-icons/hi';

type SerieTPageProps = {};

export default function SerieTPage({}: SerieTPageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/serie-t-billboard-2.jpg)` }}
        className="w-full bg-center lg:bg-[center_top] bg-cover rounded-lg "
      >
        <div className="rounded-lg relative flex flex-col bg-gradient-to-r from-slate-800/95 to-teal-100/20 shadow-lg justify-center top-0 left-0 h-[300px] lg:p-4 backdrop-blur-0">
          <button
            onClick={() => router.back()}
            className="absolute mb-3 top-3 left-3 md:top-4 lg:left-4"
          >
            <ArrowLeftCircle
              size={30}
              strokeWidth={1.3}
              className="text-gray-300 font-extralight hover:text-white"
            />
          </button>
          <div className="ml-9 ">
            <h2 className="text-3xl font-semibold text-white drop-shadow-darker">
              Serie T
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Unidades autónomas de alto rendimiento
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover rounded-lg drop-shadow-darker bg-center md:bg-[top_right_-12rem] lg:col-span-1"
          style={{ backgroundImage: 'url(/images/serie-t-billboard.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              Centrada en lo que importa
            </h2>
            {/*
            <h3 className="text-lg text-gray-400">
              Enfocados en eficiencia y durabilidad
            </h3>
						*/}
          </span>
          <p>
            Los equipos serie T de Thermo King ofrecen un rendimiento,
            eficiencia y fiabilidad líderes en el sector.
          </p>
          <p>
            La serie T proporciona una mayor capacidad con una velocidad de
            funcionamiento inferior y permite realizar un control preciso de la
            temperatura. Los bajos costes de funcionamiento y mantenimiento, así
            como las tecnologías de ahorro de combustible en ella empleadas,
            reducen al mínimo los costes de propiedad.
          </p>
          <p>
            Además, los nuevos controladores Smart Reefer ofrecen una interfaz
            intuitiva que facilita la supervisión de la temperatura,
            garantizando el rendimiento óptimo de las unidades en todo momento.
          </p>
        </Box>
      </div>

      <Box>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80 ">
          <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
            <ListChecks className="inline" size={17} /> Características
          </h2>
          <Spacer className="h-4" />
          {/*
          <p className="ml-6">
            Realizado por técnicos especializados Thermo King.
          </p>
						*/}
          <div className="grid grid-cols-1 gap-2 text-lg lg:gap-4 lg:grid-cols-5">
            <FeatureList
              className="lg:col-span-2"
              features={[
                'Alta capacidad de refrigeración',
                'Control de temperatura preciso',
                'Rendimiento demostrado hasta 55°C',
              ]}
            />
            <FeatureList
              className="lg:col-span-3"
              features={[
                'Facilidad de uso para un funcionamiento sin errores',
                'Rendimiento y ahorro líderes del mercado',
                'Menor impacto medioambiental',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie T"
          description="Todos los modelos en esta serie"
          newTab
          buttonIcon={HiExternalLink}
          products={[
            {
              title: 'T-600 R',
              brand: 'Thermo King',
              model: 'T-600',
              line: 'Truck',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/t-600ok.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/la/es/products.road.trucks-and-vans.diesel.t_600r.html',
            },
            {
              title: 'T-800 R',
              brand: 'Thermo King',
              model: 'T-800',
              line: 'Truck',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/t-800.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/la/es/products.road.trucks-and-vans.diesel.t_800r.html',
            },
            {
              title: 'T-1200 R',
              brand: 'Thermo King',
              model: 'T-1200',
              line: 'Truck',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/t-1200.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/la/es/products.road.trucks-and-vans.diesel.t_1200r.html',
            },
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
