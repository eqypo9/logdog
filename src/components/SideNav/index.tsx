import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// 회원가입과 로그인 페이지에서는 숨기기
// 아이콘 간격 조정하기

function SideNav() {
  const router = useRouter();
  const hideOnPaths = ['/signup', '/signin', '/preview'];

  // 현재 경로가 hideOnPaths 배열에 포함되면 컴포넌트를 렌더링하지 않음
  if (hideOnPaths.includes(router.pathname)) {
    return null;
  }

  return (
    <div className='fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-4 items-center mt-8 bg-var-blue rounded-md p-4 border-[0.1rem] border-solid border-black shadow-lg'>
      <Link href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
        <Image src='/icons/facebook.svg' alt='페이스북 로고' width={26} height={26} />
      </Link>
      <Link href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
        <Image src='/icons/twitter.svg' alt='트위터 로고' width={26} height={26} />
      </Link>
      <Link href='https://youtube.com/' target='_blank' rel='noopener noreferrer'>
        <Image src='/icons/youtube.svg' alt='유튜브 로고' width={26} height={26} />
      </Link>
      <Link href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
        <Image src='/icons/instagram.svg' alt='instagram 로고' width={26} height={26} />
      </Link>
    </div>
  );
}

export default SideNav;
