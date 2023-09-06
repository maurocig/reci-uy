'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SerieVPageProps = {};

export default function SerieVPage({}: SerieVPageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/serie-v-billboard.jpg)` }}
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
              Serie V
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Soluciones de Control de Temperatura para Transporte Sustentable
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover rounded-lg drop-shadow-darker bg-top-center lg:col-span-1"
          style={{ backgroundImage: 'url(/images/v-truck.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              Descripción
            </h2>
            <h3 className="text-lg text-gray-400">
              Innovación Climática Global
            </h3>
          </span>
          <p>
            La Serie V de Thermo King es líder mundial en soluciones de control
            de temperatura para transporte sustentable. Thermo King proporciona
            soluciones de control de temperatura para una variedad de
            aplicaciones, incluyendo remolques, carrocerías de camiones,
            autobuses, contenedores a bordo y vagones desde 1938.
          </p>
        </Box>
      </div>

      <Box>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80 ">
          <h2 className="flex w-full gap-2 mt-0 text-2xl font-semibold text-center items-cener sm:text-start">
            Modelos de Producto
          </h2>
          <p className="mb-3 text-lg text-gray-400">
            Soluciones para Transporte Sustentable
          </p>
          <div className="grid grid-cols-1 gap-2 text-lg lg:gap-4 lg:grid-cols-2">
            <FeatureList
              features={[
                'Modelo V-150',
                'Modelo V-250',
                'Modelo V-350',
                'Modelo V-450',
                'Modelo V-550',
                'Modelo V-650',
                'Modelo V-750',
              ]}
            />
            <FeatureList
              features={[
                'Alta capacidad de control de temperatura',
                'Eficiencia y sostenibilidad mejoradas',
                'Mayor capacidad de refrigeración',
                'Protección completa con repuestos y servicios Thermo King',
                'Rendimiento de calefacción optimizado',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Especificaciones Técnicas"
          description="Detalles técnicos de la Serie V"
          newTab
          products={[
            {
              title: 'V-150',
              brand: 'Thermo King',
              model: 'V-150',
              productType: 'Control de Temperatura',
              price: 0, // Rellenar con el precio apropiado
              stock: 1, // Rellenar con el stock apropiado
              thumbnail: '/images/v-150-thumbnail.png', // Reemplazar con la imagen de miniatura real
              shortDescription:
                'Control de temperatura para transporte sustentable',
              url: 'https://example.com/v-150', // Reemplazar con la URL real
            },
            // Repetir la misma estructura de arriba para otros modelos de la Serie V
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
