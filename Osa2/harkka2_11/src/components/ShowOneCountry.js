import React from 'react'

const ShowOneCountry = ({countries, newFilter }) => {
  console.log("ShowOneCountry newfilter on ", newFilter)
  return(
    <div >
      {countries.filter(country => country.name.common.toLowerCase().includes(newFilter) )
      .map(country => <div key={country.name.common} > <h2> {country.name.common} </h2> 
        <div> capital {country.capital } </div>
        {console.log(country.name.common)}
      {/*  <div> population {country.population} </div>   */}
       <h2> languages</h2> 
      { /* <ul> {country.languages.reduce( language=> <li key={language.id}> {language}</li>) }
       </ul> */}
       <img src={country.flags.png} width="100" height='80'></img>
      </div> )}

    </div> 
  )
}
    export default ShowOneCountry