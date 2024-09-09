// src/components/Modal.tsx
import React from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: {
    title: string;
    rating: number;
    content: string;
    author: string;
    category: string;
    image: string;
  };
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, review }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative'>
        <button onClick={onClose} className='absolute top-2 right-2 text-gray-600'>
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'>{review.title}</h2>
        <p className='text-gray-600'>별점: {review.rating}</p>
        <p className='mt-2'>{review.content}</p>
        <p className='text-gray-500 mt-2'>작성자: {review.author}</p>
        <p className='text-gray-400'>카테고리: {review.category || 'N/A'}</p>
        {review.image && <img src={`http://localhost:3000/${review.image}`} alt='Review Image' className='mt-4 w-full h-auto' />}
      </div>
    </div>
  );
}

export default ReviewModal;
