import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  width?: string;
  children: React.ReactNode;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  text: string;
}

function Button({ width = '12rem', children, link, type = 'button', text }: ButtonProps) {
  const commonClasses =
    'bg-white border-black rounded-[8rem] h-[5rem] shadow-lg border-[0.1rem] transition-all duration-400 hover:bg-var-blue cursor-pointer text-black text-base font-semibold hover:text-white flex items-center justify-center';

  const buttonStyle = { width };

  if (link) {
    return (
      <Link href={link} passHref>
        <a className={commonClasses} style={buttonStyle}>
          {text}
        </a>
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
