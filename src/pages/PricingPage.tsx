import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'

const includedItems = [
  '수업 전 컨디션 체크',
  '개인별 동작 피드백',
  '수업 후 연습 루틴 정리',
  '리프트권 · 장비 별도',
  '희망 시 촬영 및 영상 피드백',
]

const lessonPrices = [
  { duration: '2시간', oneToOne: '100,000원', twoToOne: '150,000원' },
  { duration: '3시간', oneToOne: '150,000원', twoToOne: '200,000원' },
  { duration: '4시간', oneToOne: '200,000원', twoToOne: '250,000원' },
] as const

function PriceTable() {
  return (
    <div className="price-table-wrap">
      <p className="price-table-note">
        <strong>각 스키장 강습 자켓(패찰) 비용은 별도입니다.</strong>
      </p>
      <table className="price-table">
        <thead>
          <tr>
            <th scope="col">수업 시간</th>
            <th scope="col">1:1</th>
            <th scope="col">2:1</th>
          </tr>
        </thead>
        <tbody>
          {lessonPrices.map((item) => (
            <tr key={item.duration}>
              <th scope="row">{item.duration}</th>
              <td>{item.oneToOne}</td>
              <td>{item.twoToOne}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="price-table-link" to="/contact">가격 문의하기 <ArrowUpRight size={17} /></Link>
    </div>
  )
}

function IncludedItems() {
  return (
    <aside className="included">
      <p className="eyebrow">모든 수업에 포함되는 내용</p>
      {includedItems.map((item) => (
        <p key={item}>
          <Check size={16} />
          {item}
        </p>
      ))}
    </aside>
  )
}

export function PricingPage() {
  return (
    <div className="page-width interior-page">
      <section className="page-heading compact-heading">
        <p className="eyebrow">수업 안내</p>
        <h1>
          당신에게 맞는
        </h1>
        <h1>
          <em>한 번의 활강.</em>
        </h1>
        <p className="lede">현재 실력과 목표를 먼저 듣고 가장 좋은 코스를 제안합니다.</p>
      </section>

      <section className="price-layout">
        <PriceTable />
        <IncludedItems />
      </section>

      <section className="price-note" id="intermediate-lesson">
        <SectionIntro
          eyebrow="중급자 맞춤 수업"
          title={
            <>
              중급자에게 <br /> 맞춰서도 가능합니다.
            </>
          }
          copy="중급자 수업은 추가 금액이 발생하며, 자세한 내용은 문의해주세요."
        />
        <Link className="button button-dark" to="/contact">
          맞춤수업 문의하기
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </div>
  )
}