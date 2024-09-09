import React from 'react';
import { Review } from '@/types/review';

interface ReviewCardProps {
  review: Review;
  likedReviews: Set<string>;
  reviewLikes: Record<string, number>;
  onLikeToggle: (reviewId: string) => void;
  onClick: (review: Review) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, likedReviews, reviewLikes, onLikeToggle, onClick }) => {
  return (
    <div key={review._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-4 bg-white border border-gray-300 rounded cursor-pointer relative' onClick={() => onClick(review)}>
      <h3 className='text-xl font-semibold'>{review.title}</h3>
      <p className='text-gray-600'>별점: {review.rating}</p>
      <p>{review.content}</p>
      <p className='text-gray-500'>작성자: {review.author}</p>
      <p className='text-gray-400'>카테고리: {review.category || 'N/A'}</p>
      {review.image && <img src={`http://localhost:3000/${review.image}`} alt='Review Image' className='mt-2 w-full h-auto' />}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트가 리뷰 클릭으로 전달되지 않도록 함
          onLikeToggle(review._id);
        }}
        className={`absolute top-2 right-2 p-1 rounded-full ${likedReviews.has(review._id) ? 'text-red-500' : 'text-gray-500'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          viewBox='0 0 24 24'
          fill={likedReviews.has(review._id) ? 'red' : 'none'}
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
        </svg>
      </button>
      <p className='absolute bottom-2 right-2 text-gray-600'>
        {reviewLikes[review._id] || 0} {likedReviews.has(review._id) ? '하트' : '하트 없음'}
      </p>
    </div>
  );
};

export default ReviewCard;
