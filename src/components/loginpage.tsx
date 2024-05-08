// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './loginform';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Authenticate user (validate username and password)
    // For simplicity, just checking if username and password are not empty
    if (username && password) {
      // Store user information in localStorage (for demonstration purposes)
      localStorage.setItem('user', JSON.stringify({ username }));
      // Redirect to todo page
      navigate('/todo');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
