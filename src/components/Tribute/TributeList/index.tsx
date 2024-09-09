import { TributePost, Comment } from '@/types/rainbow';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

interface TributeListProps {
  posts: TributePost[];
  onCommentSubmit: (postId: string, comment: Comment) => void;
}

const TributeList: React.FC<TributeListProps> = ({ posts, onCommentSubmit }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {posts.map((post) => (
      <div key={post.id} className='p-4 border rounded shadow bg-white'>
        <h3 className='text-xl font-bold'>{post.title}</h3>
        <p className='mt-2'>{post.content}</p>
        <p className='mt-2 text-gray-600'>By: {post.author} on {post.createdAt.toLocaleDateString()}</p>
        <div className='flex justify-between mt-4'>
          <button className='text-blue-500'>Like ({post.likes})</button>
        </div>
        <CommentList comments={post.comments} />
        <CommentForm postId={post.id} onSubmit={(comment) => onCommentSubmit(post.id, comment)} />
      </div>
    ))}
  </div>
);

export default TributeList;
