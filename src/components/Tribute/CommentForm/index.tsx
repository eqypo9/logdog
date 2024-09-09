// CommentForm.tsx
import { useState } from 'react';
import { Comment } from '@/types/rainbow';

interface CommentFormProps {
  postId: string;
  onSubmit: (comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      author: 'CurrentUser', // 현재 사용자 정보로 변경 필요
      createdAt: new Date(),
    };
    onSubmit(newComment);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='p-4 bg-white border border-gray-200 rounded-lg shadow-md'>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Write your comment...'
        required
        className='w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
        rows={4}
      />
      <button
        type='submit'
        className='mt-4 w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
      >
        Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;
