export interface Review {
  _id: string;
  title: string;
  rating: number;
  content: string;
  author: string;
  category?: string;
  createdAt: Date;
  image?: string;
}
