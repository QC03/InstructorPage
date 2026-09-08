import { ArrowUpRight, Check, MoveRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/site'

const lessonPrices = [
  { duration: '2시간', oneToOne: '100,000원', twoToOne: '150,000원' },
  { duration: '3시간', oneToOne: '150,000원', twoToOne: '200,000원' },
  { duration: '4시간', oneToOne: '200,000원', twoToOne: '250,000원' },
] as const

const lessonTypes = [
  ['01', '처음 배우는 분', '장비 적응부터 안전한 정지와 기본 자세까지'],
  ['02', '중급 라이딩을 다듬고 싶은 분', '턴의 흐름과 속도 조절을 목표에 맞춰 코칭'],
] as const

function useHomeWheelSnap() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 760px)').matches) return

    const homeSections = Array.from(document.querySelectorAll<HTMLElement>('.home-page > section'))
    let isLocked = false

    const handleWheel = (event: WheelEvent) => {
      if (isLocked || Math.abs(event.deltaY) < 12) return

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
      window.setTimeout(() => { isLocked = false }, 750)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])
}

function HeroInformation() {
  return (
    <div className="home-hero-info">
      <p className="home-hero-kicker">26-27 시즌 개인 강습</p>
      <h1>스키와 스노보드,<br /><em>원하는 강습</em> <br />지금 시작하세요.</h1>
      <p className="home-hero-description">입문부터 중급 라이딩까지 현재 수준과 목표에 맞춰 안내합니다.</p>
      <div className="home-hero-facts">
        <div><span>종목</span><strong>스키 · 스노보드</strong></div>
        <div><span>운영 스키장</span><strong>하이원 · 모나용평 · 알펜시아</strong></div>
        <div><span>수업 인원</span><strong>1:1 · 2:1</strong></div>
      </div>
      <div className="home-hero-actions">
        <Link className="button button-signal" to="/contact">가능 일정 문의하기 <ArrowUpRight size={17} /></Link>
        <Link className="home-secondary-link" to="/pricing">가격 전체 보기 <ArrowUpRight size={16} /></Link>
      </div>
    </div>
  )
}

function LessonTypes() {
  return (
    <section className="home-section page-width lesson-types-section">
      <div className="home-section-heading">
        <div>
          <p className="eyebrow">01 / 강습 안내</p>
          <h2>현재 필요한 수업을<br /><span>바로 찾아보세요.</span></h2>
        </div>
        <p>목표와 경험에 따라 수업의 시작점을 나눠 안내합니다.</p>
      </div>
      <div className="lesson-type-list">
        {lessonTypes.map(([number, title, description]) => (
          <Link className="lesson-type-row" to={number === '02' ? '/pricing#intermediate-lesson' : '/pricing'} key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{description}</small>
            <MoveRight aria-hidden="true" size={19} />
          </Link>
        ))}
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
        <p>각 스키장 강습 패찰 비용은 별도입니다.</p>
      </div>
      <div className="home-price-layout">
        <table className="home-price-table">
          <thead><tr><th>수업 시간</th><th>1:1</th><th>2:1</th></tr></thead>
          <tbody>{lessonPrices.map((price) => <tr key={price.duration}><th>{price.duration}</th><td>{price.oneToOne}</td><td>{price.twoToOne}</td></tr>)}</tbody>
        </table>
        <div className="home-price-included">
          <p className="eyebrow">수업에 포함되는 내용</p>
          {['수업 전 컨디션 체크', '개인별 동작 피드백', '수업 후 연습 루틴 정리'].map((item) => <p key={item}><Check size={16} />{item}</p>)}
          <Link className="button button-dark" to="/pricing">전체 가격 보기 <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="home-contact-strip page-width">
      <div>
        <p className="eyebrow">03 / 강습 문의</p>
        <h2>고민은 미루고<br /><span>문의는 가볍게.</span></h2>
        <p>가능한 일정과 맞춤 수업을 안내해 드립니다.</p>
      </div>
      <Link className="button button-signal" to="/contact">강습 문의하기 <ArrowUpRight size={17} /></Link>
    </section>
  )
}

export function HomePage() {
  useHomeWheelSnap()

  return (
    <div className="home-page">
      <section className="home-hero" style={{ backgroundImage: `url(${siteContent.heroImage})` }}>
        <div className="hero-shade" />
        <div className="page-width home-hero-inner"><HeroInformation /></div>
      </section>
      <LessonTypes />
      <PriceSummary />
      <ContactSection />
    </div>
  )
}