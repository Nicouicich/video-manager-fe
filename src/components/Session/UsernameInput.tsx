import { FC } from 'react';

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const UsernameInput: FC<UsernameInputProps> = ({ value, onChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor='username' className='block mb-2'>
        Username:
      </label>
      <input
        type='text'
        id='username'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
      />
    </div>
  );
};

export default UsernameInput;