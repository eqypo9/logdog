import React from 'react';
import Image from 'next/image';

interface ContentBoxProps {
  icon: string;
  title: string;
  text: string;
}

function ContentBox({ icon, title, text }: ContentBoxProps) {
  return (
    <div className='my-[4rem] flex-1 w-[300px] h-[400px] bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
      <div className='mb-4'>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h2 className='text-[2.4rem] font-bold text-var-blue mb-2'>{title}</h2>
      <p className='text-[2rem] text-gray-600'>{text}</p>
    </div>
  );
}

export default ContentBox;
