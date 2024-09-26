"use client";

import Box from "@/components/box";
import FeatureList from "@/components/feature-list";
import Item from "@/components/Item";
import ItemList from "@/components/ItemList";
import LinkIcon from "@/components/link-icon";
import Spacer from "@/components/ui/Spacer";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ChevronRightCircle,
  FileText,
  Info,
  ListChecks,
  Sheet,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiExternalLink } from "react-icons/hi";

type SerieCPageProps = {};

export default function SerieCPage({}: SerieCPageProps) {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols lg:gap-6">
      <div
        style={{ backgroundImage: `url(/images/banner-serie-vx.jpg)` }}
        className="w-full bg-center bg-cover rounded-lg "
      >
        <div className="relative left-0 top-0 flex h-[300px] flex-col justify-center rounded-lg bg-gradient-to-r from-slate-800/95 to-teal-100/20 shadow-lg backdrop-blur-0 lg:p-4">
          <button
            onClick={() => router.back()}
            className="absolute mb-3 left-3 top-3 md:top-4 lg:left-4"
          >
            <ArrowLeftCircle
              size={30}
              strokeWidth={1.3}
              className="text-gray-300 font-extralight hover:text-white"
            />
          </button>
          <div className="ml-9">
            <h2 className="text-3xl font-semibold text-white drop-shadow-darker">
              Serie VX
            </h2>
            <p className="max-w-[600px] text-2xl text-gray-200 drop-shadow-darker">
              Alto rendimiento y refrigeración sostenible con un control de
              temperatura preciso.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <div
          className="order-2 col-span-1 block min-h-[250px] rounded-lg bg-cover bg-right drop-shadow-darker lg:order-1 lg:col-span-1"
          style={{ backgroundImage: "url(/images/serie-vx-render.jpg)" }}
        ></div>

        <Box className="flex flex-col col-span-1 gap-3 lg:order-2 xl:col-span-2">
          <span>
            <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
              Descripción
            </h2>
            <h3 className="text-lg text-gray-400">
              Sin motor, de alta eficiencia y con un bajo nivel de ruido.
            </h3>
          </span>
          <p className="">
            La serie VX de Thermo King eleva aún más el nivel de las soluciones
            de refrigeración monotemperatura y multitemperatura para camiones de
            pequeño, medio y gran tamaño al proporcionar una refrigeración sin
            emisiones, con un nivel extremadamente bajo de ruido y vibraciones,
            un mantenimiento reducido, un bajo coste total de propiedad y mucho
            más.
          </p>
        </Box>
      </div>

      <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <div className="relative w-full">
          <Image
            src={"/images/serie-vx-reci.jpg"}
            alt="Servicio técnico"
            fill
            className="object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="mb-2 space-y-3 bg-opacity-0 rounded-lg border-cyan-100/80">
          <p>
            Los equipos de la serie VX ofrecen un rendimiento mejorado con un
            enfriamiento más rápido y mayor eficiencia, todo en un diseño
            compacto, ligero y robusto.
          </p>
          <p>
            Estas unidades son ecológicas, sin emisiones de escape, con opciones
            de alimentación flexible y bajo ruido, permitiendo entregas 24/7 en
            zonas urbanas.
          </p>{" "}
          <p>
            Su control preciso de la temperatura, junto con el sistema
            inteligente Direct Smart Reefer, garantiza la protección de la carga
            incluso en condiciones extremas, y contribuye a un mantenimiento
            simplificado y eficiente.
          </p>
        </div>
      </Box>

      <Box>
        <div className="mb-2 bg-opacity-0 rounded-lg border-cyan-100/80">
          <h2 className="flex items-center w-full gap-2 mt-0 text-2xl font-semibold text-center sm:text-start">
            <ListChecks className="inline" size={17} /> Características
          </h2>
          <Spacer className="h-4" />
          {/*
          <p className="ml-6">
            Realizado por técnicos especializados Thermo King.
          </p>
						*/}
          <div className="grid grid-cols-1 gap-2 text-lg lg:grid-cols-2 lg:gap-4">
            <FeatureList
              className=""
              features={[
                "Rendimiento mejorado",
                "Control inteligente",
                "Unidades compactas y robustas",
              ]}
            />
            <FeatureList
              className=""
              features={[
                "Conexión a red eléctrica con opción de 220V o 380V",
                "Control preciso de la temperatura",
                "Bajo nivel de ruido y emisiones",
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
          title="Modelos Serie VX"
          description="Todos los modelos en esta serie"
          buttonText="Ver producto"
          buttonIcon={HiExternalLink}
          newTab
          products={[
            {
              title: "V-400x",
              line: "VX",
              brand: "Thermo King",
              model: "V-400x",
              productType: "equipos",
              price: 500,
              stock: 1,
              thumbnail: "/images/equipos/v-400x.png",
              shortDescription: "",
              url: "https://europe.thermoking.com/es/direct-drive/discover-the-range/v-400x",
            },
            {
              title: "V-500x",
              line: "VX",
              brand: "Thermo King",
              model: "V-500x",
              productType: "equipos",
              price: 500,
              stock: 1,
              thumbnail: "/images/equipos/v-500x.png",
              shortDescription: "",
              url: "https://europe.thermoking.com/es/direct-drive/discover-the-range/v-500x",
            },
            {
              title: "V-600x",
              line: "VX",
              brand: "Thermo King",
              model: "V-600x",
              productType: "equipos",
              price: 500,
              stock: 1,
              thumbnail: "/images/equipos/v-600x.png",
              shortDescription: "",
              url: "https://europe.thermoking.com/es/direct-drive/discover-the-range/v-600x-max",
            },
          ]}
          gridCols="xl:grid-cols-3"
        />
      </Box>

      <Box>
        {/* grid */}
        <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
          <LinkIcon
            text="Ver folleto"
            subText="Descargar PDF"
            newTab
            icon={FileText}
            url="https://thermokingzapp.com/assets/original/TK80083_Vx-Series_02-2023_ES_V2.0_LR.pdf"
          />
          <LinkIcon
            text="Más información"
            subText="Sitio oficial de Thermo King"
            newTab
            icon={Info}
            url="https://europe.thermoking.com/es/direct-drive/v-series/serie-vx"
          />
          <LinkIcon
            text="Dejanos tu consulta"
            icon={ChevronRightCircle}
            url="/contacto"
            newTab={false}
            subText="Brindamos asesoramiento personalizado"
            className="bg-teal-400/70 hover:bg-teal-400/90 "
          />
        </div>
      </Box>
    </div>
  );
}
