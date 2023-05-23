'use client'
import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    window.location.href =  '/main'; 
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Nome de usuário:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Fazer login</button>
    </form>
  );
}
