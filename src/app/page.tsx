'use client';
import { login } from '@/api/login/login';
import { LoginResponseDto } from '@/dto/auth/login-response.dto';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleLogin = async () => {
    try {
      const responseDto: LoginResponseDto = await login(username, password);
      localStorage.setItem('jwt', responseDto.token);
      window.location.href = '/videos';

    } catch (error) {
      console.log(error);
      setErrorMessage('Error while logging in. Please try again.');
    }
  };

  return (
    <div className='max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>Log in</h2>
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
      <div className='mb-4 relative'>
        <label htmlFor='password' className='block mb-2'>
          Password:
        </label>
        <div className='flex border rounded-lg focus-within:border-blue-500'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            className='w-full px-3 py-2 focus:outline-none'
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className='px-3 py-2 flex items-center'
          >
            <img
              src={showPassword ? '/eye-opened.png' : '/eye-closed.png'}
              alt='toggle visibility'
              style={{ width: '20px', height: '20px' }}
            />
          </button>
        </div>
        {passwordTouched && password.length < 8 && (
          <p className='text-red-500 mb-4 text-center'>Password must be at least 8 characters long</p>
        )}
      </div>
      {errorMessage && (
        <p className='text-red-500 mb-4 text-center'>{errorMessage}</p>
      )}
      <button
        onClick={handleLogin}
        disabled={!username || !password}
        className={`w-full font-semibold py-2 rounded-lg focus:outline-none focus:shadow-outline ${(!username || !password) ? 'bg-blue-200 text-gray-600' : 'bg-blue-500 text-white'}`}>
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
          Continue with Google
        </button>
      </div>
    </div>
  );
}
