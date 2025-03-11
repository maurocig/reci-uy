import DevlogItem from "@/app/actualizaciones/devlog-item";
import Box from "@/components/box";
import { Check, Clock, ExternalLink } from "lucide-react";
import { MdUpdate } from "react-icons/md";

type DevlogPageProps = {};

export default async function DevlogPage({}: DevlogPageProps) {
  const devLogItems = [
    {
      text: "Equipo EV-500 agregado",
      url: "/equipos/ev-500",
      urlCaption: "reci.uy/equipos/ev-500",
    },
    {
      text: "Sección de actualizaciones agregada",
      url: "/actualizaciones",
      urlCaption: "reci.uy/actualizaciones (esta página)",
    },
    {
      text: "Agregado tag de Dual en pagina de equipos",
      url: "/equipos",
      urlCaption: "reci.uy/equipos",
    },
  ];

  const devLogItemsAdmin = [
    {
      text: "Sistema de filtrado en Equipos",
      url: "https://admin.reci.uy/equipos",
      urlCaption: "admin.reci.uy/equipos",
    },
    {
      text: "Verificados Nº serie de equipos Reci.",
      url: "https://admin.reci.uy/equipos",
      urlCaption: "admin.reci.uy/equipos",
    },
    {
      text: "Posibilidad de agregar equipos sin matrícula (diálogo de confirmación)",
    },
    {
      text: "Barra de búsqueda por matrícula en barra de navegación (funciona con 4 números)",
    },
    {
      text: "Nuevos campos en servicios: Técnico responsable, Observaciones, Mano de obra",
      url: "https://admin.reci.uy/servicios",
      urlCaption: "admin.reci.uy/servicios",
    },
    {
      text: "Mejoras en interfaz de usuario, diálogos de confirmación al enviar formularios",
    },
  ];

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <Box>
        <h2 className="flex items-center gap-2 text-3xl font-semibold">
          <MdUpdate /> Historial de actualizaciones{" "}
        </h2>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span>{" "}
            <span className="text-emerald-400">v1.7.1</span>
          </b>{" "}
          – <span className="text-sm">Marzo 2025</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Borrado de archivos adjuntos en servicios, equipos y carrocerías",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span>{" "}
            <span className="text-emerald-400">v1.7</span>
          </b>{" "}
          – <span className="text-sm">Febrero 2025</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Nueva sección de instructivos",
            },
            {
              text: "Instructivo para descarga y subida de archivos con Data Logger",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span>{" "}
            <span className="text-emerald-400">v1.6</span>
          </b>{" "}
          – <span className="text-sm">Enero 2025</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Se puede adjuntar archivos en carrocerías y servicios de carrocerías",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-sky-400">reci.uy</span>{" "}
            <span className="text-emerald-400">v1.1</span>
          </b>{" "}
          – <span className="text-sm">Octubre 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            { text: "Nueva sección de Accesorios" },
            { text: "Fotos y descripción de cada accesorio" },
            { text: "Página de serie VX" },
            { text: "Banner de serie VX en homepage" },
            { text: "Mapa de Google Maps en página de contacto" },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span>{" "}
            <span className="text-emerald-400">v1.5</span>
          </b>{" "}
          – <span className="text-sm">Agosto 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Se puede adjuntar archivos en servicios",
            },
            {
              text: "Subida de archivo a carpeta de Google Drive de RECI",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span>{" "}
            <span className="">v1.4</span>
          </b>{" "}
          – <span className="text-sm">Agosto 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Arreglado bug de fecha incorrecta al guardar carrocerías",
            },
            {
              text: "Nuevos campos en carrocerías (Dimensiones, Proveedor, Estado, Entrega estimada, Accesorios)",
            },
            {
              text: "Información del camión en carrocerías (Marca, Modelo, Dist. ejes)",
            },
            {
              text: "Arreglado bug que no dejaba agregar carrocerías sin matrícula",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span> v1.3
          </b>{" "}
          – <span className="text-sm">Mayo 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Nueva sección de carrocerías",
            },
            {
              text: "Nueva sección de servicios para carrocerías",
            },
            { text: "Búsqueda mejorada" },
            { text: "Home y barra de navegación actualizadas" },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span> v1.2.3
          </b>{" "}
          – <span className="text-sm">Abril 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            {
              text: "Ordenar por R. Social, Cantidad de equipos y número de cliente en sección clientes",
            },
            { text: "Estado de garantía del equipo indicado con colores" },
            {
              text: "Agregada opción 'Ir al equipo' en diálogo de confirmación al agregar un nuevo equipo",
            },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span> v1.2.2
          </b>{" "}
          – <span className="text-sm">Marzo 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[
            { text: "Mejoras en sistema de filtrado" },
            { text: "Mejoras en sistema de paginación" },
            { text: "Agregar tareas en nuevo servicio" },
            { text: "Marcar tareas completadas en nuevo servicio" },
            { text: "Cambios menores en estilos de UI" },
          ].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-sky-400">reci.uy</span> v1.0.2
          </b>{" "}
          – <span className="text-sm">Marzo 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {[{ text: "Teléfono y dirección actualizados" }].map((item) => (
            <DevlogItem key={item.text} text={item.text} />
          ))}
        </ul>
      </Box>

      {/* admin.reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-blue-500">admin.reci.uy</span> v1.2.1
          </b>{" "}
          – <span className="text-sm">Enero 2024</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {devLogItemsAdmin.map((item) => (
            <DevlogItem
              key={item.text}
              text={item.text}
              url={item.url}
              urlCaption={item.urlCaption}
            />
          ))}
        </ul>
      </Box>

      {/* reci.uy */}
      <Box className="w-full">
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-sky-400">reci.uy</span> v1.0.1
          </b>{" "}
          – <span className="text-sm">Noviembre 2023</span>
        </h3>{" "}
        <ul className="space-y-2 text-lg">
          {devLogItems.map((item) => (
            <DevlogItem
              key={item.text}
              text={item.text}
              url={item.url}
              urlCaption={item.urlCaption}
            />
          ))}
        </ul>
      </Box>
    </div>
  );
}
