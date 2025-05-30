import { LuLoaderCircle } from 'react-icons/lu';

export default function LoadingSpinner() {
    return (
        <div className='w-full max-w-md mx-auto space-y-6 text-center'>
            <div className='flex items-center justify-center'>
                <LuLoaderCircle className='w-8 h-8 text-accent-red animate-spin' />
            </div>
            <p className='text-sm font-bold uppercase tracking-wider text-text-secondary'>Laddar...</p>
        </div>
    );
}
