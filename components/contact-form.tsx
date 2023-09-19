import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';

type ContactFormProps = {};

export default function ContactForm({}: ContactFormProps) {
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Input
          placeholder="Nombre"
          className="w-full bg-sky-200/20 border-slate-100/80 backdrop-blur"
          type="text"
        />
        <Input
          placeholder="E-mail"
          className="w-full bg-sky-200/20 border-slate-100/80 backdrop-blur"
          type="email"
        />
        <Textarea
          placeholder="Escriba aquí su consulta"
          className="w-full h-[120px] col-span-2 bg-sky-200/20 border-slate-100/80 backdrop-blur"
        />
        <div className="flex justify-start w-full col-span-2">
          <Button className="flex items-center gap-1 w-full hover:opacity-80 transition text-[17px] bg-emerald-500/80">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
