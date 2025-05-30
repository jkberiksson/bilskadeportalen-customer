'use client';

import { useEffect, useState } from 'react';
import List from '../components/List.jsx';
import SearchFilter from '../components/SearchFilter.jsx';
import { createClient } from '@/utils/supabase/client.js';
import LoadingSpinner from '@/app/(public)/components/LoadingSpinner.jsx';

export default function GlasPage() {
    const [search, setSearch] = useState('');
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            setError(null);

            try {
                const supabase = createClient();

                const { data: companies, error: companiesError } = await supabase
                    .from('companies')
                    .select('*')
                    .contains('services', ['glas']);

                if (companiesError || companies.length === 0) {
                    throw new Error(companiesError?.message || 'Inga verkstäder hittades');
                }

                setCompanies(companies);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies();
    }, []);

    if (error)
        return (
            <div className='text-center space-y-4 max-w-md mx-auto'>
                <p className='text-accent-red border border-accent-red/10 bg-accent-red/10 p-4 rounded-lg'>Ett fel uppstod: {error}</p>
            </div>
        );

    return (
        <div>
            <h1 className='text-2xl md:text-3xl font-black tracking-tight text-text-primary mb-6 uppercase text-center'>
                Välj verkstad för din glasskada
            </h1>
            <SearchFilter search={search} setSearch={setSearch} />
            {loading ? <LoadingSpinner /> : <List companies={companies} search={search} type='glas' />}
        </div>
    );
}
