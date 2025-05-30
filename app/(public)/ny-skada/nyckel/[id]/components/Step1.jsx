export default function Step1() {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow'>
            <h3 className='text-lg font-bold text-text-primary'>Registreringsnummer</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Registreringsnummer</label>
                <input
                    type='text'
                    name='registrationnumber'
                    maxLength={6}
                    placeholder='ABC123'
                    className='w-full border border-border rounded px-3 py-2'
                />
            </div>
        </div>
    );
}
