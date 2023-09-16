'use client';
import Box from '@/components/Box';
import ItemList from '@/components/ItemList';
import FeatureList from '@/components/feature-list';
import LinkIcon from '@/components/link-icon';
import Spacer from '@/components/ui/Spacer';
import { equipos } from '@/public/assets/equipos';
import {
  ArrowLeftCircle,
  ChevronRightCircle,
  ExternalLink,
  FileText,
  Info,
  Sheet,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiDocument, HiExternalLink } from 'react-icons/hi';

type ModelPageProps = {
  params: { model: string };
};

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = params;
  const router = useRouter();
  const equipo = equipos.find((equipo) => equipo.model === model);

  return equipo ? (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(${equipo.billboardImage})` }}
        className="w-full bg-center bg-cover rounded-lg "
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
              {equipo.series}
            </h2>
            <p className="text-xl text-gray-300 drop-shadow-darker">
              {equipo.seriesDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        <div
          className="block order-2 lg:order-1 min-h-[300px] col-span-1 bg-cover bg-center rounded-lg drop-shadow-darker lg:col-span-1"
          style={{ backgroundImage: `url(${equipo.image})` }}
        />

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2 ">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              {equipo.title}
            </h2>
            <h3 className="text-lg text-gray-400">
              {equipo.modelDescription ? equipo.modelDescription : ''}
            </h3>
          </span>
          <p>{equipo.description}</p>
          {/*
          <p></p>
          <p></p>
					*/}
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
            {equipo.features ? (
              <>
                <FeatureList
                  features={[
                    equipo.features[0],
                    equipo.features[1],
                    equipo.features[2],
                  ]}
                />
                <FeatureList
                  features={[
                    equipo.features[3],
                    equipo.features[4],
                    equipo.features[5],
                  ]}
                />
              </>
            ) : null}
          </div>
        </div>
      </Box>

      <Box>
        {/* grid */}
        <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 ">
          <LinkIcon
            text="Ver especificaciones"
            subText="Descargar PDF"
            newTab
            icon={FileText}
            url={equipo.urlSpecs || equipo.url}
          />
          <LinkIcon
            text="Más información"
            subText="Sitio oficial de Thermo King"
            newTab
            icon={Info}
            url={equipo.urlTk || equipo.url}
          />
          <LinkIcon
            text="Contactanos"
            icon={ChevronRightCircle}
            url="/contacto"
            newTab={false}
            subText="Brindamos asesoramiento personalizado"
            className="bg-teal-400/70 hover:bg-teal-400/90 "
          />
        </div>
      </Box>
    </div>
  ) : (
    'No existe este equipo'
  );
}
