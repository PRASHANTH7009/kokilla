import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './User.css';

function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [text, setText] = useState('');
  const [textDeque, setTextDeque] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`/user/${userId}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  function handleclick() {
    setTextDeque([...textDeque.slice(-9), text]); // Maintain a deque of size 10
  }

  return (
    <div>
      <div className='user'>
        <div className='left'>
          {userData ? (
            <div className='left'>
              <h1>{userData.user}</h1>
              <p>{userData.about}</p>
            </div>
          ) : (
            <p>No user selected</p>
          )}
        </div>
        <div className='right'>
          <button className='follow'>Follow</button>
        </div>
      </div>
      <div className='uploadtext'>
        <input type='text' onChange={(e) => setText(e.target.value)} />
        <button onClick={handleclick}>send</button>
        {textDeque.map((x, index) => (
          <div key={index}>{x}</div>
        ))}
      </div>
      <div className='text'></div>
    </div>
  );
}

export default User;
