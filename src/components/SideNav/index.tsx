import Image from 'next/image';
import Link from 'next/link';

// 회원가입과 로그인 페이지에서는 숨기기
// 아이콘 간격 조정하기
function SideNav() {
  return (
    <div className='fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-4 items-center mt-8 bg-var_blue rounded-md p-4 border-[0.1rem] border-solid border-black shadow-lg'>
      <Link href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/icons/facebook.svg'
          alt='페이스북 로고'
          width={26} // 26px
          height={26} // 26px
        />
      </Link>
      <Link href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/icons/twitter.svg'
          alt='트위터 로고'
          width={26} // 26px
          height={26} // 26px
        />
      </Link>
      <Link href='https://youtube.com/' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/icons/youtube.svg'
          alt='유튜브 로고'
          width={26} // 26px
          height={26} // 26px
        />
      </Link>
      <Link href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
        <Image
          src='/icons/instagram.svg'
          alt='instagram 로고'
          width={26} // 26px
          height={26} // 26px
        />
      </Link>
    </div>
  );
}

export default SideNav;
