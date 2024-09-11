// 수정 필요
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const reviewsRouter = require('./src/routes/reviews');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS 설정
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer 설정 (업로드된 파일을 'uploads' 폴더에 저장)
const upload = multer({
  dest: path.join(__dirname, 'uploads'), // 저장할 경로
  limits: { fileSize: 5 * 1024 * 1024 }, // 최대 파일 크기 5MB
});

// 파일 업로드 라우트
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '파일이 업로드되지 않았습니다.' });
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// 리뷰 라우터 설정
app.use('/api', reviewsRouter);

// 정적 파일 서빙 설정 (업로드된 파일을 /uploads 경로에서 서빙)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/petreviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
