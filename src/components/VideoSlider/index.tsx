import { useState, useEffect, useRef } from 'react';

const videos = [
  '/videos/tutorial0.mp4',
  '/videos/tutorial1.mp4',
  '/videos/tutorial2.mp4',
  '/videos/tutorial3.mp4',
  '/videos/tutorial4.mp4',
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // 비디오 참조 배열

  // 다음 영상으로 넘어가는 함수
  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play(); // 현재 비디오 재생
    }
  }, [currentIndex]);

  return (
    <div className="video-slider-container">
      <div
        className="video-slider"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transition: 'transform 1s ease',
        }}
      >
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el; // 비디오 참조 저장
            }}
            src={video}
            className={`video ${index === currentIndex ? 'active' : ''}`}
            onEnded={handleNextVideo} // 영상이 끝나면 다음 영상으로
            muted
            loop={false} // 영상이 끝나면 다음으로 넘어가기 때문에 loop는 false로
          />
        ))}
      </div>
    </div>
  );
}