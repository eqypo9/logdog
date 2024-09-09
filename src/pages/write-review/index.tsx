// api 수정 필요
import React, { useState } from 'react';
import axios from 'axios';

const WriteReview: React.FC = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('rating', rating.toString());
    formData.append('content', content);
    formData.append('author', author);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('http://localhost:3000/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // 제출 후 리뷰 목록 페이지로 리다이렉트할 수 있습니다.
    } catch (error) {
      console.error('리뷰 제출 실패:', error);
    }
  };

  return (
    <div className='flex flex-col items-center p-4 bg-gray-100 mt-[7rem]'>
      <h1 className='text-3xl font-bold mt-[4rem] mb-4'>리뷰 작성하기</h1>

      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
        <input
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
          required
        />
        <input
          type='number'
          placeholder='별점'
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
          required
        />
        <textarea
          placeholder='내용'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
          required
        />
        <input
          type='text'
          placeholder='작성자'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
          required
        />
        <input
          type='text'
          placeholder='카테고리'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
        />
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='block w-full mb-4 p-2 border border-gray-300 rounded'
        />
        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>
          리뷰 제출
        </button>
      </form>
    </div>
  );
}

export default WriteReview;
