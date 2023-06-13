// pages/SignupPage.js

import React, { useState } from 'react';
import api from '../api';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make API request to register user
      const response = await api.signup(email, password);
      // Handle successful signup and redirect user to the dashboard
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
