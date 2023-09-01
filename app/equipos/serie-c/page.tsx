'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type LineaCePageProps = {};

export default function LineaCePage({}: LineaCePageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/serie-c-billboard.jpg)` }}
        className="w-full bg-center lg:bg-[center_top_-5rem] bg-cover rounded-lg "
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
              Serie CE
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Rendimiento líder del mercado para camiones y furgonetas.
            </p>
          </div>
        </div>
      </div>

      <Box className="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 ">
        <div className="relative w-full ">
          <Image
            src={'/images/equipos/raw/c-series-cover-1.jpg'}
            alt="Servicio técnico"
            fill
            className="object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80 ">
          <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
            <ListChecks className="inline" size={17} /> Características
          </h2>
          {/*
          <p className="ml-6">
            Realizado por técnicos especializados Thermo King.
          </p>
						*/}
          <FeatureList
            features={[
              'Alimentados por tracción directa',
              'Protección fiable para cargas secas y congeladas',
              'Gran volumen del caudal de aire',
              'La mayor capacidad de refrigeración del sector',
              'Nuevo controlador para un funcionamiento sin errores',
              'Protección integral con repuestos y servicios Thermo King',
            ]}
          />
        </div>
      </Box>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block  min-h-[300px] col-span-1 bg-cover rounded-lg drop-shadow-darker bg-top-center lg:col-span-1"
          style={{ backgroundImage: 'url(/images/c450-vw.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              Descripción
            </h2>
            <h3 className="text-lg text-gray-400">
              Enfocados en eficiencia y durabilidad
            </h3>
          </span>
          <p className="hidden">
            La serie C ofrece la solución ideal para aquellos operadores que
            transportan mercancía sensible a la temperatura en vehículos de
            pequeño y mediano tamaño.
          </p>
          <p>
            Estos equipos están diseñados para satisfacer a la perfección las
            exigentes demandas de las operaciones de distribución con múltiples
            entregas, incluso cuando la temperatura exterior alcanza niveles
            extremos de frío y calor.
          </p>
          <p>
            Un descenso de la temperatura más rápido se traduce en un menor
            tiempo de recuperación de las aperturas de las puertas y una mayor
            protección de la carga.
          </p>
          <p>
            Los nuevos controladores en cabina garantizan un funcionamiento
            sencillo y exento de errores.
          </p>
        </Box>
      </div>

      <Box>
        <ItemList
          title="Modelos Serie C"
          description="Todos los modelos en esta serie"
          products={[
            {
              title: 'C 150',
              brand: 'Thermo King',
              model: 'C-150',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 250',
              brand: 'Thermo King',
              model: 'C-250',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 350',
              brand: 'Thermo King',
              model: 'C-350',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 450',
              brand: 'Thermo King',
              model: 'C-450',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 550',
              brand: 'Thermo King',
              model: 'C-550',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 650',
              brand: 'Thermo King',
              model: 'C-650',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
            {
              title: 'C 750',
              brand: 'Thermo King',
              model: 'C-750',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: '/sldkjf',
            },
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
