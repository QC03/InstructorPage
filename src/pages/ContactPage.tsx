import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { ReviewStrip } from '../components/Gallery'
import { siteContent } from '../content/site'

const contactChecklist = [
  '희망 날짜와 스키장',
  '스키 / 스노보드와 현재 수준',
  '원하는 시간과 인원수, 나이',
]

function ContactActions() {
  return (
    <div className="contact-actions">
      <p className="contact-kicker">가장 편한 방법으로 연락해 주세요</p>
      {siteContent.kakaoUrl ? (
        <a className="kakao-button" href={siteContent.kakaoUrl} target="_blank" rel="noreferrer">
          카카오톡으로 문의하기
          <ArrowUpRight />
        </a>
      ) : (
        <span className="kakao-button is-disabled">카카오톡 링크 입력 예정</span>
      )}
      {siteContent.email ? (
        <a className="email-link" href={`mailto:${siteContent.email}`}>
          {siteContent.email}
        </a>
      ) : (
        <span className="email-link is-disabled">이메일 주소 입력 예정</span>
      )}
    </div>
  )
}

function OperatingInfo() {
  return (
    <div className="contact-details" aria-label="운영 정보">
      <div>
        <MapPin size={18} aria-hidden="true" />
        <span>
          활동 스키장
          <strong>{siteContent.location}</strong>
        </span>
      </div>
      <div>
        <CalendarDays size={18} aria-hidden="true" />
        <span>
          활동 시즌
          <strong>{siteContent.season}</strong>
        </span>
      </div>
    </div>
  )
}

function ContactChecklist() {
  return (
    <section className="send-guide">
      <div>
        <p className="eyebrow">문의할 때 알려주세요</p>
        <p className="send-guide-copy">세 가지만 남겨주시면 가능한 일정과 맞춤 강습을 빠르게 안내해 드립니다.</p>
      </div>
      <ol>
        {contactChecklist.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  )
}

export function ContactPage() {
  return (
    <div className="page-width interior-page contact-page">
      <section className="page-heading contact-heading">
        <p className="eyebrow">문의하기</p>
        <h1>
          눈 위의 추억을
        </h1>
        <h1>
            <em>예약하세요.</em>
        </h1>
        <p className="lede">아래 내용을 보내주시면 가능한 일정과 맞춤 레슨을 안내해 드립니다.</p>
      </section>

      <section className="contact-grid" aria-label="문의 방법과 운영 정보">
        <ContactActions />
        <OperatingInfo />
      </section>

      <ContactChecklist />

      <section id="reviews" className="reviews">
        <div className="split-heading">
          <div>
            <p className="eyebrow">수강생 후기</p>
            <p className="review-label">수강생의 후기를 직접 확인해 보세요.</p>
          </div>
          <p className="reviews-note">실제 수업 후 남겨주신 후기입니다.</p>
        </div>
        <ReviewStrip items={siteContent.testimonials} />
      </section>
    </div>
  )
}