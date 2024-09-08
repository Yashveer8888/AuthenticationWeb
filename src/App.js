import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggle between Sign In and Sign Up forms
  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container">
      <div className={`forms-wrapper ${isSignUp ? 'change' : ''}`}>
        {/* Sign In Form */}
        <form className="signin-form">
          <a href="#" className="signup-btn" onClick={handleToggleForm}>
            Sign Up
          </a>
          <h2>Sign In</h2>
          <div className="inputs-wrapper">
            <input type="text" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign In" />
          </div>
        </form>

        {/* Sign Up Form */}
        <form className="signup-form">
          <a href="#" className="signin-btn" onClick={handleToggleForm}>
            Sign In
          </a>
          <h2>Sign Up</h2>
          <div className="inputs-wrapper">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
