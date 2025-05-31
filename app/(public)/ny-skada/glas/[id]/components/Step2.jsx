export default function Step2({ register, errors }) {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Skadeuppgifter</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringsbolag</label>
                <input
                    {...register('insurancecompany')}
                    type='text'
                    name='insurancecompany'
                    placeholder='Folksam'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.insurancecompany && <p className='text-xs text-red-500 mt-1'>{errors.insurancecompany.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Mätarställning (km)</label>
                <input
                    {...register('odometer')}
                    type='text'
                    name='odometer'
                    placeholder='1234'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.odometer && <p className='text-xs text-red-500 mt-1'>{errors.odometer.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadedatum</label>
                <input
                    {...register('date')}
                    type='date'
                    name='date'
                    placeholder='2025-01-01'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.date && <p className='text-xs text-red-500 mt-1'>{errors.date.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadeplats</label>
                <input
                    {...register('location')}
                    type='text'
                    name='location'
                    placeholder='E22 Kalmar'
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.location && <p className='text-xs text-red-500 mt-1'>{errors.location.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skademoment</label>
                <select {...register('damagetype')} className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skademoment</option>
                    <option value='Glas'>Glas</option>
                    <option value='Stöld'>Stöld</option>
                    <option value='Vagnskada'>Vagnskada</option>
                </select>
                {errors.damagetype && <p className='text-xs text-red-500 mt-1'>{errors.damagetype.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadeorsak</label>
                <select {...register('damagecause')} className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skadeorsak</option>
                    <option value='Stenskott'>Stenskott</option>
                    <option value='Inbrott'>Inbrott</option>
                    <option value='Kollision'>Kollision</option>
                </select>
                {errors.damagecause && <p className='text-xs text-red-500 mt-1'>{errors.damagecause.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadad ruta</label>
                <select {...register('damagedwindow')} className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skademoment</option>
                    <option value='Vindruta'>Vindruta</option>
                    <option value='Bakruta'>Bakruta</option>
                    <option value='Sidoruta'>Sidoruta</option>
                    <option value='Taklucka'>Taklucka</option>
                </select>
                {errors.damagedwindow && <p className='text-xs text-red-500 mt-1'>{errors.damagedwindow.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadebeskrivning</label>
                <textarea
                    {...register('description')}
                    name='description'
                    placeholder='Beskriv skadan...'
                    className='w-full h-24 border border-border rounded px-3 py-2'></textarea>
                {errors.description && <p className='text-xs text-red-500 mt-1'>{errors.description.message}</p>}
            </div>
        </div>
    );
}
