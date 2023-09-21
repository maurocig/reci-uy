import Box from '@/components/Box';
import ContactForm from '@/components/contact-form';
import {
  Instagram,
  LocateIcon,
  Mail,
  Map,
  MapPin,
  Phone,
  PhoneCall,
  PhoneIcon,
} from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineWhatsapp, MdWhatsapp } from 'react-icons/md';

export default function ContactoPage() {
  return (
    <>
      <div className="grid gap-4 mb-4 lg:gap-6 sm:grid-cols-2 lg:mb-6">
        {/* form */}

        <Box>
          <h2 className="w-full mb-4 text-2xl font-semibold">
            Dejanos tu consulta
          </h2>
          <ContactForm />
        </Box>
        <Box>
          <h2 className="w-full mb-4 text-2xl font-semibold">
            Información de contacto
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <Mail size={20} />
              <span className="font-bold text-white">ventasreci@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={20} />{' '}
              <span className="font-bold text-white">22970648</span>
            </div>
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
            <div className="flex items-center gap-4">
              <Instagram />
              <Link
                href="https://www.instagram.com/reci_importaciones/"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                <b>@reci_importaciones</b>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={20} />
              <Link
                href="https://maps.app.goo.gl/j9a6tF17ypV96XKu7"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                <b>Ruta 8 Km. 28.300, Barros Blancos</b>
              </Link>
            </div>
          </div>
        </Box>
      </div>

      {/* mapa */}
      <Box>
        <h2 className="w-full mb-4 text-2xl font-semibold">Mapa</h2>
        <div className="bg-red-500 rounded-lg flex justify-center items-center w-full md:h-[300px]">
          <b>Acá va la ubicación en google maps</b>
        </div>
      </Box>
    </>
  );
}
