import { useState, FC } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailInput: FC<EmailInputProps> = ({ value, onChange }) => {
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='mb-4 relative'>
      <label htmlFor='email' className='block mb-2'>
        Email:
      </label>
      <div className='flex border rounded-lg focus-within:border-blue-500'>
        <input
          type='email'
          id='email'
          value={value}
          onChange={(e) => {
            setEmailTouched(true);
            onChange(e.target.value);
          }}
          className='w-full px-3 py-2 focus:outline-none'
        />
      </div>
      {emailTouched && !validateEmail(value) && (
        <p className='text-red-500 mb-4 text-center'>Please enter a valid email</p>
      )}
    </div>
  );
};

export default EmailInput;