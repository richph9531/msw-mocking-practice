import React from "react";
import { useRouter } from 'next/router';

export default function nameName(props) {
  const [country, setCountry] = React.useState([])
  const router = useRouter();  
  console.log(router)
  
  const currentUrl = 'http://localhost:3000/country/Andorra';
  const countryName = currentUrl.split('/').pop();  

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((retrievedCountries) => {
        setCountry(retrievedCountries)
      });
  }, [])

  return (
    <div>
      {country.map((country) => (
        <div key={country.name.common}>
          <img src={country.coatOfArms.svg} alt="coatOfArms" />
        </div>
      ))}
    </div>    
    )
}