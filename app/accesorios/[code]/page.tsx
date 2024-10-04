import BannerCategory from "@/components/banner-category";
import Box from "@/components/box";
import LinkIcon from "@/components/link-icon";
import { accesorios } from "@/public/assets/accesorios";
import { ChevronRightCircle, Info } from "lucide-react";
import Image from "next/image";
import { RiErrorWarningLine } from "react-icons/ri";
import AccesoriosList from "../AccesoriosList";

export default function AccesorioDetails({
  params,
}: {
  params: { code: string };
}) {
  const accesorio = accesorios.find((acc) => acc.code === params.code);
  const related = accesorio
    ? accesorios.filter(
        (acc) =>
          acc.category === accesorio.category && acc.code !== accesorio.code
      )
    : //   .splice(0, 3)
      [];

  return accesorio ? (
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description=""
        image={`/images/accesorios/portada-lower.jpg`}
        bgPosition="bg-center max-h-[150px]"
        className="bg-gradient-to-r from-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />

      {/* Product details */}
      <Box className="grid items-center gap-4 md:grid-cols-2 md:p-6 lg:gap-6">
        <div className="">
          <h2 className="mb-2 text-2xl font-semibold lg:text-3xl">
            {accesorio.label}
          </h2>
          <p>{accesorio.description}</p>
        </div>
        <div className="flex w-full place-content-center">
          <Image
            src={`/images/accesorios/${accesorio.images[0]}`}
            alt={accesorio.label}
            width="300"
            height="300"
          />
        </div>
        {accesorio.images[1] && (
          <div className="order-2 flex w-full place-content-center md:order-1">
            <Image
              src={`/images/accesorios/${accesorio.images[1]}`}
              alt={accesorio.label}
              width="300"
              height="300"
            />
          </div>
        )}
        {accesorio.observations && (
          <div className="order-1 md:order-2">
            <p>{accesorio.observations}</p>
          </div>
        )}
      </Box>

      <div className="flex w-full flex-col gap-4 md:flex-row">
        {accesorio.url && (
          <LinkIcon
            className=""
            text="Más información del producto"
            subText={`Sitio oficial de ${accesorio.brand}`}
            newTab
            icon={Info}
            url={accesorio.url}
          />
        )}
        <LinkIcon
          text="Pedir cotización"
          icon={ChevronRightCircle}
          url="/contacto"
          newTab={false}
          subText="Brindamos asesoramiento personalizado"
          className="bg-teal-400/70 hover:bg-teal-400/90"
        />
      </div>

      {/* Related products */}
      <AccesoriosList
        accesorios={related}
        description="Productos relacionados"
      />
    </div>
  ) : (
    // Accesory not found
    <div className="flex flex-col space-y-4 lg:space-y-6">
      <BannerCategory
        title="Accesorios"
        description=""
        image={`/images/accesorios/portada.avif`}
        bgPosition="bg-center max-h-[150px]"
        className="bg-gradient-to-r from-slate-200/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      />
      <Box className="flex flex-row items-center gap-4">
        <RiErrorWarningLine size={24} className="text-yellow-300/50" />{" "}
        <span>El accesorio que buscás ya no existe.</span>
      </Box>
    </div>
  );
}
