// pages/LoginPage.js

import React, { useState } from 'react';
import api from '../api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make API request to login user
      const response = await api.login(email, password);
      // Handle successful login and redirect user to the dashboard
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
