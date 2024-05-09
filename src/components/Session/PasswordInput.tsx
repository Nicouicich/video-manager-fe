import { useState, FC, MouseEvent } from 'react'; // Importa MouseEvent
import Image from 'next/image';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passworuched, setPassworuched] = useState(false);

  const togglePasswordVisibility = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPassword(!showPassword);
  };

  return (
    <div className='mb-4 relative'>
      <label htmlFor='password' className='block mb-2'>
        Password:
      </label>
      <div className='flex border rounded-lg focus-within:border-blue-500'>
        <input
          type={showPassword ? 'text' : 'password'}
          id='password'
          value={value}
          onChange={(e) => {
            setPassworuched(true);
            onChange(e.target.value);
          }}
          className='w-full px-3 py-2 focus:outline-none'
        />
        <button
          onClick={togglePasswordVisibility} // Usa la nueva función aquí
          className='px-3 py-2 flex items-center'
        >
          <Image
            src={showPassword ? '/eye-opened.png' : '/eye-closed.png'}
            alt='toggle visibility'
            width={20}
            height={20}
          />
        </button>
      </div>
      {passworuched && value.length < 8 && (
        <p className='text-red-500 mb-4 text-center'>Password must be at least 8 characters long</p>
      )}
    </div>
  );
};

export default PasswordInput;