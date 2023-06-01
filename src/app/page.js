'use client'

import { useState } from 'react';

import Player from '../../public/player.png'
import Image from 'next/image';

import apiFootball from './API/apiFootball';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [invalid, setInvalid] = useState('')

  async function handleLogin(e) {
    e.preventDefault();
    e.target[1].disabled = true

    const key = await apiFootball(e.target[0].value, 'leagues')

    if (key.message === undefined) {
      return window.location.href =  '/main'; 
    }

    e.target[0].className = 'invalid'
    setInvalid('key inválida')
    e.target[1].disabled = false
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
        <form className='login-form' onSubmit={handleLogin}>
          <label htmlFor='login'>
            <input
              name='login'
              id='login'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete='off'
            />
          </label>
          <span>{invalid}</span>
          <button type="submit">Entrar</button>
        </form>
        <p className='mid-text'>Ainda não tem sua <strong>Key</strong>? <a href=''>CLIQUE AQUI</a></p>
      </div>
    </div>
  );
}
