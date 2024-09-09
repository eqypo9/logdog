import { useState } from 'react';
import { TributePost } from '@/types/rainbow';

const TributeForm: React.FC<{ onSubmit: (post: TributePost) => void }> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: TributePost = {
      id: Date.now().toString(),
      title,
      content,
      author: 'CurrentUser', // Replace with actual user info
      createdAt: new Date(),
      comments: [],
      likes: 0,
    };
    onSubmit(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        required
        className='w-full p-2 border rounded'
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Your tribute'
        required
        className='w-full p-2 border rounded'
      />
      <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
        Submit Tribute
      </button>
    </form>
  );
};

export default TributeForm;
