import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medical Adherence App</h1>
        <h3>We are working on it, please stay tuned!</h3>
        <h3>Group Members:</h3>
        <ul>
          {data.map((member) => (
            <li key={member.personid}>
              <strong>{member.fullname}</strong>
              <p>Email: {member.emailaddress}</p>
              <p>Phone Number: {member.phonenumber}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
