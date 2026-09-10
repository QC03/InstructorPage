

import { ReviewStrip } from '../components/Gallery'
import { siteContent } from '../content/site'

function Reviews() {
    return (
        <section id="reviews" className="reviews page-width">
            <div className="split-heading">
                <div>
                <p className="eyebrow">수강생 후기</p>
                <p className="review-label">수강생의 후기를 직접 확인해 보세요.</p>
                </div>
                <p className="reviews-note">실제 수업 후 남겨주신 후기입니다.</p>
            </div>
            <ReviewStrip items={siteContent.testimonials} />
        </section>
    )
}

export default Reviews