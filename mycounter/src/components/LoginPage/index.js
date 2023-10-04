import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve user credentials from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    

    // Check if the entered credentials match the stored credentials
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      Cookie.set('jwt_token', "Rakesh", {
        expires: 30,
      })
      navigate('/home');
      
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;

