import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [username, setUsername] = useState('');

  function handleIdChange(event) {
    setId(event.target.value);
  }

  function handlePwChange(event) {
    setPw(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleSignup() {
    axios
      .post('http://localhost:3001/signup', {
        username,
        id,
        pw,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  return (
    <div>
      Signup Page
      <div>
        ID: <input value={id} onChange={handleIdChange} />
      </div>
      <div>
        PW: <input value={pw} onChange={handlePwChange} />
      </div>
      <div>
        Username: <input value={username} onChange={handleUsernameChange} />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default App;
