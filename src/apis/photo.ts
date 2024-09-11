// api/photos.ts
import { Photo } from "@/types/rainbow";

interface FetchPhotosParams {
  pageParam: number;
}

interface FetchPhotosResponse {
  photos: Photo[];
  hasMore: boolean;
  nextPage?: number;
}

export const fetchPhotos = async ({ pageParam }: FetchPhotosParams): Promise<FetchPhotosResponse> => {
  // 여기에 API 호출 로직을 작성하세요
  const response = await fetch(`/api/photos?page=${pageParam}`);
  const data = await response.json();

  return {
    photos: data.photos as Photo[],
    hasMore: data.hasMore,
    nextPage: data.nextPage,
  };
};
