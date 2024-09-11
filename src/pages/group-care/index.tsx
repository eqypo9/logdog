import CommonLayout from '@/components/Layout/CommonLayout';
import AskQuestionForm from '@/components/Question/AskQuestionForm';
import { useState, useRef } from 'react';
import mockQuestions from './mockQuestion';
import QuestionList from '@/components/Question/QuestionList';

const GroupCare: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const questionListRef = useRef<HTMLDivElement>(null);

  const handleAskQuestion = (newQuestion: Question) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleAddAnswer = (questionId: string, newAnswer: Answer) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          answers: [...question.answers, newAnswer],
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (questionListRef.current) {
      const container = questionListRef.current;
      const scrollAmount = direction === 'left' ? -container.clientWidth / 2 : container.clientWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <CommonLayout>
      <div className="flex flex-col items-center">
        <h1 className='text-3xl font-bold mt-[4rem] mb-4'>집단견성 페이지</h1>
        <div className='flex items-start w-full max-w-7xl my-[4rem] relative'>
          <div className='w-1/3 mr-4'> {/* Adjust the width and margin as needed */}
            <AskQuestionForm onSubmit={handleAskQuestion} />
          </div>
          <div className='flex-grow overflow-x-auto whitespace-nowrap relative'>
            <div ref={questionListRef} className='flex space-x-4'>
              <QuestionList questions={questions} />
            </div>
            <button
              onClick={() => scroll('left')}
              className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded'
              style={{ zIndex: 10 }}
            >
              &lt;
            </button>
            <button
              onClick={() => scroll('right')}
              className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded'
              style={{ zIndex: 10 }}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default GroupCare;
