// 수정 필요
// src/routes/reviews.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// 설정: 업로드된 파일을 저장할 디렉토리와 파일명 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/reviews', async (req, res) => {
  try {
    console.log('Received request for /reviews');
    res.json(mockReviews); // Return mock data
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: '서버 오류' });
  }
});

router.post('/reviews', upload.single('image'), async (req, res) => {
  try {
    const { title, rating, content, author, category } = req.body;
    const image = req.file ? req.file.path : '';

    const newReview = {
      _id: String(mockReviews.length + 1),
      title,
      rating,
      content,
      author,
      category,
      image,
      createdAt: new Date(),
    };
    mockReviews.push(newReview);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: '서버 오류' });
  }
});

module.exports = router;
