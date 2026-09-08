import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { SectionIntro } from '../components/SectionIntro'
import { careerItems, siteContent } from '../content/site'

function CareerIntro() {
  return (
    <section className="page-heading">
      <p className="eyebrow">03 / 강사 소개</p>
      <h1>
        잘 타는 법보다
        <br />
        <em>잘 느끼는 법.</em>
      </h1>
      <p className="lede">
        스키와 스노보드를 타는 사람의 움직임을
        관찰하고, 스스로 답을 찾도록 돕습니다.
      </p>
    </section>
  )
}

function InstructorProfiles() {
  return (
    <section className="profile-grid">
      <img src="/images/ski-profile.jpg" alt="스키 프로필 사진" />
      <div className="profile-note">
        <p className="eyebrow">강사의 한마디</p>
        <p>
          “기술을 외우는 수업보다, 내가 왜 편안해졌는지 알게 되는 수업을
          만들고 싶습니다.”
        </p>
        <span>
          {siteContent.instructor} / {siteContent.role}
        </span>
      </div>
      <img src="/images/board-profile-01.jpg" alt="스노보드 프로필 사진" />
      <img src="/images/board-profile-02.jpg" alt="스노보드 주행 프로필 사진" />
      <div className="profile-note">
        <p className="eyebrow">강사의 두마디</p>
        <p>
          “딱딱한 수업보다는, 재미있게 자연스러운 움직임을 배우는 수업을
          만들고 싶습니다.”
        </p>
        <span>
          {siteContent.instructor} / {siteContent.role}
        </span>
      </div>
    </section>
  )
}

function CareerTimeline() {
  return (
    <section className="timeline-section">
      <SectionIntro eyebrow="04 / 현장 경험" title={<h1>매 시즌, <br /> 현장에서.</h1>}/>
      <div className="timeline">
        {careerItems.length ? (
          careerItems.map(([year, title, copy]) => (
            <div className="timeline-row" key={year}>
              <span>{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-state">경력 정보 입력 예정입니다.</p>
        )}
      </div>
    </section>
  )
}

function LessonLog() {
  return (
    <section className="dark-band full-bleed">
      <div className="page-width split-heading">
        <SectionIntro eyebrow="05 / 강습 기록" title="눈 위에서 함께 만든 장면." />
        <Link className="text-link light-link" to="/pricing">
          수업 살펴보기
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <Gallery items={siteContent.lessonImages} className="page-width" />
    </section>
  )
}

export function CareerPage() {
  return (
    <div className="page-width interior-page">
      <CareerIntro />
      <InstructorProfiles />
      <CareerTimeline />
      <LessonLog />
    </div>
  )
}