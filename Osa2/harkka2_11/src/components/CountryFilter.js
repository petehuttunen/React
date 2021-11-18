import React from 'react'
import axios from 'axios'
import ShowOneCountry from './ShowOneCountry'

  const CountryFilter = (props) => {

    const {countries, newFilter, handleCountryChange, handleOneCountry, weather} = props
    
    const maaLuku = countries.filter(country => country.name.common.toLowerCase().includes(newFilter)  ).length

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
          {countries.filter(country => country.name.common.toLowerCase().includes(newFilter) )
          .map(country => <div key={country.name.common} onChange={handleCountryChange}> {country.name.common}
           <button onClick={() => handleOneCountry(country) } > show 
          </button>
          
          </div> )} 
        </div>
      )
    }

    if(maaLuku === 1) {
      
     // const country = countries.filter(country => country.name.common.toLowerCase().includes(newFilter))
     // console.log("country muuttuja on",country)
     // handleOneCountry(country[0])
    /*  <ShowOneCountry countries = {countries} newFilter = {newFilter} />*/
  //  const languageObjects = country.languages
  //  const languages = Object.keys(languageObjects).map((key) =>languageObjects.key)
  //  const languages = Object.keys(languageObjects).map( (key) => languageObjects[key]) 
  // onChange={handleOneCountry}     
    return(
      <div>
        {countries.filter(country => country.name.common.toLowerCase().includes(newFilter) )
        .map(country => <div key={country.name.common} > <h2> {country.name.common} </h2> 
          <div> <b>Capital: </b> {country.capital } </div>
          
          
         <h2> Languages</h2> 

        {/*  <ul> {languages.map( language=> <li key={language.key}> {language}</li>) }
         </ul> */}
         <img src={country.flags.png} width="100" height='80'></img>

         <h2> Weather in {country.capital} </h2>
            <p><b>Temperature:</b>  {weather?.current?.temperature} C </p>
            <p><img src={weather?.current?.weather_icons} width="50" height='50'></img> </p>
            <p>{weather?.current?.weather_descriptions} </p>
        <p>Wind speed {weather?.current?.wind_speed}km/h wind direction {weather?.current?.wind_dir} </p>
        </div > )}

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