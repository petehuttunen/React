import React from 'react'

const ShowOneCountry = ({countries, newFilter, handleCountryChange}) => {
  console.log("ShowOneCountry newfilter on ", newFilter)
return(
    <div >
      {countries
      .map(country => <div key={country.name.common} onChange={handleCountryChange}> <h2> {country.name.common} </h2> 
        <div> capital {country.capital } </div>
      { /* <div> population {country.population} </div>  */ }
       <h2> languages</h2> 
    {/*   <ul> {country.languages.map( language=> <li key={language.name}> {language.name}</li>) }
       </ul> */}
       <img src={country.flag} width="100" height='80'></img>
      </div> )}

    </div> 
    )
}
    export default ShowOneCountry