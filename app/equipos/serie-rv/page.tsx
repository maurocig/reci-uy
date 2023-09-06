'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SerieRvPageProps = {};

export default function SerieRvPage({}: SerieRvPageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/rv-580-billboard-reci.jpg)` }}
        className="w-full bg-center lg:bg-[center_top_-9rem] xl:bg-[center_top_-0rem]  bg-cover rounded-lg "
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
              Serie RV
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Vehículos con Enfriamiento Rápido, Confiables y Revolucionarios
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover rounded-lg drop-shadow-darker bg-top-center lg:col-span-1"
          style={{ backgroundImage: 'url(/images/rv-580-reci.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              Descripción
            </h2>
            <h3 className="text-lg text-gray-400">
              Diseño personalizado para camiones ligeros y medianos
            </h3>
          </span>
          <p>
            La Serie RV fue especialmente diseñada para la refrigeración de
            transporte en la gama de vehículos de distribución ligera y mediana.
            Esta nueva plataforma RV está equipada con un sistema optimizado de
            refrigeración, un robusto compresor TK y otros componentes probados,
            lo que garantiza una alta capacidad de enfriamiento, tracción
            rápida, control preciso de la temperatura, alta confiabilidad,
            facilidad de uso y bajo costo de mantenimiento.
          </p>
        </Box>
      </div>

      <Box>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80 ">
          <h2 className="flex w-full gap-2 mt-0 text-2xl font-semibold text-center items-cener sm:text-start">
            Características
          </h2>
          {/*
          <p className="mb-3 text-lg text-gray-400">
            Mayor capacidad y mayor eficiencia
          </p>
					*/}
          <div className="grid grid-cols-1 gap-2 text-lg lg:gap-4 lg:grid-cols-2">
            <FeatureList
              features={[
                'Serpentina del evaporador más grande para un intercambio de calor más rápido',
                'Pre-enfriamiento rápido para una mayor eficiencia',
                'Robusto compresor TK',
                'Nuevo sistema de control eléctrico con alta confiabilidad',
              ]}
            />
            <FeatureList
              features={[
                'Mayor capacidad de enfriamiento para una mejor protección de la carga',
                'Ligero y compacto para una instalación fácil, especialmente para vehículos ligeros y mini',
                'Menos carga de refrigerante para entornos delicados',
                'Diseño de relé extraíble para un mejor mantenimiento',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie RV"
          description="Todos los modelos en esta serie"
          newTab
          products={[
            {
              title: 'RV-380',
              brand: 'Thermo King',
              model: 'RV-380',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/rv-380.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/content/dam/thermoking/la/catalogs/serie-rv-pt.pdf',
            },
            {
              title: 'RV-580',
              brand: 'Thermo King',
              model: 'RV-580',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/rv-580.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/content/dam/thermoking/la/catalogs/serie-rv-pt.pdf',
            },
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
