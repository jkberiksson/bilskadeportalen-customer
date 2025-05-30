import { createClient } from '@/utils/supabase/client';
import { z } from 'zod';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';

// Define the form schema
const formSchema = z.object({
    registrationnumber: z.string(),
    // Step 1 fields
    firstname: z.string().min(1, 'Förnamn krävs'),
    lastname: z.string().min(1, 'Efternamn krävs'),
    email: z.string().email('Ogiltig e-postadress'),
    phone: z.string().min(1, 'Telefonnummer krävs'),
    // Step 2 fields
    carBrand: z.string().min(1, 'Bilmärke krävs'),
    carModel: z.string().min(1, 'Bilmodell krävs'),
    registrationNumber: z.string().min(1, 'Registreringsnummer krävs'),
    // Step 3 fields
    damageType: z.string().min(1, 'Skadetyp krävs'),
    damageDescription: z.string().min(1, 'Beskrivning krävs'),
    // Step 4 fields
    insuranceCompany: z.string().min(1, 'Försäkringsbolag krävs'),
    policyNumber: z.string().min(1, 'Försäkringsnummer krävs'),
    // Step 5 fields
    signature: z.string().min(1, 'Namnförtydligande krävs'),
    signatureData: z.string().min(1, 'Signatur krävs'),
    // Step 6 fields
    terms: z.boolean().refine((val) => val === true, {
        message: 'Du måste godkänna villkoren',
    }),
});

export default async function GlasPageId({ params }) {
    const { id } = await params;

    const supabase = createClient();

    const { data: company, error } = await supabase.from('companies').select('*').eq('id', id).single();

    async function handleSubmit(formData) {
        'use server';

        try {
            const validatedData = formSchema.parse({
                registrationnumber: formData.get('registrationnumber'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                carBrand: formData.get('carBrand'),
                carModel: formData.get('carModel'),
                registrationNumber: formData.get('registrationNumber'),
                damageType: formData.get('damageType'),
                damageDescription: formData.get('damageDescription'),
                insuranceCompany: formData.get('insuranceCompany'),
                policyNumber: formData.get('policyNumber'),
                signature: formData.get('signature'),
                signatureData: formData.get('signatureData'),
                terms: formData.get('terms') === 'on',
            });

            // If validation passes, proceed with form submission
            console.log('Validated data:', validatedData);

            // Here you can add your database insertion logic
            // const { error } = await supabase.from('claims').insert(validatedData);

            return { success: true };
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Return validation errors
                return {
                    success: false,
                    errors: error.errors.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message,
                    })),
                };
            }
            throw error;
        }
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
                <Step3 />
                <Step4 />
                <Step5 />
                <Step6 />
                <button
                    type='submit'
                    className='w-full bg-accent-red text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-accent-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow'>
                    Skicka anmälan
                </button>
            </form>
        </div>
    );
}
