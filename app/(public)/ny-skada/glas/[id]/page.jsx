'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client.js';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../lib/validationSchema.js';
import LoadingSpinner from '@/app/(public)/components/LoadingSpinner';
import StepIndicator from './components/StepIndicator';
import ProgressIndicator from '../../components/ProgressIndicator.jsx';
import ChoosenCompany from '../../components/ChoosenCompany.jsx';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Buttons from './components/Buttons';
import IsSuccess from '../../components/IsSuccess.jsx';

export default function GlasPageId() {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [companyLoading, setCompanyLoading] = useState(true);
    const [companyError, setCompanyError] = useState(null);
    const supabase = createClient();
    const [currentStep, setCurrentStep] = useState(1);
    const signatureRef = useRef(null);
    const [images, setImages] = useState([]);
    const [signatureError, setSignatureError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitProgress, setSubmitProgress] = useState({ current: 0, total: 6, message: '' });
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

    useEffect(() => {
        setValue('images', images);
    }, [images, setValue]);

    const formData = watch();

    const nextStep = async (e) => {
        e.preventDefault();
        const fieldsToValidate = {
            1: ['registrationnumber', 'firstname', 'lastname', 'email', 'phone', 'personalnum', 'vat'],
            2: ['insurancecompany', 'odometer', 'date', 'location', 'damagetype', 'damagecause', 'damagedwindow', 'description'],
            3: ['images'],
            4: ['signature'],
        };

        const isValid = await trigger(fieldsToValidate[currentStep]);

        isValid && window.scrollTo(0, 0);

        if (isValid || currentStep === 4) {
            setCurrentStep((prev) => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        window.scrollTo(0, 0);
        if (currentStep === 4) {
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

            // Upload images
            for (let i = 0; i < images.length; i++) {
                updateProgress(2 + i, `Förbereder bild ${i + 1} av ${images.length}...`);
                const { id, file } = images[i];
                const fileExt = file.name.split('.').pop();
                const fileName = `${claimId}/${id}-${Math.random()}.${fileExt}`;
                const { error: uploadError } = await supabase.storage.from('damage-images').upload(fileName, file);
                if (uploadError) throw new Error(uploadError.message || 'Ett fel uppstod när bilderna laddades upp.');
            }

            // Insert data into database
            updateProgress(6, 'Skickar anmälan...');
            const { error: insertError } = await supabase.from('glas_claims').insert({
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
                location: data.location,
                damagetype: data.damagetype,
                damagecause: data.damagecause,
                damagedwindow: data.damagedwindow,
                description: data.description,
                signature: data.signature,
            });
            if (insertError) throw new Error(insertError.message);

            setIsSubmitting(false);
            setIsSuccess(true);
            setCurrentStep(1);
            setImages([]);
            signatureRef.current.clear();
            setSignatureError(false);
            setSubmitProgress({ current: 0, total: 6, message: '' });
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
                {currentStep === 3 && <Step3 errors={errors} images={images} setImages={setImages} />}
                {currentStep === 4 && (
                    <Step4
                        register={register}
                        errors={errors}
                        signatureRef={signatureRef}
                        formData={formData}
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
