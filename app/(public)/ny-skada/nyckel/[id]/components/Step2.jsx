export default function Step2() {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Personuppgifter</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-xs font-bold mb-1 text-text-primary'>Förnamn</label>
                    <input type='text' name='firstname' placeholder='John' className='w-full border border-border rounded px-3 py-2' />
                </div>
                <div>
                    <label className='block text-xs font-bold mb-1 text-text-primary'>Efternamn</label>
                    <input type='text' name='lastname' placeholder='Doe' className='w-full border border-border rounded px-3 py-2' />
                </div>
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>E-post</label>
                <input
                    type='email'
                    name='email'
                    placeholder='john.doe@example.com'
                    className='w-full border border-border rounded px-3 py-2'
                />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Telefon</label>
                <input type='tel' name='phone' placeholder='0701234567' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Person-/Organisationsnummer</label>
                <input type='text' name='personalnum' placeholder='000000-0000' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Momspliktig</label>
                <select className='w-full border border-border rounded px-3 py-2'>
                    <option value=''>Välj momspliktig</option>
                    <option value='Ja'>Ja</option>
                    <option value='Nej'>Nej</option>
                </select>
            </div>
        </div>
    );
}
