import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './User';

export const UserDataContext = createContext();

function Body() {

  const [data,setData] = useState()

  async function fetchUserData(username) {
    const result = await axios.get(`/body/${username}`);
    console.log('Fetched data:', result.data); // Log fetched data
    setTimeout(() => {
      <UserDataContext.Provider value={data}>
        <User/>
      </UserDataContext.Provider>
    }, 3000);
  }

  
  return (
    <div>
      <div>
        <Link to="/" onClick={() => fetchUserData('Sharukh')}>
          Shahrukh
        </Link>
        <Link to="/user" onClick={() => fetchUserData('Salman')}>
          Salman
        </Link>
      </div>
    </div>
  );
}

export default Body;
