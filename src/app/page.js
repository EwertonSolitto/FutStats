'use client'
import { useState } from 'react';
import Player from '../../public/player.png'
import Image from 'next/image';

export default function LoginForm() {
  const [form, setForm] = useState('')
  const [username, setUsername] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    window.location.href =  '/main'; 
  }

  return (
    <div id='home'>
      <Image 
        width={750} 
        height ={800} 
        src={Player} 
        alt='Jogador chutando uma bola'
      />
      <div id='login-div'>
        <div>
          <p>Olá</p>
          <p>Bem Vindo ao ...!</p>
        </div>
        <p>Faça seu Login aqui</p>
        <form className={`login-form ${form}`} onSubmit={handleLogin}>
          <label htmlFor='login'>
            <input
              name='login'
              id='login'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <p className='mid-text'>Ainda não tem sua KEY, <a href=''>CLIQUE AQUI</a></p>
      </div>
    </div>
  );
}
