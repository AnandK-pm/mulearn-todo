import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage';
import SignupPage from './components/signuppage';
import TodoPage from './components/todopage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/todo" element={<TodoPage/>} />
          {/* Add more routes here as needed `*/}`
        </Routes>
      </div>
    </Router>
  );
};

export default App;
