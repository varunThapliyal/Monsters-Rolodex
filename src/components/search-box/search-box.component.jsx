import React from 'react';
import './search-box.style.css';



export const SearchInput=({placeholder,handleSearch}) =>(

         <input className='search'
                type="search"
                placeholder={placeholder}
                onChange={handleSearch}
         />

)