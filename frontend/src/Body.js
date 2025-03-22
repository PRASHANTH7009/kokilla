import React from 'react';
import './Body.css'
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();

  function handleClick(username) {
    if (username) {
      navigate(`/user/${username}`);
    }
  }
  

  return (
    <div className='Button'>
      <button onClick={() => handleClick('Sharukh')}>Sharukh</button>
      <button onClick={() => handleClick('Salman')}>Salman</button>
      <button onClick={() => handleClick('Ranbir Kapoor')}>Ranbir Kapoor</button>
      <button onClick={() => handleClick('Allu Arjun')}>Allu Arjun</button>
      <button onClick={() => handleClick('Ram Charan')}>Ram Charan</button>
      {/* Add buttons for other users dynamically based on your data */}
    </div>
  );
}

export default Body;