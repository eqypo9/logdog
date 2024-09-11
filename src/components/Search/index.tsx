import React from 'react';
import Image from 'next/image';
import SearchButton from '../CustomButton';

interface SearchUIProps {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isKeyword: boolean;
  isFocus: boolean;
  title: string;
}
// 검색바 디자인 변경하기
function SearchUI({ keyword, onChange, onSubmit, isKeyword, isFocus, title }: SearchUIProps) {
  return (
    <div className='mt-[4rem] p-8 md:p-6 shadow-lg rounded-lg bg-var-gray'>
      <p className='text-[2rem] font-bold text-[#333236] mb-8 md:mb-6 leading-10'>무엇을 검색하고 싶으신가요?</p>
      <div className='flex flex-col relative'>
        <form onSubmit={onSubmit} className={`flex items-center justify-center w-full gap-3 relative ${isKeyword ? 'active' : ''}`}>
          <div className='relative w-full'>
            <input className='text-lg font-normal text-[#1b1b1b] w-full p-6 pl-[4.8rem] border border-[#79747e] rounded-md bg-white' type='search' onChange={onChange} value={keyword} />
            <div className='absolute inset-y-0 left-0 flex items-center pl-5'>
              <Image src='/images/pawprint.png' alt='Paw Print' width={24} height={24} />
            </div>
          </div>
          <div className='flex items-center justify-center w-[13.6rem]'>
            <SearchButton type='submit' text='검색하기' children={undefined} />
          </div>
          {/* {isKeyword && (
            <span className='text-lg font-normal text-[#a4a1aa] absolute left-14 bg-white px-2 transform -translate-y-8 transition-transform duration-300 md:text-base md:transform-none md:top-[-1rem]'>
              내가 원하는 정보는
            </span>
          )} */}
        </form>
        {!isKeyword && !isFocus && (
          <div className='absolute left-[17.5rem] top-1/2 transform -translate-y-1/2 h-10 overflow-hidden md:hidden'>
            <ul>
              <li className='text-lg font-normal text-[#adaeb8] leading-10'>{title}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchUI;
