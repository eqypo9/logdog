import { useState } from "react";

const AnswerForm: React.FC<{ questionId: string; onSubmit: (answer: Answer) => void }> = ({ questionId, onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnswer: Answer = {
      id: Date.now().toString(),
      content,
      author: 'CurrentUser', // 현재 사용자 정보로 변경 필요
      createdAt: new Date(),
    };
    onSubmit(newAnswer);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your answer here..."
        required
        className="w-full h-24 p-4 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit Answer
      </button>
    </form>
  );
};

export default AnswerForm;
