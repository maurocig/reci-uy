import Box from '@/components/Box';
import LinkIcon from '@/components/link-icon';
import TextImageSection from '@/components/text-image-section';
import TextSection from '@/components/text-section';
import {
  ArrowRight,
  ArrowRightCircle,
  ChevronRight,
  Mail,
  Snowflake,
  Truck,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { TbSnowflake } from 'react-icons/tb';

export default function NosotrosPage() {
  return (
    <div className="grid min-h-0 grid-cols-1 gap-4 lg:gap-6">
      <TextImageSection
        imageUrl="/images/cartel.jpg"
        title="RECI Importaciones"
        subtitle="Sobre nosotros"
      >
        <p className="mb-3 text">
          En RECI Importaciones, somos una empresa dedicada a la venta de
          equipamiento para el transporte carretero y servicio técnico
          especializado. Con un enfoque inquebrantable en la satisfacción del
          cliente y años de experiencia en la industria, nos hemos consolidado
          como un referente líder del rubro en Uruguay.
        </p>
        <div className="flex justify-start w-full">
          <LinkIcon
            url="/contacto"
            icon={ArrowRightCircle}
            text="Contacto"
            subText="Contáctese con nosotros para recibir asesoramiento personalizado."
            className="bg-teal-500/90 w-[300px] p-3 hover:bg-teal-500"
          />
        </div>
      </TextImageSection>

      <TextSection title="Nuestra Especialización">
        <p className="mb-4 text-lg">
          Nos especializamos en brindar soluciones integrales para el transporte
          de carga, destacándonos en <b>tres áreas clave</b>:
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          <Box className="text-black md:col-span-1 bg-slate-100/60 ring-slate-900/20">
            <h3 className="flex items-center gap-2 text-lg font-bold bg-clip-text lg:text-xl">
              <Snowflake size={18} strokeWidth={2.5} /> Equipos de Frío Thermo
              King
            </h3>
            <p>
              Como distribuidores autorizados <b>Thermo King</b>, ofrecemos la
              línea completa de equipos de refrigeración líderes en el mercado.
              Estos equipos garantizan la preservación de la carga en
              condiciones óptimas, cumpliendo con los más altos estándares de
              calidad.
            </p>
          </Box>
          <Box className="text-black md:col-span-1 bg-slate-100/60 ring-slate-900/20">
            <h3 className="flex items-center gap-2 text-lg font-bold lg:text-xl">
              <Wrench size={18} strokeWidth={2.5} /> Servicio Técnico
              Especializado
            </h3>
            <p>
              Contamos con un equipo de técnicos altamente capacitados con
              certificación Thermo King. Ofrecemos servicios de mantenimiento y
              reparación para mantener su equipo de refrigeración en perfecto
              funcionamiento.
            </p>
          </Box>
          <Box className="grid gap-4 text-black md:grid-cols-2 md:col-span-2 lg:gap-6 bg-slate-100/60 ring-slate-900/20">
            <div className="col-span-1">
              <h3 className="flex items-center gap-2 text-lg font-bold lg:text-xl">
                <Truck size={18} strokeWidth={2.5} /> Carrocerías importadas
              </h3>
              <p>
                Colaboramos con dos de las marcas más prestigiosas en la
                fabricación de carrocerías para vehículos de transporte.
                Importamos y ensamblamos carrocerías <b>Liderkit</b> de Europa y{' '}
                <b>Fibrasil</b> de Brasil. Todas las carrocerías son
                personalizables, fabricadas a medida en su lugar de origen y
                ensambladas en nuestros talleres.
              </p>
            </div>
            <div className="relative col-span-1 overflow-hidden rounded-md">
              <Image
                src="/images/portada-c-crop.jpg"
                fill
                alt="taller de ensamblado"
                className="object-cover object-center"
              />
            </div>
          </Box>
        </div>
      </TextSection>

      {/*
      <Box>
        <h2 className="mb-2 text-2xl">Contáctenos</h2>
        <p>
          Si desea saber más sobre cómo RECI Importaciones puede mejorar sus
          operaciones de transporte o tiene alguna pregunta, no dude en ponerse
          en contacto con nuestro equipo de expertos. Estamos aquí para
          servirle.
        </p>
      </Box>
			*/}
    </div>
  );
}
