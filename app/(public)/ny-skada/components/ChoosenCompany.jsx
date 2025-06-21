export default function ChoosenCompany({ company }) {
    return (
        <div className='bg-bg-secondary border border-border rounded-xl p-4 mb-6'>
            <div className='text-xs text-gray-500 uppercase mb-1'>Vald verkstad</div>
            <div className='font-bold text-lg text-text-primary'>{company.name}</div>
            <div className='text-xs text-text-secondary mt-1'>{company.address}</div>
            <div className='text-xs text-text-secondary mt-1'>{company.city}</div>
            <div className='text-xs text-text-secondary mt-1'>
                {company.zip_code && company.zip_code.replace(/(\d{3})(\d{2})/, '$1 $2')}
            </div>
            {company.phone && <div className='text-xs text-gray-400 mt-1'>Telefon: {company.phone}</div>}
        </div>
    );
}
