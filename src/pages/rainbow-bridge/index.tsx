import CommonLayout from '@/components/Layout/CommonLayout';
import TributeForm from '@/components/Tribute/TributeForm';
import TributeList from '@/components/Tribute/TributeList';
import { useState } from 'react';
import mockTributePosts from './mockTribute';
import { Comment, TributePost } from '@/types/rainbow';

const RainbowBridge: React.FC = () => {
  const [posts, setPosts] = useState<TributePost[]>(mockTributePosts);

  const handleAddTribute = (newPost: TributePost) => {
    setPosts([...posts, newPost]);
  };

  const handleAddComment = (postId: string, newComment: Comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <CommonLayout>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold my-[4rem]'>무지개다리 페이지</h1>
      </div>
      <TributeForm onSubmit={handleAddTribute} />
      <div className='my-[4rem]'>
        <TributeList posts={posts} onCommentSubmit={handleAddComment} />
      </div>
    </CommonLayout>
  );
};

export default RainbowBridge;
