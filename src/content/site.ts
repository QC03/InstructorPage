export type PriceItem = {
  category: string
  title: string
  detail: string
  price: string
}

export const siteContent = {
  brand: '브랜드명 입력 예정',
  instructor: '강사명 입력 예정',
  role: '스키 · 스노보드 인스트럭터',
  location: '운영 지역 입력 예정',
  season: '운영 시즌 입력 예정',
  kakaoUrl: '',
  email: '',
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
  prices: [] as PriceItem[],
} as const

export const careerItems: readonly (readonly [string, string, string])[] = []