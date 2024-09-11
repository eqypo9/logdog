import React from 'react';

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return <div className='flex flex-col items-center p-4 bg-gray-100 mt-[11rem] mb-[4rem] mx-[8rem]'>{children}</div>;
};

export default CommonLayout;
