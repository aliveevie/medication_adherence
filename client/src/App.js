import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>School Data</h2>
            <ul>
              {data.map(school => (
                <li key={school.school_id} className="school-item" >
                  <strong>School ID:</strong> {school.school_id}<br />
                  <strong>Tokens:</strong> {school.tokens}<br />
                  <strong>School Name:</strong> {school.school_name}<br />
                  <strong>Administrator:</strong> {school.administrator}<br />
                  <strong>Contact Name:</strong> {school.contact_name}<br />
                  <strong>Phone Number:</strong> {school.phone_number}<br />
                  <strong>Email Address:</strong> {school.email_address}<br />
                  <strong>School Address:</strong> {school.school_address}<br />
                  <strong>Password:</strong> {school.password}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  
  );

}

export default App;
