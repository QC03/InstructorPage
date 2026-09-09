export const siteContent = {
  brand: 'SNOVELIA',
  instructor: '주성준',
  role: '스키 · 스노보드 강사',
  location: '하이원, 모나용평, 알펜시아 스키장',
  season: '26-27 시즌',
  kakaoUrl: 'http://pf.kakao.com/_nPxgJX/chat',
  email: 'qc0306@naver.com',
  heroImage: '/images/lesson-hero.jpg',
  lessonImages: [
    { src: '/images/lesson-01.jpg', alt: '설원에서 스키 자세를 코칭하는 장면' },
    { src: '/images/lesson-02.jpg', alt: '슬로프에서 함께 이동하는 강습 장면' },
    { src: '/images/lesson-03.jpg', alt: '스노보드 턴을 연습하는 장면' },
    { src: '/images/lesson-04.jpg', alt: '눈 위에서 강습을 진행하는 장면' },
    { src: '/images/lesson-05.jpg', alt: '설원에서 활강하는 모습' },
    { src: '/images/lesson-06.jpg', alt: '스키 장비를 점검하는 장면' },
  ],
  testimonials: Array.from({ length: 7 }, (_, index) => ({
    src: `/images/review-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `수강생 후기 캡처 ${index + 1}`,
  })),
} as const

export const careerItems: readonly (readonly [string, string, string])[] = [
  ['21년-22년', '활동시작', '샵에서 매니저로 활동'],
  ['23년 01월', '스키 지도자 자격 취득', 'KSIA 스키 레벨 1 자격 취득'],
  ['23년 02월', '스노보드 지도자 자격 취득', 'KSIA 스노보드 레벨 1 자격 취득'],
  ['22년-23년', '스키 · 스노보드 강사', '샵에서 강사 및 매니저로 활동'],
  ['25년-26년', '스키 · 스노보드 강사', '샵에서 강사 및 매니저로 활동'],
]