import React from 'react'
import axios from 'axios'
import ShowOneCountry from './ShowOneCountry'

/*  const CountryFilter = (props) => {
    const {countries, newFilter, handeShowCountry, handleShowCountry} = props
    console.log("maat", props)
    return (
      <div>
        testi
      </div>
    )
  } */

/*  const CountryFilter = ({countries, newFilter, handleCountryChange, handleShowCountry}) => {

    return (
      <div>
        {countries.map( country => country.name.common)}
      </div>
    )
  } */

  const CountryFilter = (props) => {

    const {countries, newFilter, handleCountryChange, handleOneCountry} = props

    console.log("newfilter menee ", props)
    const maaLuku = countries.filter(country => country.name.common.toLowerCase().includes(newFilter)  ).length
   // const maat = countries.map(country => country.languages)
   // console.log(maat)
   console.log("Maaluku on ",maaLuku)
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
          {console.log("maaluku 10 ja 1 ",country.name.common)}
           <button onClick={() => handleOneCountry(country)}> show 
        {/*  <button onClick={() => ShowOneCountry(countries, newFilter, handleCountryChange)}> show */}
          </button>
          
          </div> )} 
        </div>
      )
    }

    if(maaLuku === 1) {
      
    return(
      <div >
        {countries
        .map(country => <div key={country.name.common} > <h2> {country.name.common} </h2> 
          <div> capital {country.capital } </div>
          {console.log(country.name.common)}
        {/*  <div> population {country.population} </div>   */}
         <h2> languages</h2> 
        {  <ul> {country.languages.map( language=> <li key={language.id}> {language}</li>) }
         </ul> }
         <img src={country.flags.png} width="100" height='80'></img>
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