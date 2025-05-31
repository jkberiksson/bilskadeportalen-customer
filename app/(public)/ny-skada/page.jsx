import Link from 'next/link';
import { LuKeySquare, LuCar } from 'react-icons/lu';

export default function NySkadaPage() {
    return (
        <div className='min-h-[60vh] space-y-16'>
            <h1 className='text-2xl md:text-3xl font-black tracking-tight text-text-primary mb-6 uppercase text-center'>
                Vad vill du anmäla?
            </h1>
            <div className='flex flex-col justify-center md:flex-row md:flex-wrap gap-6 '>
                <Link
                    href='/ny-skada/glas'
                    className='group flex flex-col items-center justify-center text-center p-8 bg-bg-secondary border border-border rounded-xl shadow hover:border-accent-red/40 transition-colors'>
                    <LuCar className='w-10 h-10 text-accent-red mb-4 group-hover:scale-110 transition-transform' />
                    <span className='font-bold text-lg text-text-primary mb-1'>Skadad ruta</span>
                    <span className='text-xs text-text-secondary'>Stenskott, spricka eller annan glasskada</span>
                </Link>
                <Link
                    href='/ny-skada/nyckel'
                    className='group flex flex-col items-center justify-center text-center p-8 bg-bg-secondary border border-border rounded-xl shadow hover:border-accent-red/40 transition-colors'>
                    <LuKeySquare className='w-10 h-10 text-accent-red mb-4 group-hover:scale-110 transition-transform' />
                    <span className='font-bold text-lg text-text-primary mb-1'>Bilnyckel</span>
                    <span className='text-xs text-text-secondary'>Borttappad, trasig eller stulen nyckel</span>
                </Link>
            </div>
        </div>
    );
}
