// hooks/useInfinitePhotos.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPhotos } from '@/apis/photo';
import { Photo } from '@/types/rainbow';

interface PhotoResponse {
  photos: Photo[];
  nextPage?: number; // 다음 페이지 번호
}

export const useInfinitePhotos = () => {
  return useInfiniteQuery<PhotoResponse, Error>({
    queryKey: ['photos'], // 쿼리 키 배열
    queryFn: ({ pageParam = 1 }) => fetchPhotos({ pageParam }), // 데이터 패칭 함수
    getNextPageParam: (lastPage: { nextPage: any; }) => lastPage.nextPage, // 다음 페이지 파라미터
  });
};
