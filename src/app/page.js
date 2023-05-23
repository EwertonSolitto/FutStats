'use client'
import { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState('')
  const [username, setUsername] = useState('');

  function handleLogin() {

    window.location.href =  '/main'; 
  }

  function showForm(e) {
    setForm('show-form')

    e.target.remove()
  }

  return (
    <div>
      <form className={`login-form ${form}`} onSubmit={handleLogin}>
        <label>
          Login: 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      <button type="submit">Fazer login</button>
    </form>
      <button id='show-login' type='button' onClick={showForm}>Login</button>
      
      <button>Sign In</button>
    </div>
  );
}
