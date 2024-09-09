// components/UploadPhotoForm.tsx
import { useState } from 'react';
import axios from 'axios';

const UploadPhotoForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('description', description);

    await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Reset form
    setFile(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='upload-form'>
      <input type='file' onChange={handleFileChange} />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
      <button type='submit'>Upload</button>
    </form>
  );
};

export default UploadPhotoForm;
