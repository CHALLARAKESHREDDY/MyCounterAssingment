import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignupPage() {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement signup logic here (e.g., store user data)
    // For simplicity, we're storing the data in local storage
    if (signupUsername && signupPassword) {
      localStorage.setItem('username', signupUsername);
      localStorage.setItem('password', signupPassword);
      alert('Signup successful! You can now log in.');
      navigate('/login');
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={signupUsername}
        onChange={(e) => setSignupUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupPage;
