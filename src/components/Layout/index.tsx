import React, { ReactNode } from 'react';
import { Header } from '../Header';
import Footer from '../Footer';
import SideNav from '../SideNav'; 

type Children = {
  children: ReactNode;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <Header />
      <div className='pt-[7rem] flex'>
        <SideNav /> 
        <main className='flex-grow'>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
