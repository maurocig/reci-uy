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

type SerieRvPageProps = {};

export default function SerieRvPage({}: SerieRvPageProps) {
  const router = useRouter();
  return (
    <div className="grid-cols grid gap-4 lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/rv-580-billboard-reci.jpg)` }}
        className="w-full rounded-lg bg-cover bg-center lg:bg-[center_top_-9rem] xl:bg-[center_top_-0rem]"
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
              Serie RV
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              Enfriamiento rápido, confiables y revolucionarios.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <div
          className="bg-top-center order-2 col-span-1 block min-h-[300px] rounded-lg bg-cover drop-shadow-darker lg:order-1 lg:col-span-1"
          style={{ backgroundImage: 'url(/images/rv-580-reci.jpg)' }}
        ></div>

        <Box className="col-span-1 flex flex-col gap-3 lg:order-2 xl:col-span-2">
          <span>
            <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
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
        <div className="mb-2 rounded-lg border-cyan-100/80 bg-opacity-0">
          <h2 className="items-cener mt-0 flex w-full gap-2 text-center text-2xl font-semibold sm:text-start">
            Características
          </h2>
          <Spacer className="h-4" />
          {/*
          <p className="mb-3 text-lg text-gray-400">
            Mayor capacidad y mayor eficiencia
          </p>
					*/}
          <div className="grid grid-cols-1 text-lg lg:grid-cols-5 lg:gap-4">
            <FeatureList
              className="lg:col-span-2"
              features={[
                // 'Serpentina del evaporador más grande para un intercambio de calor más rápido',
                'Pre-enfriamiento rápido',
                'Robusto compresor TK',
                'Nuevo sistema de control eléctrico',
              ]}
            />
            <FeatureList
              className="lg:col-span-3"
              features={[
                // 'Mayor capacidad de enfriamiento para una mejor protección de la carga',
                'Ligero y compacto para una instalación fácil',
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
          buttonText="Ver producto"
          buttonIcon={HiExternalLink}
          products={[
            {
              title: 'RV-380',
              line: 'VP Truck',
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
              line: 'VP Truck',
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
