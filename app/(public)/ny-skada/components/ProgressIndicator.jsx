import { LuLoaderCircle } from 'react-icons/lu';

export default function ProgressIndicator({ currentStep, totalSteps, message }) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className='fixed inset-0 bg-bg-secondary/80 backdrop-blur-sm flex items-center justify-center z-50'>
            <div className='bg-bg-primary border border-border rounded-xl p-6 md:p-8 max-w-md w-full mx-4'>
                <div className='flex items-center justify-center mb-6'>
                    <LuLoaderCircle className='h-8 w-8 text-accent-red animate-spin' />
                </div>
                <div className='space-y-4'>
                    <div className='w-full bg-bg-secondary rounded-full h-2'>
                        <div className='bg-accent-red h-2 rounded-full transition-all duration-300' style={{ width: `${progress}%` }} />
                    </div>
                    <p className='text-sm text-text-primary text-center'>{message}</p>
                    <p className='text-xs text-text-secondary text-center'>
                        Steg {currentStep} av {totalSteps}
                    </p>
                </div>
            </div>
        </div>
    );
}
