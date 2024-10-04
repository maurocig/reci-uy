import Box from "@/components/box";
import ContactForm from "@/components/contact-form";
import {
  Clock,
  Instagram,
  LocateIcon,
  Mail,
  Map,
  MapPin,
  Phone,
  PhoneCall,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineWhatsapp, MdWhatsapp } from "react-icons/md";

export default function ContactoPage() {
  return (
    <>
      <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:mb-6 lg:gap-6">
        {/* form */}
        <Box>
          <h2 className="mb-4 w-full text-2xl font-semibold">
            Dejanos tu consulta
          </h2>
          <ContactForm />
        </Box>

        <Box>
          <h2 className="mb-4 w-full text-2xl font-semibold">
            Información de contacto
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <Mail size={21} />
              <span className="font-bold text-white">ventas@reci.uy</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={22} />{" "}
              <span className="font-bold text-white">22928875</span>
            </div>
            {/*
            <div className="flex items-center gap-4">
              <MdWhatsapp size={18} />
              <Link
                href="https://wa.me/59894444648"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                <b>+598 94 444 648</b>
              </Link>
            </div>
						*/}
            <div className="flex items-center gap-4">
              <Instagram size={22} />
              <Link
                href="https://www.instagram.com/reci_importaciones/"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                <b>@reci_importaciones</b>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} />
              <Link
                href="https://maps.app.goo.gl/j9a6tF17ypV96XKu7"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                <b>Ruta 8 Km. 28.800, Barros Blancos</b>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={24} />
              Lunes a Viernes de 09:00 a 17:00 hs.
            </div>
          </div>
        </Box>

        <Box className="col-span-1 w-full sm:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.7012985666406!2d-55.98214442372438!3d-34.73792286459914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a027b618c0b61d%3A0xe31da7d629ee9cf2!2sRECI%20IMPORTACIONES%20LTDA!5e0!3m2!1sen!2sar!4v1728050441116!5m2!1sen!2sar"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </Box>
      </div>

      {/* mapa */}
      {/*
      <Box>
        <h2 className="w-full mb-4 text-2xl font-semibold">Mapa</h2>
        <div className="bg-red-500 rounded-lg flex justify-center items-center w-full md:h-[300px]">
          <b>Acá va la ubicación en google maps</b>
        </div>
      </Box>
			*/}
    </>
  );
}
