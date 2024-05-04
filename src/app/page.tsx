'use client';
// components/Login.tsx
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Aquí podrías hacer una solicitud HTTP para autenticar al usuario
      console.log('Iniciando sesión con:', username, password);
      // Lógica de autenticación...
      // Si la autenticación es exitosa, podrías redirigir a otra página.
    } catch (error) {
      setErrorMessage(
        'Error al iniciar sesión. Por favor, inténtalo de nuevo.'
      );
    }
  };

  return (
    <div className='max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>Log in</h2>
      {errorMessage && (
        <p className='text-red-500 mb-4 text-center'>{errorMessage}</p>
      )}
      <div className='mb-4'>
        <label htmlFor='username' className='block mb-2'>
          Username:
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block mb-2'>
          Password:
        </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <button
        onClick={handleLogin}
        className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg focus:outline-none focus:shadow-outline'>
        Log in
      </button>
      <div className='mt-4 text-center'>
        <button
          onClick={() =>
            (window.location.href = `YOUR_BACKEND_GOOGLE_LOGIN_ENDPOINT`)
          }
          className='flex items-center justify-center mt-4 bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-4 cursor-pointer'>
          <img
            className='mr-2'
            src='/google_icon.png' // Ruta a tu icono de Google
            alt='Google Icon'
            width='20'
            height='20'
          />
        </button>
      </div>
    </div>
  );
}
