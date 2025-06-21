import { Body, Container, Head, Heading, Html, Preview, Section, Text, Link, Tailwind, Hr } from '@react-email/components';

export const ClaimNotificationEmail = ({ registrationNumber, claimType, companyName }) => (
    <Html>
        <Head />
        <Preview>Ny {claimType === 'glas' ? 'glas' : 'nyckel'}skadeanmälan mottagen</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black font-sans py-12 px-4'>
                <Container className='bg-white mx-auto w-full max-w-[600px] p-4 rounded-lg'>
                    <Section>
                        <Text className='text-lg font-bold'>Bilskadeportalen</Text>
                    </Section>

                    <Hr />

                    <Section>
                        <Heading className='text-xl font-bold'>Ny {claimType === 'glas' ? 'glas' : 'nyckel'}skadeanmälan</Heading>
                        <Text className='text-base'>Hej {companyName},</Text>
                        <Text className='text-sm'>En ny skadeanmälan har mottagits i Bilskadeportalen som kräver er uppmärksamhet.</Text>
                        <Section className='bg-gray-100 rounded-lg p-4 my-12'>
                            <Text className='text-xs font-bold'>Registreringsnummer</Text>
                            <Text className='text-xs'>{registrationNumber.toUpperCase()}</Text>
                        </Section>
                        <Text className='text-sm'>Logga in på Bilskadeportalen för att se alla detaljer och hantera ärendet.</Text>
                        <Section className='text-center my-12'>
                            <Link
                                href='https://bilskadeportalen-admin.vercel.app'
                                className='bg-black text-white font-bold py-3 px-6 rounded-full text-sm'>
                                Logga in på Bilskadeportalen
                            </Link>
                        </Section>
                        <Text className='text-xs text-center text-gray-500'>
                            Detta är ett automatiskt meddelande. Svara inte på detta mail.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default ClaimNotificationEmail;
