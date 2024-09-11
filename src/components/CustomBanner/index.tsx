import React from 'react';

interface CustomBannerProps {
  text: string;
}

function CustomBanner({ text }: CustomBannerProps) {
  return <div className='mt-[4rem] w-full h-[30rem] bg-white flex justify-center items-center mx-auto'>
    <h1 className='text-[3rem] font-semibold'>{text}</h1>
  </div>;
}

export default CustomBanner;
