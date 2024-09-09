// components/PhotoList.tsx
import { useRef, useCallback } from 'react';
import { useInfinitePhotos } from '@/hooks/useInfinitePhotos';
import { Photo } from '@/types/rainbow';

const PhotoList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePhotos();

  const observer = useRef<IntersectionObserver | null>(null);

  const lastPhotoElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage || !hasNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      }, {
        root: null, // 관찰할 영역의 루트 요소 (null은 viewport를 의미)
        rootMargin: '0px',
        threshold: 1.0, // 교차비율 100%일 때 호출
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  // 타입 정의
  type Page = {
    photos: Photo[];
  };

  return (
    <div className='photo-list'>
      {data?.pages.map((page: Page, pageIndex: number) => (
        <div key={pageIndex} className='photo-grid'>
          {page.photos.map((photo: Photo, index: number) => (
            <div
              key={photo.id}
              ref={pageIndex === data.pages.length - 1 && index === page.photos.length - 1 ? lastPhotoElementRef : undefined}
              className='photo-item'
            >
              <img src={photo.url} alt={photo.description} />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      ))}
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default PhotoList;
