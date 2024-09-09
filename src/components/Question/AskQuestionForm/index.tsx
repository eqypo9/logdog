import { useState } from "react";

const AskQuestionForm: React.FC<{ onSubmit: (question: Question) => void }> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuestion: Question = {
      id: Date.now().toString(),
      title,
      content,
      author: 'CurrentUser', // 현재 사용자 정보로 변경 필요
      createdAt: new Date(),
      answers: []
    };
    onSubmit(newQuestion);
    setTitle('');
    setContent('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Question Title"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your question"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestionForm;
