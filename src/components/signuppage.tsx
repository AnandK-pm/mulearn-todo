// SignupPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './signupform';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Create user account (store username and password)
    // For simplicity, just storing username and password in localStorage
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      // Redirect to login page
      navigate('/');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <SignupForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSignup={handleSignup}
      />
    </div>
  );
};

export default SignupPage;
