import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Address:</strong> {userData.address.street}, {userData.address.city}, {userData.address.zipcode}</p>
      <p><strong>Phone Number:</strong>{userData.phone.number}</p>
    </div>
  );
}

export default Profile;
