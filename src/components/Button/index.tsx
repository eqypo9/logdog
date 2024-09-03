import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  width?: string;
  children: React.ReactNode;
  link?: string;
}

function Button({ width = '12rem', children, link }: ButtonProps) {
  const commonClasses =
    'bg-white border-black rounded-[8rem] h-[5rem] shadow-lg border-[0.1rem] transition-all duration-400 hover:bg-var_blue cursor-pointer text-black text-base font-semibold hover:text-white flex items-center justify-center';

  const buttonStyle = { width };

  if (link) {
    return (
      <Link href={link} passHref>
        <a className={commonClasses} style={buttonStyle}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <div className={commonClasses} style={buttonStyle}>
      {children}
    </div>
  );
}

export default Button;
