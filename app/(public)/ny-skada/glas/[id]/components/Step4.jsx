export default function Step4() {
    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <h3 className='text-lg font-bold text-text-primary'>Bilder</h3>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Bild på hela bilen ink. regskylt</label>
                <input type='file' name='image1' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Bild på mätarställning</label>
                <input type='file' name='image2' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Bild på skada</label>
                <input type='file' name='image3' className='w-full border border-border rounded px-3 py-2' />
            </div>
            <div>
                <label className='block text-xs font-bold mb-1 text-text-primary'>Bild på skada</label>
                <input type='file' name='image4' className='w-full border border-border rounded px-3 py-2' />
            </div>
        </div>
    );
}
