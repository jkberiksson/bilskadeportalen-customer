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
                    className='w-full border border-border rounded px-3 py-2'
                />
                {errors.insurancecompany && <p className='text-xs text-red-500 mt-1'>{errors.insurancecompany.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Mätarställning (km)</label>
                <input {...register('odometer')} type='text' name='odometer' className='w-full border border-border rounded px-3 py-2' />
                {errors.odometer && <p className='text-xs text-red-500 mt-1'>{errors.odometer.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadedatum</label>
                <input {...register('date')} type='date' name='date' className='w-full border border-border rounded px-3 py-2' />
                {errors.date && <p className='text-xs text-red-500 mt-1'>{errors.date.message}</p>}
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadebeskrivning</label>
                <textarea
                    {...register('description')}
                    name='description'
                    className='w-full h-24 border border-border rounded px-3 py-2'></textarea>
                {errors.description && <p className='text-xs text-red-500 mt-1'>{errors.description.message}</p>}
            </div>
        </div>
    );
}
