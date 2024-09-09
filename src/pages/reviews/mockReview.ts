const mockReview = [
  {
    _id: '1',
    title: '가장 최근 리뷰',
    rating: 5,
    content: 'My dog loves this toy. It’s durable and entertaining!',
    author: 'Alice',
    category: '장난감',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-10T12:00:00Z'), // 최근 날짜
  },
  {
    _id: '2',
    title: 'Great Pet 사료',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '사료',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-09T12:00:00Z'), // 이전 날짜
  },
  {
    _id: '3',
    title: 'Great Pet 사료',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '사료',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-08T12:00:00Z'), // 이전 날짜
  },
  {
    _id: '4',
    title: 'Great Pet 사료',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '사료',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-07T12:00:00Z'), // 이전 날짜
  },
  {
    _id: '5',
    title: 'Great Pet 사료',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '사료',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-06T12:00:00Z'), // 이전 날짜
  },
  {
    _id: '6',
    title: 'Great Pet 사료',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '장난감',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-05T12:00:00Z'), // 이전 날짜
  },
  {
    _id: '7',
    title: '가장 오래된 리뷰',
    rating: 4,
    content: 'My cat enjoys this 사료 a lot. It seems to be high quality.',
    author: 'Bob',
    category: '사료',
    image: '', // 추가된 이미지 필드
    createdAt: new Date('2024-09-04T12:00:00Z'), // 가장 오래된 날짜
  },
];

export default mockReview;
