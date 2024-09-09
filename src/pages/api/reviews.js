// 수정 필요
// src/pages/api/reviews.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  await client.connect();
  const db = client.db('logdog');
  const collection = db.collection('reviews');

  if (req.method === 'GET') {
    const { filter = 'latest', category } = req.query;
    let query = {};
    if (category) query.category = category;

    let sort = {};
    if (filter === 'latest') sort.createdAt = -1;
    else if (filter === 'popular') sort.likes = -1;

    const reviews = await collection.find(query).sort(sort).toArray();
    res.status(200).json(reviews);
  } else if (req.method === 'POST') {
    const { title, rating, content, author, category } = req.body;
    const newReview = {
      title,
      rating,
      content,
      author,
      category,
      createdAt: new Date(),
    };
    await collection.insertOne(newReview);
    res.status(201).json(newReview);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
