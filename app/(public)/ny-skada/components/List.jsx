'use client';

import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

export default function List({ companies, search, type }) {
    const filteredCompanies = companies.filter(
        (company) =>
            company.name.toLowerCase().includes(search.toLowerCase()) ||
            company.address.toLowerCase().includes(search.toLowerCase()) ||
            company.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredCompanies.map((company) => (
                <Link
                    key={company.id}
                    href={`/ny-skada/${type}/${company.id}`}
                    className='group p-6 bg-bg-secondary border border-border rounded-xl shadow hover:border-accent-red/40 transition-colors flex items-center gap-4'>
                    <div className='flex-1'>
                        <div className='font-bold text-lg text-text-primary group-hover:text-accent-red transition-colors'>
                            {company.name}
                        </div>
                        <div className='text-xs text-text-secondary mt-1'>{company.address}</div>
                        <div className='text-xs text-text-secondary mt-1'>
                            {company.zip_code && company.zip_code.replace(/(\d{3})(\d{2})/, '$1 $2')}
                        </div>
                        <div className='text-xs text-text-secondary mt-1'>{company.city}</div>

                        {company.phone && <div className='text-xs text-gray-400 mt-1'>Telefon: {company.phone}</div>}
                    </div>
                    <LuArrowRight className='text-accent-red text-xl group-hover:translate-x-1 transition-transform' />
                </Link>
            ))}
            {filteredCompanies.length === 0 && (
                <div className='col-span-full text-center text-text-secondary'>
                    <p>Inga verkstäder hittades</p>
                </div>
            )}
        </div>
    );
}
