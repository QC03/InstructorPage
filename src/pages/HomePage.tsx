import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { careerItems, siteContent } from '../content/site'

const lessonPrices = [
  { duration: '2시간', oneToOne: '100,000원', twoToOne: '150,000원' },
  { duration: '3시간', oneToOne: '150,000원', twoToOne: '200,000원' },
  { duration: '4시간', oneToOne: '200,000원', twoToOne: '250,000원' },
] as const

const lessonTypes = {
  ski: {
    label: '스키',
    steps: [
      ['01', '기본자세', '스키의 기본 자세인 알파인 베이직 포지션을 배웁니다.'],
      ['02', 'A자', 'A자 자세에서 방향을 바꾸며 턴의 감각을 만듭니다.'],
      ['03', 'S턴', '스키를 단계별로 모아 슬로프를 내려옵니다.'],
      ['04', '페러렐턴', '스키를 나란히 모아 자연스럽게 슬로프를 내려옵니다.'],
    ],
  },
  snowboard: {
    label: '스노보드',
    steps: [
      ['01', '기본자세', '스노보드의 기본 자세인 BBP를 배웁니다.'],
      ['02', '낙엽', '발뒤꿈치와 발끝 엣지를 사용해 속도를 조절합니다.'],
      ['03', '턴', '상체를 회전하여 방향을 바꾸며 턴의 감각을 만듭니다.'],
      ['04', 'S턴', '양쪽 엣지를 전환해 부드러운 턴을 완성합니다.'],
    ],
  },
} as const

function useHomeWheelSnap() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 760px)').matches) return

    const homeSections = Array.from(document.querySelectorAll<HTMLElement>('.home-page > section'))
    let isLocked = false

    const handleWheel = (event: WheelEvent) => {
      if (isLocked || Math.abs(event.deltaY) < 40) return

      const currentIndex = homeSections.reduce((index, section, sectionIndex) => {
        return section.offsetTop <= window.scrollY + 120 ? sectionIndex : index
      }, 0)
      const nextIndex = event.deltaY > 0
        ? Math.min(currentIndex + 1, homeSections.length - 1)
        : Math.max(currentIndex - 1, 0)

      if (nextIndex === currentIndex) return

      event.preventDefault()
      isLocked = true
      homeSections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => { isLocked = false }, 900)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])
}

function HeroInformation() {
  return (
    <div className="home-hero-info">
      <p className="home-hero-kicker">26-27 시즌 개인 강습</p>
      <h1>
        스키와 스노보드,
        <br />
        <em>원하는 강습</em>
        <br />
        지금 시작하세요.
      </h1>
      <p className="home-hero-description">입문부터 중급 라이딩까지 현재 수준과 목표에 맞춰 안내합니다.</p>
      <div className="home-hero-facts">
        <div>
          <span>종목</span>
          <strong>스키 · 스노보드</strong>
        </div>
        <div>
          <span>운영 스키장</span>
          <strong>하이원 · 모나용평 · 알펜시아</strong>
        </div>
        <div>
          <span>수업 인원</span>
          <strong>1:1 · 2:1</strong>
        </div>
      </div>
      <div className="home-hero-actions">
        <Link className="button button-signal" to="/contact">
          강습 문의하기 <ArrowUpRight size={17} />
        </Link>
        <Link className="home-secondary-link" to="/pricing">
          강습요금 확인하기 <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  )
}

function LessonTypes() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<keyof typeof lessonTypes>('ski')
  const [openStep, setOpenStep] = useState<number | null>(0)
  const lesson = lessonTypes[selectedDiscipline]

  const selectDiscipline = (discipline: keyof typeof lessonTypes) => {
    setSelectedDiscipline(discipline)
    setOpenStep(0)
  }

  return (
    <section className="home-section page-width lesson-types-section">
      <div className="home-section-heading">
        <div>
          <p className="eyebrow">01 / 강습 안내</p>
          <h2>현재 필요한 수업을<br /><span>바로 찾아보세요.</span></h2>
        </div>
        <p>목표와 경험에 따라 수업의 시작점을 나눠 안내합니다.</p>
      </div>
      <div className="lesson-select-area">
        <div className="discipline-buttons" role="group" aria-label="강습 종목 선택">
          {(Object.keys(lessonTypes) as Array<keyof typeof lessonTypes>).map((discipline) => (
            <button
              className={selectedDiscipline === discipline ? 'is-selected' : ''}
              type="button"
              aria-pressed={selectedDiscipline === discipline}
              key={discipline}
              onClick={() => selectDiscipline(discipline)}
            >
              {lessonTypes[discipline].label}
            </button>
          ))}
        </div>
        <div className="lesson-steps" aria-label={`${lesson.label} 강습 단계`}>
          {lesson.steps.map(([step, title, description], index) => {
            const isOpen = openStep === index

            return (
              <div className={`lesson-step${isOpen ? ' is-open' : ''}`} key={step}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenStep(isOpen ? null : index)}>
                  <span>{step}</span>
                  <strong>{title}</strong>
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p>{description}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PriceSummary() {
  return (
    <section className="home-section page-width home-price-section">
      <div className="home-section-heading">
        <div>
          <p className="eyebrow">02 / 가격 안내</p>
          <h2>시간과 인원에 따른<br /><span>수업 요금</span></h2>
        </div>
      </div>
      <p><strong>각 스키장 강습 자켓(패찰) 비용은 별도입니다.</strong></p>
      <div className="home-price-layout">
        <table className="home-price-table">
          <thead><tr><th>수업 시간</th><th>1:1</th><th>2:1</th></tr></thead>
          <tbody>{lessonPrices.map((price) => <tr key={price.duration}><th>{price.duration}</th><td>{price.oneToOne}</td><td>{price.twoToOne}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="home-contact-strip page-width">
        <div>
          <p className="eyebrow">03 / 강습 문의</p>
          <h2>
            고민은 미루고
            <br />
            <span>문의는 가볍게.</span>
          </h2>
        <p>가능한 일정과 맞춤 수업을 안내해 드립니다.</p>
      </div>
      <Link className="button button-signal" to="/contact">강습 문의하기 <ArrowUpRight size={17} /></Link>
    </section>
  )
}

function InstructorSection() {
  return (
    <section className="instructor-preview page-width">
      <div className="instructor-preview-heading">
        <p className="eyebrow">04 / 강사 소개</p>
        <h2>수업을 진행하는<br /><span>강사를 소개합니다.</span></h2>
        <p>스키와 스노보드 강사 {siteContent.instructor}의 경력과 지도 방식을 소개합니다.</p>
      </div>
      <div className="instructor-profile-row">
        <div className="instructor-preview-image">
          <img src="/images/ski-profile.jpg" alt="스키 강사 프로필 사진" />
        </div>
        <div className="home-career-timeline">
          {careerItems.map(([year, title, copy]) => (
            <div key={year}>
              <span>{year}</span>
              <strong>{title}</strong>
              <small>{copy}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="instructor-lesson-log">
        <div className="instructor-lesson-heading">
          <p className="eyebrow">강습 현장</p>
          <p>사진을 클릭하면 크게 볼 수 있습니다.</p>
        </div>
        <Gallery items={siteContent.lessonImages} />
      </div>
    </section>
  )
}

export function HomePage() {
  useHomeWheelSnap()

  return (
    <div className="home-page">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${siteContent.heroImage})` }}
      >
        <div className="hero-shade" />
        <div className="page-width home-hero-inner">
          <HeroInformation />
        </div>
      </section>
      <LessonTypes />
      <PriceSummary />
      <ContactSection />
      <InstructorSection />
    </div>
  )
}