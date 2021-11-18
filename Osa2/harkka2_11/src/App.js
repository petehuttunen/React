import React, { useEffect, useState } from 'react'
import CountryFilter from './components/CountryFilter'
import CountryFilterForm from './components/CountryFilterForm'
import axios from 'axios'


const App = () => {

  const [countries, setCountries] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [weather, setWeather] = useState([])

  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {

    // https://restcountries.eu/rest/v2/all
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  useEffect(() => { 
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER}&query=${weather}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [newFilter])


  const handleCountryChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleOneCountry = (country) => {
    console.log("country on ",country)
    setNewFilter(country.name.common.toLowerCase())
    setWeather(country.capital[0])
  }

  const countriesToShow = showAll
    ? countries
    : countries.filter(country => country.name.toLowerCase().match(newFilter.toLowerCase()))

  return (
    <div>
      <div>
        <CountryFilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      </div>
      <CountryFilter countries={countriesToShow} newFilter={newFilter} handleCountryChange={handleCountryChange}
        handleOneCountry={handleOneCountry} weather={weather} />
    </div>
  )

}


export default App
