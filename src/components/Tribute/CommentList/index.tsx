import { Comment } from "@/types/rainbow";

const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <div className='mt-4'>
    {comments.map((comment) => (
      <div key={comment.id} className='p-2 border rounded mt-2'>
        <p>{comment.content}</p>
        <p className='text-gray-600'>By: {comment.author} on {comment.createdAt.toLocaleDateString()}</p>
      </div>
    ))}
  </div>
);

export default CommentList;
