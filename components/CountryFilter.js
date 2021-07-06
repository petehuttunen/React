import React from 'react'
import axios from 'axios'
import ShowOneCountry from './ShowOneCountry'

  const CountryFilter = ({countries, newFilter, handleCountryChange, handleShowCountry}) => {
    const maaLuku = countries.filter(country => country.name.toLowerCase().includes(newFilter) || newFilter === '' ).length

    if(maaLuku > 10){
      return(
        <p>
          Too many matches, specify another filter
        </p>
      )
    }

    if(maaLuku < 10 && maaLuku > 1){
      return(
        <div>
          {countries.filter(country => country.name.toLowerCase().includes(newFilter) || newFilter === '')
          .map(country => <div key={country.name} onChange={handleCountryChange}> {country.name} 
          <button onClick={() => handleShowCountry(country.name)}> show 
          </button>
          </div> )} 
        </div>
      )
    }

    if(maaLuku === 1) {
    return(
      <div >
        {countries.filter(country => country.name.toLowerCase().includes(newFilter) || newFilter === '')
        .map(country => <div key={country.name} onChange={handleCountryChange}> <h2> {country.name} </h2> 
          <div> capital {country.capital } </div>
          <div> population {country.population} </div> 
         <h2> languages</h2> 
         <ul> {country.languages.map( language=> <li key={language.name}> {language.name}</li>) }
         </ul>
         <img src={country.flag} width="100" height='80'></img>
        </div> )}

      </div> 
    )
  }

  return(
    <div>
      Something went wrong
    </div>
  )
    
  }

  export default CountryFilter