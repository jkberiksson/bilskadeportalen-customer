'use client';

import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function Step5() {
    const signatureRef = useRef(null);
    const [signatureData, setSignatureData] = useState(null);

    const handleSignatureEnd = () => {
        if (signatureRef.current) {
            const data = signatureRef.current.toDataURL();
            setSignatureData(data);
        }
    };

    const clearSignature = () => {
        if (signatureRef.current) {
            signatureRef.current.clear();
            setSignatureData(null);
        }
    };

    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Signatur</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringstagarens signatur</label>
                <div className='border border-border rounded'>
                    <SignatureCanvas
                        ref={signatureRef}
                        canvasProps={{
                            className: 'w-full h-48',
                        }}
                        onEnd={handleSignatureEnd}
                    />
                </div>
                <button type='button' onClick={clearSignature} className='mt-2 text-sm text-red-600 hover:text-red-800'>
                    Rensa signatur
                </button>
                <input type='hidden' name='signatureData' value={signatureData || ''} />
            </div>

            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringstagarens namnförtydligande</label>
                <input type='text' name='signature' className='w-full border border-border rounded px-3 py-2' />
            </div>
        </div>
    );
}
