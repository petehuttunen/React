import React, {useEffect, useState} from 'react'
import CountryFilter from './components/CountryFilter'
import CountryFilterForm from './components/CountryFilterForm'
import axios from 'axios'


const App = () => {
  
  useEffect( () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [] )

  const [ countries, setCountries] = useState([])
  const [showAll, setShowAll] = useState(true)

  const [newFilter, setNewFilter] = useState('')

  const handleCountryChange = (event) => {
    setCountries(event.target.value)
    console.log(countries.length)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(countries.length)
  }

const countriesToShow = showAll
 ? countries
 : countries.filter(country => country.name.toLowerCase().match(newFilter.toLowerCase()))

  return (
    <div>
      <div>
        <CountryFilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange} />        
      </div>
      <CountryFilter countries = {countriesToShow} newFilter = {newFilter} handleCountryChange = {handleCountryChange} />
    </div>
  )

}


export default App