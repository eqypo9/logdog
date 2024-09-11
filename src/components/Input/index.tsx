import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import useToggleButton from '@/hooks/useToggleButton';
import { USER_PASSWORD_SHOW } from '@/constant/inputFieldValidation';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: 'text' | 'password' | 'email'; 
  isError?: boolean;
  errorMessage?: string;
  cssName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, isError, errorMessage, cssName, ...props }, ref) => {
  const { isToggle, handleToggleClick } = useToggleButton();
  const { src, alt, inputType } = isToggle ? USER_PASSWORD_SHOW.on : USER_PASSWORD_SHOW.off;

  return (
    <>
      <div className='relative w-full'>
        <input
          {...props}
          ref={ref}
          type={type === 'password' ? inputType : type}
          className={`${cssName} bg-white text-black w-full p-4 rounded-md border transition text-[1.6rem]  ${
            isError ? 'border-red-500' : 'border-gray-400 focus:border-darkgreen'
          }`}
          placeholder={props.placeholder}
        />
        {type === 'password' && (
          <button type='button' onClick={handleToggleClick} className='flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 right-4'>
            <Image src={src} alt={alt} width={24} height={24} />
          </button>
        )}
      </div>
      {isError && <p className='text-red-500 text-[12px] pl-2'>{errorMessage}</p>}
    </>
  );
});

