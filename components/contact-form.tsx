'use client';

import { Button } from '@/components/ui/button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { validationSchema } from '@/lib/validations';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {};

export default function ContactForm({}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm();
        toast.success(
          'Su mensaje fue enviado. Nos pondremos en contacto a la brevedad.',
          {
            duration: 7000,
            style: { fontSize: '17px', maxWidth: '650', width: 'fit-content' },
          }
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Hubo un error al enviar el email', error);
      setIsLoading(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="w-full">
              <Field
                name="name"
                placeholder="Nombre"
                id="name"
                type="text"
                className="w-full p-2 rounded-md bg-sky-200/20 border-slate-100/80 backdrop-blur"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="w-full">
              <Field
                name="email"
                id="email"
                placeholder="E-mail"
                className="w-full p-2 rounded-md bg-sky-200/20 border-slate-100/80 backdrop-blur"
                type="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="w-full col-span-2 ">
              <Field
                name="message"
                as="textarea"
                placeholder="Escriba aquí su consulta"
                className="w-full h-[120px] p-2 rounded-md bg-sky-200/20 border-slate-100/80 backdrop-blur"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex justify-start w-full col-span-2">
              <Button
                disabled={isLoading}
                className="flex items-center gap-3 w-full hover:opacity-80 transition text-[17px] bg-emerald-500/80"
              >
                Enviar{' '}
                <ClipLoader loading={isLoading} color="silver" size={13} />
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
