'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import Spacer from '@/components/ui/Spacer';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SerieCPageProps = {};

export default function SerieCPage({}: SerieCPageProps) {
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
              Serie C
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Rendimiento líder del mercado para camiones y furgonetas.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover rounded-lg drop-shadow-darker bg-top-center lg:col-span-1"
          style={{ backgroundImage: 'url(/images/c450-vw.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
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
            Modelos de gran capacidad
          </h2>
          <p className="mb-3 text-lg text-gray-400">
            Nuevas unidades para camiones de gran porte.
          </p>
          <p className="mb-2">
            La Serie C se ha ampliado para incluir soluciones óptimas de control
            de temperatura para camiones grandes de hasta 52 m³.
          </p>
          <p>
            Los nuevos y potentes modelos <b>C-550</b>, <b>C-650</b> y{' '}
            <b>C-750</b> ofrecen todos los beneficios que espera de la Línea
            C-Series, incluida una gran capacidad de condensación, construcción
            liviana y diseño compacto.
          </p>
        </div>
      </Box>

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
          <div className="grid grid-cols-1 gap-2 text-lg lg:gap-4 lg:grid-cols-2">
            <FeatureList
              features={[
                'Diseño ligero y compacto',
                'Mayor caudal de aire',
                'Protección fiable para cargas secas y congeladas',
                'Controlador renovado para un funcionamiento sin errores',
                'Carga de refrigerante reducida',
              ]}
            />
            <FeatureList
              features={[
                'Alimentados por transmisión directa',
                'La mayor capacidad de refrigeración del sector',
                'Protección integral con repuestos y servicios Thermo King',
                'Eficiencia y sostenibilidad incrementadas',
                'Rendimiento de calefacción optimizado',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie C"
          description="Todos los modelos en esta serie"
          newTab
          products={[
            {
              title: 'C-150e',
              brand: 'Thermo King',
              model: 'C-150',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/discover-the-range/c-150e',
            },
            {
              title: 'C-250e',
              brand: 'Thermo King',
              model: 'C-250',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/discover-the-range/c-250e-max',
            },
            {
              title: 'C-350e',
              brand: 'Thermo King',
              model: 'C-350',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-150-350.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/discover-the-range/c-350e-max',
            },
            {
              title: 'C-450e',
              brand: 'Thermo King',
              model: 'C-450',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/discover-the-range/c-450e-max',
            },
            {
              title: 'C-550',
              brand: 'Thermo King',
              model: 'C-550',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/mediaroom/thermo-king-amplia-su-cartera-de-unidades-de-la-serie-c-con-una-nueva-gama-para-camiones-pequenos-y-furgonetas',
            },
            {
              title: 'C-650',
              brand: 'Thermo King',
              model: 'C-650',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/mediaroom/thermo-king-amplia-su-cartera-de-unidades-de-la-serie-c-con-una-nueva-gama-para-camiones-pequenos-y-furgonetas',
            },
            {
              title: 'C-750',
              brand: 'Thermo King',
              model: 'C-750',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/c-450-750.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/mediaroom/thermo-king-amplia-su-cartera-de-unidades-de-la-serie-c-con-una-nueva-gama-para-camiones-pequenos-y-furgonetas',
            },
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
