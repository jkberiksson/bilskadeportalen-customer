export default function Step3() {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Skadeuppgifter</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Försäkringsbolag</label>
                <input
                    type='text'
                    name='insurancecompany'
                    placeholder='Folksam'
                    className='w-full border border-border rounded px-3 py-2'
                />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Mätarställning (km)</label>
                <input type='text' name='odometer' placeholder='1234' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadedatum</label>
                <input type='date' name='date' placeholder='2025-01-01' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadeplats</label>
                <input type='text' name='location' placeholder='E22 Kalmar' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skademoment</label>
                <select className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skademoment</option>
                    <option value='glas'>Glas</option>
                    <option value='stöld'>Stöld</option>
                    <option value='vagnskada'>Vagnskada</option>
                </select>
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadeorsak</label>
                <select className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skadeorsak</option>
                    <option value='stenskott'>Stenskott</option>
                    <option value='inbrott'>Inbrott</option>
                    <option value='kollision'>Kollision</option>
                </select>
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadad ruta</label>
                <select className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj skademoment</option>
                    <option value='vindruta'>Vindruta</option>
                    <option value='bakruta'>Bakruta</option>
                    <option value='sidoruta'>Sidoruta</option>
                    <option value='taklucka'>Taklucka</option>
                </select>
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Skadebeskrivning</label>
                <textarea
                    name='description'
                    placeholder='Beskriv skadan...'
                    className='w-full h-24 border border-border rounded px-3 py-2'></textarea>
            </div>
        </div>
    );
}
