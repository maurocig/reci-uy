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

type SerieEvPageProps = {};

export default function SerieEvPage({}: SerieEvPageProps) {
  const router = useRouter();
  return (
    <div className="grid-cols grid gap-4 lg:gap-6">
      <div
        style={{
          backgroundImage: `url(/images/equipos/ev-500-volkswagen.png)`,
        }}
        className="w-full rounded-lg bg-cover bg-center lg:bg-[center_top_-60px]"
      >
        <div className="relative left-0 top-0 flex h-[300px] flex-col justify-center rounded-lg bg-gradient-to-r from-slate-900/70 to-teal-500/30 shadow-lg backdrop-blur-0 lg:p-4">
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
              Serie EV
            </h2>
            <p className="text-xl text-gray-200 drop-shadow-darker">
              Refrigeración de avanzada para vehículos eléctricos
            </p>
          </div>
        </div>
      </div>

      <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <div className="col-span-2 mb-2 space-y-2 rounded-lg border-cyan-100/80 bg-opacity-0">
          <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
            Rendimiento y eficiencia con cero emisiones
          </h2>
          {/*
          <p className="mb-3 text-lg text-gray-400">
            Nuevas unidades para camiones de gran porte.
          </p>
		*/}
          <p className="">
            La Serie EV de Thermo King es la última innovación en refrigeración
            diseñada específicamente para camiones 100% eléctricos. Con un
            diseño compacto y aerodinámico, ofrece una refrigeración potente y
            constante, combinada con una alta fiabilidad y eficiencia
            energética.
          </p>
          <p>
            {' '}
            Sus componentes duraderos, control inteligente y gestión avanzada de
            la batería garantizan un rendimiento excepcional, convirtiéndolo en
            una solución ideal para el transporte de productos sensibles a la
            temperatura en la cadena de frío.
          </p>
        </div>
      </Box>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <div
          className="order-2 col-span-1 block min-h-[300px] rounded-lg bg-cover bg-center drop-shadow-darker lg:order-1 lg:col-span-1 lg:bg-[top_right_-50px]"
          style={{ backgroundImage: 'url(/images/ev-500-ps.jpg)' }}
        ></div>

        <Box className="order-2 col-span-1 flex flex-col gap-3 xl:col-span-2">
          <span>
            <h2 className="mt-0 flex w-full items-center gap-2 text-center text-2xl font-semibold sm:text-start">
              EV 500
            </h2>
            <h3 className="text-lg text-gray-400">
              Camiones medianos y grandes
            </h3>
          </span>
          <p className="">
            Presentando el EV 500, un nuevo equipo de refrigeración diseñado
            para la próxima generación del transporte carretero.
          </p>
          <p>
            Los equipos EV 500 ofrecen una alta capacidad de enfriamiento de
            forma constante, esenciales para el transporte de productos
            alimenticios y farmacéuticos que dependen de la cadena de frío.
          </p>
          <p>
            Con dos opciones de uso - stand-by eléctrico de fábrica o alimentado
            por batería - el EV 500 se destaca por su flexibilidad, garantizando
            condiciones de temperatura óptimas para su carga en todo momento.{' '}
          </p>
        </Box>
      </div>

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
                'Funcionamiento dual con red eléctrica o batería',
                'Alto rendimiento y ahorro de energía',
              ]}
            />
            <FeatureList
              className="lg:col-span-3"
              features={[
                'Control de velocidad variable',
                'Protección integral con repuestos y servicios Thermo King',
                'Rápido descenso de temperatura',
              ]}
            />
          </div>
        </div>
      </Box>

      <Box>
        <ItemList
          title="Modelos Serie EV"
          description="Todos los modelos en esta serie"
          buttonText="Ver producto"
          buttonIcon={HiExternalLink}
          newTab
          products={[
            {
              title: 'EV-500',
              brand: 'Thermo King',
              model: 'EV-500',
              productType: 'equipos',
              price: 500,
              stock: 1,
              thumbnail: '/images/equipos/ev-500-producto.png',
              shortDescription: 'laksjdf',
              url: 'https://www.thermoking.com/content/dam/thermoking/la/catalogs/Product-Brochure-EV500SP2023.pdf',
            },
          ]}
          gridCols="xl:grid-cols-3 "
        />
      </Box>
    </div>
  );
}
