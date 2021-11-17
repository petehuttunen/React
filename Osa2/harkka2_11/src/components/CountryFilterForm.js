import React from 'react'

const CountryFilterForm = ( {newFilter, handleFilterChange}, {handleOneCountry} ) => {
    return(
        <div>
            find countries <input value = {newFilter} onChange = {handleFilterChange} />
        </div>
    )
}

export default CountryFilterForm