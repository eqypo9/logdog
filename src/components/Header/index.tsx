import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <div className='fixed top-0 left-0 w-full h-[7rem] bg-var-blue text-white px-[24rem] border-b border-gray-300 z-50 flex justify-between items-center'>
      <Link href='/'>
        <Image src='/path-to-logo.png' alt='사이트 로고' height={28} width={166} />
      </Link>
      <div className='flex gap-10'>
        <Link href='/signin' className='text-[1.4rem] font-medium'>
          로그인
        </Link>
        <Link href='/signup' className='text-[1.4rem] font-medium'>
          회원가입
        </Link>
      </div>
    </div>
  );
}
