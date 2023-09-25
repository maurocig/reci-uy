import { Email } from '@/components/email';
import { smtpEmail, targetEmail, transporter } from '@/lib/nodemailer';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: targetEmail,
    subject: 'Nuevo mensaje de formulario (reci.uy)',
    html: emailHtml,
  };

  try {
    transporter.sendMail(options);
    // console.log(name, email, message);
  } catch (error) {
    console.error('Hubo un error al enviar el email', error);
  }

  return new Response('Ok');
}
