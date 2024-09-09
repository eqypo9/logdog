import React, { useState } from 'react';
import mockReview from './mockReview';
import Link from 'next/link';
import ReviewModal from '@/components/Modal/ReviewModal';
import ReviewCard from '@/components/ReviewCard';

const Reviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());
  const [reviewLikes, setReviewLikes] = useState<Record<string, number>>(() =>
    mockReview.reduce((acc, review) => {
      acc[review._id] = 0; // 초기 반응 수를 0으로 설정
      return acc;
    }, {} as Record<string, number>)
  );

  const handleReviewClick = (review: any) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const toggleLike = (reviewId: string) => {
    setLikedReviews((prevLikedReviews) => {
      const newLikedReviews = new Set(prevLikedReviews);
      const newReviewLikes = { ...reviewLikes };

      if (newLikedReviews.has(reviewId)) {
        newLikedReviews.delete(reviewId);
        newReviewLikes[reviewId] = Math.max(0, newReviewLikes[reviewId] - 1); // 반응 수 감소
      } else {
        newLikedReviews.add(reviewId);
        newReviewLikes[reviewId] = (newReviewLikes[reviewId] || 0) + 1; // 반응 수 증가
      }

      setReviewLikes(newReviewLikes);
      return newLikedReviews;
    });
  };

  return (
    <div className='flex flex-col items-center p-4 bg-gray-100 mt-[7rem]'>
      <h1 className='text-3xl font-bold mt-[4rem] mb-4'>리뷰 페이지</h1>

      <Link href='/write-review' passHref>
        <div className='w-full max-w-md mb-4 p-2 bg-green-500 text-white text-center rounded cursor-pointer'>
          리뷰 작성하기
        </div>
      </Link>

      <div className='w-full max-w-7xl mt-8'>
        <h2 className='text-2xl font-semibold mb-4'>리뷰 목록</h2>
        {mockReview.length > 0 ? (
          <div className='flex flex-wrap gap-4'>
            {mockReview.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                likedReviews={likedReviews}
                reviewLikes={reviewLikes}
                onLikeToggle={toggleLike}
                onClick={handleReviewClick}
              />
            ))}
          </div>
        ) : (
          <p>작성된 리뷰가 없습니다.</p>
        )}
      </div>

      {selectedReview && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          review={selectedReview}
        />
      )}
    </div>
  );
}

export default Reviews;
