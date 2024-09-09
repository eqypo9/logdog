// pages/album.tsx
import UploadPhotoForm from '@/components/Photo/UploadPhotoForm';
import PhotoList from '@/components/Photo/PhotoList';
import CommonLayout from '@/components/Layout/CommonLayout';

const Album: React.FC = () => {
  return (
    <CommonLayout>
      <h1 className='text-3xl font-bold mb-4'>앨범 페이지</h1>
      <UploadPhotoForm />
      <PhotoList />
    </CommonLayout>
  );
};

export default Album;
