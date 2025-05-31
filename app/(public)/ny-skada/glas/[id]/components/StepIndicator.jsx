import { LuCheck, LuX, LuSignature, LuCamera, LuUser, LuInfo } from 'react-icons/lu';

export default function StepIndicator({ currentStep }) {
    const steps = [
        { number: 1, label: 'Personuppg.', icon: LuUser },
        { number: 2, label: 'Skadeuppg.', icon: LuInfo },
        { number: 3, label: 'Bilder', icon: LuCamera },
        { number: 4, label: 'Signatur', icon: LuSignature },
    ];

    return (
        <div className='flex items-center justify-between mb-6'>
            {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                    <div key={step.number} className='flex-1 flex flex-col items-center'>
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                                isActive
                                    ? 'border-accent-red bg-accent-red text-white'
                                    : isCompleted
                                    ? 'border-accent-red/50 bg-accent-red/10 text-accent-red'
                                    : 'border-border bg-bg-primary text-text-secondary'
                            }`}>
                            <Icon className='h-4 w-4' />
                        </div>
                        <div className='ml-2'>
                            <p
                                className={`text-xs font-medium ${
                                    isActive ? 'text-accent-red' : isCompleted ? 'text-accent-red/70' : 'text-text-secondary'
                                }`}>
                                {step.label}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
