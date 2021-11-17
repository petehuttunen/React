import React, {useEffect, useState} from 'react'
import CountryFilter from './components/CountryFilter'
import CountryFilterForm from './components/CountryFilterForm'
import axios from 'axios'


const App = () => {
  
  useEffect( () => {
    
    // https://restcountries.eu/rest/v2/all
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  }, [] )

  const [ countries, setCountries] = useState([])
  const [showAll, setShowAll] = useState(true)

  const [newFilter, setNewFilter] = useState('')

  const handleCountryChange = (event) => {
    console.log("setcountries on ", event.target.value)
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const handleFilterChange = (event) => {
    console.log("filter change on ",event.target.value)
    setNewFilter(event.target.value)
  }

const countriesToShow = showAll
 ? countries
 : countries.filter(country => country.name.toLowerCase().match(newFilter.toLowerCase()))

  return (
    <div>
      <div>
        <CountryFilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange} />        
      </div>
      <CountryFilter countries = {countriesToShow} newFilter = {newFilter} handleCountryChange = {handleCountryChange}
       />
    </div>
  )

}


export default App