'use client';

import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

export default function Buttons({ currentStep, nextStep, prevStep, isSubmitting }) {
    return (
        <div className='flex items-center justify-between gap-4 pt-6 border-t border-border'>
            {currentStep > 1 && (
                <button
                    type='button'
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className='rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
                    <LuArrowLeft className='h-4 w-4' />
                    Tillbaka
                </button>
            )}
            <button
                className='ml-auto bg-accent-red text-white px-4 py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent-red/90 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                type={currentStep === 3 ? 'submit' : 'button'}
                onClick={currentStep < 3 ? nextStep : undefined}
                disabled={isSubmitting}>
                {currentStep === 3 ? 'Skicka anmälan' : 'Fortsätt'}
                {currentStep < 3 && <LuArrowRight className='h-4 w-4' />}
            </button>
        </div>
    );
}
