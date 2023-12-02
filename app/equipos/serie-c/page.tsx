'use client';

import Box from '@/components/box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import Spacer from '@/components/ui/Spacer';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiExternalLink } from 'react-icons/hi';

type SerieCPageProps = {};

export default function SerieCPage({}: SerieCPageProps) {
  const router = useRouter();
  return (
    <div className="grid-cols grid gap-4 lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/serie-c-billboard.jpg)` }}
        className="w-full rounded-lg bg-cover bg-center lg:bg-[center_top_-5rem]"
      >
        <div className="relative left-0 top-0 flex h-[300px] flex-col justify-center rounded-lg bg-gradient-to-r from-slate-800/95 to-teal-100/20 shadow-lg backdrop-blur-0 lg:p-4">
          <button
            onClick={() => router.back()}
            className="absolute left-3 top-3 mb-3 md:top-4 lg:left-4"
          >
            <ArrowLeftCircle
              size={30}
              strokeWidth={1.3}
              className="font-extralight text-gray-300 hover:text-white"
            />
          </button>
          <div className="ml-9">
            <h2 className="text-3xl font-semibold text-white drop-shadow-darker">
              Serie C
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Rendimiento líder del mercado para camiones y furgonetas.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <div
          className="bg-top-center order-2 col-span-1 block min-h-[300px] rounded-lg bg-cover drop-shadow-darker lg:order-1 lg:col-span-1"
          style={{ backgroundImage: 'url(/images/c450-vw.jpg)' }}
        ></div>

        <Box className="col-span-1 flex flex-col gap-3 lg:order-2 xl:col-span-2">
          <span>
            <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
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

      <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <div className="relative w-full">
          <Image
            src={'/images/equipos/raw/c-series-cover-1.jpg'}
            alt="Servicio técnico"
            fill
            className="rounded-lg object-cover object-center shadow-lg"
          />
        </div>
        <div className="mb-2 rounded-lg border-cyan-100/80 bg-opacity-0">
          <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
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
        <div className="mb-2 rounded-lg border-cyan-100/80 bg-opacity-0">
          <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
            <ListChecks className="inline" size={17} /> Características
          </h2>
          <Spacer className="h-4" />
          {/*
          <p className="ml-6">
            Realizado por técnicos especializados Thermo King.
          </p>
						*/}
          <div className="grid grid-cols-1 gap-2 text-lg lg:grid-cols-5 lg:gap-4">
            <FeatureList
              className="lg:col-span-2"
              features={[
                'Diseño ligero y compacto',
                'Mayor caudal de aire',
                'Alimentados por transmisión directa',
              ]}
            />
            <FeatureList
              className="lg:col-span-3"
              features={[
                'Carga de refrigerante reducida',
                'Protección integral con repuestos y servicios Thermo King',
                'Controlador renovado para un funcionamiento sin errores',
                // 'Rendimiento de calefacción optimizado',
                // 'La mayor capacidad de refrigeración del sector',
                // 'Eficiencia y sostenibilidad incrementadas',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie C"
          description="Todos los modelos en esta serie"
          buttonText="Ver producto"
          buttonIcon={HiExternalLink}
          newTab
          products={[
            {
              title: 'C-150e',
              line: 'VP Truck',
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
              line: 'VP Truck',
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
              line: 'VP Truck',
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
              line: 'VP Truck',
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
              line: 'VP Truck',
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
              line: 'VP Truck',
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
              line: 'VP Truck',
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
