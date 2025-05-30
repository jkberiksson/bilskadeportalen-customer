import carIllustration from '@/public/car-illustration.png';
import { LuSearch, LuPhone, LuCheck, LuArrowRight } from 'react-icons/lu';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className='space-y-16'>
            {/* Hero Section */}
            <section className='bg-accent-red/5 px-2 sm:px-4 rounded-lg'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-16 max-w-6xl mx-auto'>
                    {/* Left */}
                    <div className='flex-1 flex flex-col items-start justify-center max-w-xl w-full'>
                        <div className='w-fit py-1 px-2.5 text-xs md:text-sm uppercase tracking-wider bg-accent-red/10 text-accent-red mb-3 md:mb-4'>
                            Skada på bilen?
                        </div>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-primary uppercase mb-2 md:mb-4'>
                            Vi fixar det!
                        </h2>
                        <p className='text-text-secondary text-sm md:text-base max-w-lg mb-5 md:mb-7'>
                            Anmäl din skada direkt online och låt oss ta hand om det. Enkel, snabb och effektiv service.
                        </p>
                        <Link
                            href='/ny-skada'
                            className=' bg-accent-red text-white px-5 md:px-6 py-3 rounded-full text-sm md:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-accent-red/90 transition-colors'>
                            Anmäl skada nu
                            <LuArrowRight className='w-4 h-4' />
                        </Link>
                    </div>
                    {/* Right */}
                    <div className='flex-1 flex items-center justify-center w-full mb-6 md:mb-0'>
                        <Image
                            src={carIllustration}
                            alt='Car illustration'
                            className='w-full max-w-sm md:max-w-lg h-auto object-contain'
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section>
                <div className='flex flex-col items-center mb-8 md:mb-12'>
                    <div className='w-fit mx-auto py-1 px-2.5 text-xs md:text-sm uppercase tracking-wider bg-accent-red/10 text-accent-red mb-2 md:mb-3'>
                        Så fungerar det
                    </div>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-black tracking-tight text-text-primary uppercase mb-1'>
                        En enkel process
                    </h2>
                    <p className='text-text-secondary text-xs sm:text-sm md:text-base mt-1'>Från anmälan till reparation</p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                    {[
                        {
                            title: 'Anmäl skadan',
                            description: 'Fyll i vårt enkla formulär med information om skadan och dina kontaktuppgifter.',
                            icon: <LuSearch className='w-6 h-6 md:w-8 md:h-8 text-accent-red' />,
                        },
                        {
                            title: 'Vi kontaktar dig',
                            description: 'Verkstaden kontaktar dig inom kort för att boka in en tid för reparation.',
                            icon: <LuPhone className='w-6 h-6 md:w-8 md:h-8 text-accent-red' />,
                        },
                        {
                            title: 'Färdigställning',
                            description: 'Verkstaden fixar skadan och kontaktar dig när bilen är klar.',
                            icon: <LuCheck className='w-6 h-6 md:w-8 md:h-8 text-accent-red' />,
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className='flex-1 bg-bg-secondary p-5 sm:p-6 md:p-8 border border-border rounded-xl hover:border-accent-red/20 transition-colors group flex flex-col items-center text-center shadow'>
                            <div className='mb-3 md:mb-5'>{feature.icon}</div>
                            <h3 className='text-base sm:text-lg md:text-xl font-black tracking-tight text-text-primary uppercase mb-2 md:mb-3'>
                                {feature.title}
                            </h3>
                            <p className='text-text-secondary text-xs sm:text-sm md:text-base'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-accent-red/5 px-2 sm:px-4 rounded-lg'>
                <div className='container relative py-10 md:py-16 max-w-2xl mx-auto text-center space-y-6 md:space-y-8'>
                    <div className='w-fit mx-auto py-1 px-2.5 md:px-3 text-xs md:text-sm uppercase tracking-wider bg-accent-red/10 text-accent-red'>
                        Redo att anmäla?
                    </div>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-black tracking-tight text-text-primary uppercase'>
                        Anmäl din skada nu
                    </h2>
                    <p className='text-text-secondary text-xs sm:text-sm md:text-base'>
                        Det tar bara några minuter att anmäla din skada. Vi hjälper dig genom hela processen.
                    </p>
                    <Link
                        href='/ny-skada'
                        className='inline-flex items-center gap-2 bg-accent-red text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-wider hover:bg-accent-red/90 transition-colors shadow-md'>
                        Anmäl skada nu
                        <LuArrowRight className='w-4 h-4' />
                    </Link>
                </div>
            </section>
        </div>
    );
}
