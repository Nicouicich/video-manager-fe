import { handleLogin } from '@api/login/login';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
import GenericForm from '../GenericForm';
import GoogleLoginButton from '../GoogleLoginButton';
import PasswordInput from '../Session/PasswordInput';
import UsernameInput from '../Session/UsernameInput';
import { ILoginResponse } from '@interfaces/auth/login-response';

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const login = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response: ILoginResponse = await handleLogin(username, password);
      localStorage.setItem('jwt', response.token);
      router.push('/videos');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const isFormValid = username.trim() !== '' && password.trim() !== '';

  return (
    <GenericForm onSubmit={login}>
      <UsernameInput value={username} onChange={setUsername} />
      <PasswordInput value={password} onChange={setPassword} />
      {errorMessage && (
        <p className='text-red-500 mb-4 text-center'>{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full font-semibold py-2 rounded-lg focus:outline-none focus:shadow-outline ${!isFormValid ?
          'bg-blue-200 text-gray-600' : 'bg-blue-500 text-white'}`}>
        Log in
      </button>
      <GoogleLoginButton />
    </GenericForm>
  );
};

export default LoginForm;