import React from 'react';

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

// export function Email({ name, email, message }: EmailProps) {
export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Nuevo mensaje de <b>reci.uy</b>
            </Heading>
            <Text className="mx-0 my-[30px] p-0 text-center text-lg font-normal text-black">
              Nuevo mensaje de <strong>{name}</strong> con email{' '}
              <strong>{email}</strong>:
            </Text>
            <Text className="mx-2">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
