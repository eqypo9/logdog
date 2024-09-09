// 수정 필요
// src/models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // rating 범위 제한
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User 모델 참조
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// 인덱스 추가 (선택 사항)
reviewSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);
