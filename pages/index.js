import React from "react";
import styles from '@/styles/Countries.module.css'
import Link from 'next/link'

export default function Home(props) {
  const sortedCountries = props.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div>
      {sortedCountries.map((country) => (
        <div key={country.name.common}>
          <Link href={`/country/${country.name.common}`} className={styles.countryInfo}>{country.name.common}</Link>
        </div>
      ))}
      </div>    
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const retrievedCountries = await response.json();
  return {
    props: {
      countries: retrievedCountries
    }
  };
} 