import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all', { cache: 'no-store' });
  const countries = await res.json();
  const sortedCountries = countries.sort((a: { name: { common: string; }; }, b: { name: { common: string; }; }) => a.name.common.localeCompare(b.name.common));

  return (
    <div>
      <h1>Country List - Generated at: {new Date().toLocaleString()} </h1>
      <br></br>
      <div>
        {sortedCountries.map((country: { name: { common: string }; }) => (
          <div key={country.name.common}>
            <Link href={`/countries/${country.name.common}`}>{country.name.common}</Link>
          </div>
        ))}
      </div>    
    </div>
    )
}

export default UsersPage