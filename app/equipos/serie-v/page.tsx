'use client';

import Box from '@/components/Box';
import Item from '@/components/Item';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import Spacer from '@/components/ui/Spacer';
import { ArrowLeft, ArrowLeftCircle, ListChecks, Sheet } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiExternalLink } from 'react-icons/hi';

type SerieVPageProps = {};

export default function SerieVPage({}: SerieVPageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/v500-crop.jpg)` }}
        className="w-full bg-center md:bg-[center_top_-8rem] lg:bg-[center_top_-10rem]  xl:bg-[center_top_-12rem] bg-cover rounded-lg "
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
              Flexible, potente y fiable.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover bg-center rounded-lg drop-shadow-darker lg:bg-[right_-5rem_top] lg:col-span-1"
          style={{ backgroundImage: 'url(/images/v-500-atego.jpg)' }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              V de versátil
            </h2>
            {/*
            <h3 className="text-lg text-gray-400">
              Funcionamiento dual: eléctrico y carretero.
            </h3>
							*/}
          </span>
          <p>
            Los equipos serie V de Thermo King ofrecen una solución de control
            de la temperatura de transmisión directa que no utiliza diésel para
            los operadores de camiones de pequeño, medio y gran tamaño.
          </p>
          <p>
            Esta gama tiene un impacto medioambiental mínimo gracias a que el
            compresor del equipo frigorífico se acciona mediante el motor del
            vehículo, lo que le permite ofrecer un nivel excepcionalmente bajo
            de ruido y emisiones.
          </p>
          <p>
            Además, los modelos serie V pueden alimentarse a través de la red
            eléctrica. Esto se traduce a mayor eficiencia y flexibilidad durante
            las paradas, manteniendo la carga en óptimas condiciones en todo
            momento.
          </p>
        </Box>
      </div>

      <Box>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80 ">
          <h2 className="flex w-full gap-2 mt-0 text-2xl font-semibold text-center items-cener sm:text-start">
            Características
          </h2>
          <Spacer className="h-4" />
          {/*
          <p className="mb-3 text-lg text-gray-400">
            Soluciones para Transporte Sustentable
          </p>
					*/}
          <div className="grid grid-cols-1 gap-2 text-lg lg:gap-4 lg:grid-cols-2">
            <FeatureList
              features={[
                'Funcionamiento dual (eléctrico y carretero)',
                'Sin motor diesel',
                'Nivel de ruido reducido',
                // 'Transmisión directa',
              ]}
            />
            <FeatureList
              features={[
                // 'Eficiencia y sostenibilidad mejoradas',
                'Alta capacidad de refrigeración',
                'Bajo nivel de emisiones',
                'Rendimiento de calefacción optimizado',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie V"
          description="Todos los modelos en esta serie"
          buttonText="Ver producto"
          buttonIcon={HiExternalLink}
          newTab
          products={[
            {
              title: 'V-300',
              brand: 'Thermo King',
              model: 'V-300',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/v-300.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/v-series/v-100-200-and-300-series',
            },
            {
              title: 'V-500',
              brand: 'Thermo King',
              model: 'V-500',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/v-500.png',
              shortDescription: 'laksjdf',
              url: 'https://europe.thermoking.com/es/direct-drive/v-series/v-500-series',
            },
            // Repetir la misma estructura de arriba para otros modelos de la Serie V
          ]}
          gridCols="xl:grid-cols-4 "
        />
      </Box>
    </div>
  );
}
