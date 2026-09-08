import { ArrowDownRight, ArrowUpRight, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { siteContent } from '../content/site'

export function HomePage() {
  return <>
    <section className="hero" style={{ backgroundImage: `url(${siteContent.heroImage})` }}>
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow light">{siteContent.season} / {siteContent.location}</p>
        <h1>같은 설원, <em>다른 시선.</em></h1>
        <p className="hero-copy">움직임을 읽고, 당신만의 속도로<br />눈 위의 감각을 만듭니다.</p>
        <Link className="round-arrow" to="/contact" aria-label="레슨 문의하기"><ArrowDownRight size={24} /></Link>
      </div>
      <div className="hero-caption">스키 · 스노보드<br />개인 강습</div>
    </section>
    <section className="intro-band page-width">
      <SectionIntro eyebrow="01 / 수업 방식" title={<>실력보다 먼저, <br /><span>움직임의 이유를</span> <br />찾습니다.</>} copy="눈 위에서 편안해지는 순간은 각자 다릅니다. 지금의 몸을 정확히 관찰하고, 다음 한 걸음을 함께 설계합니다." />
      <div className="discipline-links"><Link to="/career"><span></span><strong>강사 소개</strong><small>강사 소개 페이지로 이동합니다</small><MoveRight /></Link></div>
    </section>
    <section className="intro-band page-width lesson-intro">
      <SectionIntro
        eyebrow="02 / 수업 안내"
        title={<>당신에게 맞는<br /> <span>수업의 시작점</span>을<br /> 찾습니다.</>}
        copy="입문부터 라이딩까지, 현재의 움직임과 목표에 맞춰 필요한 수업을 안내합니다."
      />
      <div className="discipline-links">
        <Link to="/pricing">
          <span>01</span>
          <strong>수업 안내</strong>
          <small>시간과 인원별 수업 구성 확인하기</small>
          <MoveRight />
        </Link>
        <Link to="/pricing#intermediate-lesson">
          <span>02</span>
          <strong>중급자 맞춤 수업</strong>
          <small>라이딩 중심의 맞춤 수업 알아보기</small>
          <MoveRight />
        </Link>
      </div>
    </section>
    <section className="cta-band page-width"><div><p className="eyebrow">준비되셨다면</p><h2>이번 겨울, </h2> <h2><em>눈 위에서 만나요.</em></h2></div><Link className="button button-signal" to="/contact">레슨 문의하기 <ArrowUpRight size={17} /></Link></section>
  </>
}