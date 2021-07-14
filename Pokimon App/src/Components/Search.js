import React from 'react';
import '../index.css'
const Search = ({onchange})=>{
    return(
    <div className='Search'>
       <input type='search' onChange={onchange} placeholder='Search Pokimon'/>
   </div>
   );
}
export default Search