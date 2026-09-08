import { ArrowDownRight, ArrowUpRight, Mountain, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { SectionIntro } from '../components/SectionIntro'
import { siteContent } from '../content/site'

export function HomePage() {
  return <>
    <section className="hero" style={{ backgroundImage: `url(${siteContent.heroImage})` }}>
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow light">{siteContent.season} / {siteContent.location}</p>
        <h1>같은 설원,<br /><em>다른 시선.</em></h1>
        <p className="hero-copy">움직임을 읽고, 당신만의 속도로<br />눈 위의 감각을 만듭니다.</p>
        <Link className="round-arrow" to="/contact" aria-label="레슨 문의하기"><ArrowDownRight size={24} /></Link>
      </div>
      <div className="hero-caption">스키 · 스노보드<br />개인 강습</div>
    </section>
    <section className="intro-band page-width">
      <SectionIntro eyebrow="01 / 수업 방식" title={<>실력보다 먼저,<br /><span>움직임의 이유를</span> 찾습니다.</>} copy="눈 위에서 편안해지는 순간은 각자 다릅니다. 지금의 몸을 정확히 관찰하고, 다음 한 걸음을 함께 설계합니다." />
      <div className="discipline-links"><Link to="/career"><span>01</span><strong>SKI</strong><small>정확한 엣지와 리듬</small><MoveRight /></Link><Link to="/career"><span>02</span><strong>SNOWBOARD</strong><small>자유로운 턴과 밸런스</small><MoveRight /></Link></div>
    </section>
    <section className="dark-band">
      <div className="page-width split-heading"><SectionIntro eyebrow="02 / 설원에서" title={<>수업은 사진보다<br />더 많은 것을 남깁니다.</>} /><Link className="text-link light-link" to="/career">강습 기록 보기 <ArrowUpRight size={16} /></Link></div>
      <Gallery items={siteContent.lessonImages} className="page-width" />
    </section>
    <section className="cta-band page-width"><div><p className="eyebrow">준비되셨다면</p><h2>이번 겨울,<br /><em>눈 위에서 만나요.</em></h2></div><Link className="button button-signal" to="/contact">레슨 문의하기 <ArrowUpRight size={17} /></Link></section>
  </>
}