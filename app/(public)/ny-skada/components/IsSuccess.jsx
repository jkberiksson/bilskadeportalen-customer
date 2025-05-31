import { LuCheck } from 'react-icons/lu';

import Link from 'next/link';

export default function IsSuccess() {
    return (
        <div className='min-h-[60vh] flex items-center justify-center px-4'>
            <div className='max-w-md w-full space-y-8 text-center'>
                <div className='flex justify-center'>
                    <LuCheck className='h-24 w-24 text-green-500 rounded-full bg-green-500/10 p-6' />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold text-gray-900'>Tack för din anmälan!</h1>
                    <p className='text-lg text-gray-600'>Verkstaden har tagit emot din anmälan och kommer att kontakta dig inom kort.</p>
                </div>
                <Link
                    href='/'
                    className='px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-red hover:bg-accent-red/90 transition-colors duration-200'>
                    Tillbaka till startsidan
                </Link>
            </div>
        </div>
    );
}
