import React from 'react';

function SearchBar({onSearch}){
    const handleChange = (event) =>{
        onSearch(event.target.value);
    };

    return (
        <input type="text" placeholder='search by name...' onChange={handleChange}/>
    )
}


export default SearchBar;