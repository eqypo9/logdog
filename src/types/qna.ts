interface Answer {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  answers: Answer[];
}
