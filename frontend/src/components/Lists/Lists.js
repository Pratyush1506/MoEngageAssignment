import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lists = () => {
  const userId = localStorage.getItem('userId');
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/lists/${userId}`);
        setUserLists(response.data);
      } catch (error) {
        console.error('Error fetching lists', error);
      }
    };

    if (userId) {
      fetchLists();
    }
  }, [userId]);

  return (
    <div>
      <h1>Your Lists</h1>
      {userLists.length === 0 ? (
        <p>No lists found.</p>
      ) : (
        <ul>
          {userLists.map((list) => (
            <li key={list.id}>
              <p>List ID: {list.id}</p>
              <p>Codes: {list.codes}</p>
              {/* Add more details or actions as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lists;
