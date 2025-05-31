import Link from 'next/link';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';

export default function Footer() {
    return (
        <footer className='bg-bg-secondary'>
            <div className='container py-16 md:py-24'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
                    {/* Company Info */}
                    <div className='space-y-4 md:space-y-6'>
                        <div className='flex items-center gap-2 group'>
                            <Link
                                href='/'
                                className='text-text-primary font-black text-lg md:text-xl tracking-tight hover:text-accent-red transition-colors uppercase'>
                                Bilskadeportalen
                            </Link>
                        </div>
                        <p className='text-text-secondary text-sm md:text-base max-w-sm'>
                            Vi hjälper dig att hantera skador på ett enkelt och effektivt sätt. Snabb service och professionell hantering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4 md:space-y-6'>
                        <h3 className='text-sm md:text-base font-black tracking-tight text-text-primary uppercase'>Länkar</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='/ny-skada'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Anmäl skada
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/login'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Logga in
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href='/om-oss'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Om oss
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-4 md:space-y-6'>
                        <h3 className='text-sm md:text-base font-black tracking-tight text-text-primary uppercase'>Kontakt</h3>
                        {/* <ul className='space-y-3'>
                            <li className='flex items-center gap-3 text-text-secondary text-sm md:text-base group'>
                                <div className='w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors'>
                                    <LuPhone className='text-accent-red w-3 h-3 md:w-4 md:h-4' />
                                </div>
                                <span>08-123 45 67</span>
                            </li>
                            <li className='flex items-center gap-3 text-text-secondary text-sm md:text-base group'>
                                <div className='w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors'>
                                    <LuMail className='text-accent-red w-3 h-3 md:w-4 md:h-4' />
                                </div>
                                <span>info@bilskadeportalen.se</span>
                            </li>
                            <li className='flex items-center gap-3 text-text-secondary text-sm md:text-base group'>
                                <div className='w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors'>
                                    <LuMapPin className='text-accent-red w-3 h-3 md:w-4 md:h-4' />
                                </div>
                                <span>Kalmar, Sverige</span>
                            </li>
                        </ul> */}
                    </div>

                    {/* Legal */}
                    <div className='space-y-4 md:space-y-6'>
                        <h3 className='text-sm md:text-base font-black tracking-tight text-text-primary uppercase'>Juridisk information</h3>
                        {/* <ul className='space-y-3'>
                            <li>
                                <Link
                                    to='/privacy'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Integritetspolicy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/terms'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Användarvillkor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/cookies'
                                    className='text-text-secondary text-sm md:text-base hover:text-accent-red transition-colors'>
                                    Cookie-policy
                                </Link>
                            </li>
                        </ul> */}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-12 md:mt-16 pt-8 md:pt-12 border-t border-border'>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                        <p className='text-text-secondary text-sm md:text-base'>
                            © {new Date().getFullYear()} Bilskadeportalen. Alla rättigheter förbehållna.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
