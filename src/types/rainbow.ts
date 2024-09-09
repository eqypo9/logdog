export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface TributePost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  comments: Comment[];
  likes: number;
}
