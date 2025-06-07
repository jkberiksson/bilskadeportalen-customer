'use client';

import SignatureCanvas from 'react-signature-canvas';
import { LuUser, LuKeySquare } from 'react-icons/lu';

export default function Step4({ register, errors, signatureRef, formData, signatureError, setSignatureError }) {
    const clearSignature = () => {
        if (signatureRef.current) {
            signatureRef.current.clear();
        }
    };

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Personal Information */}
                <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow'>
                    <div className='flex items-center gap-2 mb-4'>
                        <LuUser className='w-5 h-5 text-accent-red' />
                        <h4 className='font-bold text-text-primary'>Personuppgifter</h4>
                    </div>
                    <dl className='space-y-3'>
                        <div>
                            <dt className='text-sm text-text-secondary'>Registreringsnummer</dt>
                            <dd className='text-sm font-medium text-text-primary uppercase'>{formData.registrationnumber}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Förnamn</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.firstname}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Efternamn</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.lastname}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Telefon</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.phone}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>E-post</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.email}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Person-/Organisationsnummer</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.personalnum}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Momspliktig</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.vat}</dd>
                        </div>
                    </dl>
                </div>

                {/* Damage Information */}
                <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow'>
                    <div className='flex items-center gap-2 mb-4'>
                        <LuKeySquare className='w-5 h-5 text-accent-red' />
                        <h4 className='font-bold text-text-primary'>Skadeinformation</h4>
                    </div>
                    <dl className='space-y-3'>
                        <div>
                            <dt className='text-sm text-text-secondary'>Försäkringsbolag</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.insurancecompany}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Mätarställning</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.odometer} km</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Skadedatum</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.date}</dd>
                        </div>
                        <div>
                            <dt className='text-sm text-text-secondary'>Skadebeskrivning</dt>
                            <dd className='text-sm font-medium text-text-primary'>{formData.description}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
                <h3 className='text-lg font-bold text-text-primary'>Signatur</h3>
                <div>
                    <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringstagarens signatur</label>
                    {
                        <div className='border border-border rounded'>
                            <SignatureCanvas
                                onBegin={() => setSignatureError(false)}
                                clearOnResize={false}
                                ref={signatureRef}
                                canvasProps={{
                                    className: 'w-full h-48',
                                }}
                            />
                        </div>
                    }
                    {signatureError && <p className='text-sm text-red-600'>Signatur krävs</p>}
                    <button
                        type='button'
                        onClick={clearSignature}
                        className='mt-2 text-sm text-red-600 hover:text-red-800 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-md px-3 py-2 cursor-pointer'>
                        Rensa signatur
                    </button>
                </div>
                <div>
                    <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringstagarens namnförtydligande</label>
                    <input
                        type='text'
                        className='w-full border border-border rounded px-3 py-2'
                        {...register('signature')}
                        placeholder='Namnförtydligande'
                    />
                    {errors.signature && <p className='text-sm text-red-600'>{errors.signature.message}</p>}
                </div>
            </div>
            <div className='space-y-6 bg-accent-red/5 rounded-xl p-6 shadow my-6'>
                <h3 className='text-lg font-bold text-text-primary'>Bekräftelse</h3>
                <p className='text-sm text-text-primary'>
                    Genom att klicka på knappen "Skicka anmälan" intygas riktigheten av ovanstående uppgifter samt att försäkringen omfattar
                    nyckelskada och att premien var betald vid skadetillfället. Godtar försäkringsbolaget inte skadan som
                    försäkringsgrundande är fordonsägaren alltid betalningsskyldig.
                </p>
            </div>
        </>
    );
}
