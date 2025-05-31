export default function Step1({ register, errors }) {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Personuppgifter</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Registreringsnummer</label>
                <input
                    type='text'
                    name='registrationnumber'
                    {...register('registrationnumber')}
                    maxLength={6}
                    placeholder='ABC123'
                    className='w-full border border-border rounded px-3 py-2 uppercase'
                />
                {errors.registrationnumber && <p className='text-xs text-red-500 mt-1'>{errors.registrationnumber.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Förnamn</label>
                <input
                    {...register('firstname')}
                    type='text'
                    name='firstname'
                    placeholder='John'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.firstname && <p className='text-xs text-red-500 mt-1'>{errors.firstname.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Efternamn</label>
                <input
                    {...register('lastname')}
                    type='text'
                    name='lastname'
                    placeholder='Doe'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.lastname && <p className='text-xs text-red-500 mt-1'>{errors.lastname.message}</p>}
            </div>

            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>E-post</label>
                <input
                    {...register('email')}
                    type='email'
                    name='email'
                    placeholder='john.doe@example.com'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Telefon</label>
                <input
                    {...register('phone')}
                    type='tel'
                    name='phone'
                    placeholder='0701234567'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.phone && <p className='text-xs text-red-500 mt-1'>{errors.phone.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Person-/Organisationsnummer</label>
                <input
                    {...register('personalnum')}
                    type='text'
                    name='personalnum'
                    placeholder='YYMMDD-XXXX'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.personalnum && <p className='text-xs text-red-500 mt-1'>{errors.personalnum.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Momspliktig</label>
                <select {...register('vat')} className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj momspliktig</option>
                    <option value='Ja'>Ja</option>
                    <option value='Nej'>Nej</option>
                </select>
                {errors.vat && <p className='text-xs text-red-500 mt-1'>{errors.vat.message}</p>}
            </div>
        </div>
    );
}
