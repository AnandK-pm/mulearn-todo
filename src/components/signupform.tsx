// SignupForm.tsx
import React from 'react';

interface SignupFormProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  username,
  password,
  setUsername,
  setPassword,
  handleSignup,
}) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
