'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client.js';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../lib/validationSchema.js';
import { v4 as uuidv4 } from 'uuid';

import LoadingSpinner from '@/app/(public)/components/LoadingSpinner';
import ProgressIndicator from '../../components/ProgressIndicator.jsx';
import StepIndicator from './components/StepIndicator';
import ChoosenCompany from '../../components/ChoosenCompany.jsx';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Buttons from './components/Buttons';
import IsSuccess from '../../components/IsSuccess.jsx';

export default function NyckelPageId() {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [companyLoading, setCompanyLoading] = useState(true);
    const [companyError, setCompanyError] = useState(null);
    const supabase = createClient();
    const [currentStep, setCurrentStep] = useState(1);
    const signatureRef = useRef(null);
    const [signatureError, setSignatureError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitProgress, setSubmitProgress] = useState({ current: 0, total: 2, message: '' });
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        setValue,
        watch,
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    useEffect(() => {
        const fetchCompany = async () => {
            setCompanyLoading(true);
            setCompanyError(null);
            try {
                const { data, error } = await supabase.from('companies').select('*').eq('id', id).single();
                if (error) throw new Error(error.message);
                setCompany(data);
            } catch (error) {
                setCompanyError(error.message);
            } finally {
                setCompanyLoading(false);
            }
        };
        fetchCompany();
    }, []);

    const formData = watch();

    const nextStep = async (e) => {
        e.preventDefault();
        const fieldsToValidate = {
            1: ['registrationnumber', 'firstname', 'lastname', 'email', 'phone', 'personalnum', 'vat'],
            2: ['insurancecompany', 'odometer', 'date', 'description'],
            3: ['signature'],
        };

        const isValid = await trigger(fieldsToValidate[currentStep]);

        isValid && window.scrollTo(0, 0);

        if (isValid || currentStep === 3) {
            setCurrentStep((prev) => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        window.scrollTo(0, 0);
        if (currentStep === 3) {
            setValue('signature', '');
            if (signatureRef.current) {
                signatureRef.current.clear();
            }
        }
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const updateProgress = (step, message) => {
        setSubmitProgress((prev) => ({ ...prev, current: step, message }));
    };

    function dataURLtoBlob(dataurl) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    const onSubmit = async (data) => {
        setSignatureError(false);

        if (!signatureRef.current || signatureRef.current.isEmpty()) {
            signatureRef.current.clear();
            setSignatureError(true);
            return;
        }

        setIsSubmitting(true);
        const claimId = uuidv4();

        try {
            // Upload signature
            updateProgress(1, 'Förbereder signatur...');
            const signatureData = signatureRef.current.toDataURL();
            const signatureBlob = dataURLtoBlob(signatureData);
            const signatureFileName = `${claimId}/signature.png`;
            const { error: signatureError } = await supabase.storage.from('signatures').upload(signatureFileName, signatureBlob);
            if (signatureError) throw new Error(signatureError.message);

            // Insert data into database
            updateProgress(2, 'Skickar anmälan...');
            const { error: insertError } = await supabase.from('key_claims').insert({
                id: claimId,
                companyid: id,
                registrationnumber: data.registrationnumber,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
                personalnum: data.personalnum,
                vat: data.vat,
                insurancecompany: data.insurancecompany,
                odometer: data.odometer,
                date: data.date,
                description: data.description,
                signature: data.signature,
            });
            if (insertError) throw new Error(insertError.message);

            setIsSubmitting(false);
            setIsSuccess(true);
            setCurrentStep(1);
            signatureRef.current.clear();
            setSignatureError(false);
            setSubmitProgress({ current: 0, total: 2, message: '' });
            reset();
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitting(false);
        }
    };

    if (companyLoading) {
        return <LoadingSpinner />;
    }

    if (companyError) {
        return (
            <div className='text-center space-y-4 max-w-md mx-auto'>
                <p className='text-accent-red border border-accent-red/10 bg-accent-red/10 p-4 rounded-lg'>
                    Ett fel uppstod: {companyError}
                </p>
            </div>
        );
    }

    return isSuccess ? (
        <IsSuccess />
    ) : (
        <>
            <ChoosenCompany company={company} />
            <StepIndicator currentStep={currentStep} />
            <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 1 && <Step1 register={register} errors={errors} />}
                {currentStep === 2 && <Step2 register={register} errors={errors} />}
                {currentStep === 3 && (
                    <Step3
                        register={register}
                        errors={errors}
                        formData={formData}
                        signatureRef={signatureRef}
                        signatureError={signatureError}
                        setSignatureError={setSignatureError}
                    />
                )}
                <Buttons isSubmitting={isSubmitting} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            </form>
            {isSubmitting && (
                <ProgressIndicator
                    currentStep={submitProgress.current}
                    totalSteps={submitProgress.total}
                    message={submitProgress.message}
                />
            )}
        </>
    );
}
