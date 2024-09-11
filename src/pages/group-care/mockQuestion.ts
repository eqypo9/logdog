const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How to take care of a puppy?',
    content: 'I am new to having a puppy. Any tips on how to take care of it?',
    author: 'JaneDoe',
    createdAt: new Date(),
    answers: [
      {
        id: 'a1',
        content: 'Make sure to give it a proper diet and regular vet checkups.',
        author: 'JohnDoe',
        createdAt: new Date(),
      }
    ]
  }
  // 다른 질문들...
];

export default mockQuestions;