import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-bg-secondary border-b border-border'>
            <div className='container flex items-center justify-between py-4'>
                <Link href='/' className='text-text-primary font-black text-lg md:text-xl tracking-tight uppercase'>
                    Bilskadeportalen
                </Link>

                <Link
                    href='/ny-skada'
                    className='bg-accent-red text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent-red/90 transition-colors'>
                    Anmäl skada
                </Link>
            </div>
        </header>
    );
}
