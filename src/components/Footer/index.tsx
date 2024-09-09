import Image from 'next/image';

function Footer() {
  return (
    <footer className='w-full bg-var-gray flex justify-center items-center mx-auto py-2 z-10'> 
      <div className='flex w-full justify-between mx-[4rem] my-[2.5rem] gap-[4rem]'>
        {/* 이미지 컨테이너 */}
        <div className='relative h-[30rem] w-[45%]'>
          <Image src='/images/default.png' alt='Dog' layout='fill' objectFit='cover' className='rounded-lg' />
          {/* 불투명한 검정색 배경을 가진 텍스트 컨테이너 */}
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='bg-black bg-opacity-30 p-6 rounded-lg max-w-[70%] max-h-[60%] text-white'>
              <h1 className='text-[1.4rem] font-bold mb-3 text-center'>LOGDOG</h1>
              <p className='text-[1.2rem] mb-2 text-center'>
                <strong>Email</strong>
                <br />
                eqypo@naver.com
              </p>
              <p className='text-[1.2rem] mb-2 text-center'>
                <strong>Tel</strong>
                <br />
                010-5841-3253
              </p>
              <p className='text-[1.4rem] text-center'>
                <strong>Follow us</strong>
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center bg-white h-[30rem] w-full rounded-lg'>
          <h1 className='text-[1.4rem]'>자유롭게 문의사항을 남겨주세요.</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
