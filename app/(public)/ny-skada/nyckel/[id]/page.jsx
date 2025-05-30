import { createClient } from '@/utils/supabase/client';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

export default async function NyckelPageId({ params }) {
    const { id } = await params;

    const supabase = createClient();

    const { data: company, error } = await supabase.from('companies').select('*').eq('id', id).single();

    async function handleSubmit(formData) {
        'use server';
    }

    if (error) {
        return (
            <div className='text-center space-y-4 max-w-md mx-auto'>
                <p className='text-accent-red border border-accent-red/10 bg-accent-red/10 p-4 rounded-lg'>
                    Ett fel uppstod: {error.message}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className='bg-bg-secondary border border-border rounded-xl p-4 mb-6'>
                <div className='text-xs text-gray-500 uppercase mb-1'>Vald verkstad</div>
                <div className='font-bold text-lg text-text-primary'>{company.name}</div>
                <div className='text-xs text-text-secondary mt-1'>{company.address}</div>
                <div className='text-xs text-text-secondary mt-1'>{company.city}</div>
                <div className='text-xs text-text-secondary mt-1'>
                    {company.zip_code && company.zip_code.replace(/(\d{3})(\d{2})/, '$1 $2')}
                </div>

                {company.phone && <div className='text-xs text-gray-400 mt-1'>Telefon: {company.phone}</div>}
                {company.email && <div className='text-xs text-gray-400 mt-1'>E-post: {company.email}</div>}
            </div>
            <h2 className='text-2xl font-bold text-text-primary mb-6'>Fyll i uppgifterna</h2>
            <form action={handleSubmit}>
                <input type='hidden' name='companyId' value={id} />
                <Step1 />
                <Step2 />
                <button
                    type='submit'
                    className='w-full bg-accent-red text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-accent-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow'>
                    Skicka anmälan
                </button>
            </form>
        </div>
    );
}
