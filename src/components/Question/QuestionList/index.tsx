import React from 'react';

const QuestionList: React.FC<{ questions: Question[] }> = ({ questions }) => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    {questions.map((question) => (
      <div key={question.id} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        <p className="text-gray-700 mb-4">{question.content}</p>
        <p className="text-sm text-gray-500 mb-4">
          By: <span className="font-medium">{question.author}</span> on {question.createdAt.toLocaleDateString()}
        </p>
        <div className="space-y-4">
          {question.answers.length > 0 ? (
            question.answers.map((answer) => (
              <div key={answer.id} className="p-4 border border-gray-200 rounded-lg bg-gray-100 shadow-sm">
                <p className="text-gray-800 mb-2">{answer.content}</p>
                <p className="text-xs text-gray-500">
                  By: <span className="font-medium">{answer.author}</span> on {answer.createdAt.toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No answers yet.</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default QuestionList;
