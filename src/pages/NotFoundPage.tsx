import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <div className="page-width not-found"><p className="eyebrow">404 / 경로 없음</p><h1>길을 잃으셨나요?</h1><p>요청하신 페이지는 눈 위에 남아 있지 않습니다.</p><Link className="button button-dark" to="/">홈으로 돌아가기</Link></div>
}