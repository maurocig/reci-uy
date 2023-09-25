import { Email } from '@/components/email';
// import { smtpEmail, targetEmail, transporter } from '@/lib/nodemailer';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  // con node mailer
  /* const options = { */
  /*   from: smtpEmail, */
  /*   to: targetEmail, */
  /*   subject: 'Nuevo mensaje de formulario (reci.uy)', */
  /*   html: emailHtml, */
  /* }; */

  try {
    // con node mailer
    // transporter.sendMail(options);

    console.log('llego a route.tsx', name, email, message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'mcigliuti01@gmail.com',
      subject: 'Nuevo mensaje de formulario (reci.uy)',
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Hubo un error al enviar el email', error);
  }

  return new Response('Ok');
}
