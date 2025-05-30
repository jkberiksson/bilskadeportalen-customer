'use client';

export default function SearchFilter({ search, setSearch }) {
    return (
        <input
            type='text'
            placeholder='Sök verkstad...'
            className='w-full p-2 border border-border rounded-xl mb-6'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}
