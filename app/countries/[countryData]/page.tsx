/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';


export default function CountryData() {
  const pathname = usePathname()
  const countryName = pathname.replace('/countries/','')
  const [country, setCountry] = React.useState([])

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((retrievedCountries) => {setCountry(retrievedCountries)});
  }, [])


  return (
    <div className={styles.Page}>
      <Link className={styles.Text} href={`/countries`}>Back to country List</Link>
    <div>
      {country.map((country) => (
        <div key={country.name.common}>
          <h1 className={styles.Text}>{country.name.common}</h1>
          <div className={styles.Text}>{`Official name: ${country.name.official}`}</div>
          <div className={styles.Text}>{`Capital cities: ${country.capital.join(', ')}`}</div>
          <div className={styles.Text}>{`Continent: ${country.region}`}</div>
          <div className={styles.Text}>{`Landlocked: ${country.landlocked ? 'Yes' : 'No'}`}</div>
          <div className={styles.Text}>{`Population: ${country.population.toLocaleString()}`}</div>
          <div className={styles.Text}>Flag:</div>
          <img className={styles.Flag} src={country.flags.svg} alt='coatOfArms' />
          <div className={styles.Text}>Coat of Arms:</div>
          <img className={styles.CoatOfArms} src={country.coatOfArms.svg} alt='coatOfArms' />
        </div>
      ))}
    </div>
    </div>  
  )
}