import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const hideOnPaths = ['/signup', '/signin'];

  // 로그인 및 회원가입 페이지에서는 헤더를 숨김
  if (hideOnPaths.includes(router.pathname)) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-[7rem] bg-var-blue text-white px-[24rem] border-b border-gray-300 z-50 flex justify-between items-center'>
      {/* 로고 이미지 */}
      <Link href='/'>
        <Image src='/images/default.png' alt='사이트 로고' height={15} width={100} />
      </Link>

      {/* 네비게이션 링크 */}
      <nav className='flex gap-10'>
        <Link href='/reviews' className='text-[1.4rem] font-medium'>
          리뷰
        </Link>
        <Link href='/group-care' className='text-[1.4rem] font-medium'>
          집단견성
        </Link>
        <Link href='/rainbow-bridge' className='text-[1.4rem] font-medium'>
          무지개다리
        </Link>
        <Link href='/album' className='text-[1.4rem] font-medium'>
          앨범
        </Link>
      </nav>

      {/* 로그인/회원가입 */}
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
