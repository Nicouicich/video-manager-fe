// RegisterForm.tsx
import { handleRegister } from '@/api/register/register';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
import GenericForm from '../GenericForm';
import GoogleLoginButton from '../GoogleLoginButton/Index';
import EmailInput from '../Session/EmailInput'; // Asegúrate de tener este componente
import PasswordInput from '../Session/PasswordInput';
import UsernameInput from '../Session/UsernameInput';

const RegisterForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>(''); 
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const register = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const responseDto = await handleRegister(username, email, password);
      localStorage.setItem('jwt', responseDto.token);
      router.push('/videos');
    } catch (error: any) {
      setErrorMessage(error?.message);
    }
  };

  const isFormValid = Boolean(username.trim()) && Boolean(password.trim()) && Boolean(email.trim());

  return (
    <GenericForm onSubmit={register}>
      <UsernameInput value={username} onChange={setUsername} />
      <EmailInput value={email} onChange={setEmail} />
      <PasswordInput value={password} onChange={setPassword} />
      {errorMessage && (
        <p className='text-red-500 mb-4 text-center'>{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full font-semibold py-2 rounded-lg focus:outline-none focus:shadow-outline ${!isFormValid ?
          'bg-blue-200 text-gray-600' : 'bg-blue-500 text-white'}`}>
        Register
      </button>
      <GoogleLoginButton />
    </GenericForm>
  );
};

export default RegisterForm;