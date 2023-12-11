import DevlogItem from '@/app/actualizaciones/devlog-item';
import Box from '@/components/box';
import { Check, ExternalLink } from 'lucide-react';

type DevlogPageProps = {};

export default async function DevlogPage({}: DevlogPageProps) {
  const devLogItems = [
    {
      text: 'Equipo EV-500 agregado',
      url: '/equipos/ev-500',
      urlCaption: 'reci.uy/equipos/ev-500',
    },
    {
      text: 'EV-500 agregado a la página de inicio',
    },
    {
      text: 'Sección de actualizaciones agregada',
      url: '/actualizaciones',
      urlCaption: 'reci.uy/actualizaciones (esta página)',
    },
    {
      text: 'Agregado tag de Dual en pagina de equipos',
      url: '/equipos',
      urlCaption: 'reci.uy/equipos',
    },
  ];

  return (
    <>
      <Box className="w-full">
        <h2 className="mb-4 text-3xl font-semibold">Actualizaciones </h2>
        <h3 className="mb-2 inline text-xl">
          <b>
            <span className="mr-2 text-green-400">reci.uy</span> v1.0.1
          </b>{' '}
          – <span className="text-sm">11/23</span>
        </h3>{' '}
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
    </>
  );
}
