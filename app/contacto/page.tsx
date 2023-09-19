import Box from '@/components/Box';
import {
  Instagram,
  LocateIcon,
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
          <h2 className="w-full mb-4 text-2xl font-semibold">Contacto</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Instagram /> Instagram:{' '}
              <Link
                href="https://www.instagram.com/reci_importaciones/"
                target="_blank"
                className="text-blue-400"
              >
                @reci_importaciones
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MdWhatsapp size={25} /> Whatsapp:
              <Link
                href="https://wa.me/59894444648"
                target="_blank"
                className="text-blue-400"
              >
                +598 94 444 648
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={25} /> Teléfono: <span>22970648</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={25} /> Dirección:
              <Link
                href="https://maps.app.goo.gl/j9a6tF17ypV96XKu7"
                target="_blank"
                className="text-blue-400"
              >
                Ruta 8 Km. 28.300, Barros Blancos
              </Link>
            </div>
          </div>
        </Box>

        <Box>
          <h2 className="w-full mb-4 text-2xl font-semibold">
            Dejanos tu consulta
          </h2>
        </Box>
      </div>

      <Box>
        <h2 className="w-full mb-4 text-2xl font-semibold">Mapa</h2>
      </Box>
    </>
  );
}
