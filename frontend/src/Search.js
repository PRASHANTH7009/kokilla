import React, { useState } from 'react'

function Search() {

    const[s,setS] = useState() 
    const data = axios.get('/search')
    
  return (
    <div>
      <input type='text' onChange={(e) => setS(e.target.value)}></input>
    </div>
  )
}

export default Search
