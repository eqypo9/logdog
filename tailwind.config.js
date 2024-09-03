/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // 색상 변수 등록
      colors: {
        var_blue: '#2b6ca3',
      },
      transitionDuration: {
        '400': '400ms',
      },
      inset: {
        unset: 'unset',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      // 폰트 크기 기본값 설정
      fontSize: {
        base: '1.6rem', // 기본 폰트 크기를 1.6rem으로 설정
      },
    },
  },
  plugins: [],
};
