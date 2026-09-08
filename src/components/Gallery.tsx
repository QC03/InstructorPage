type ImageItem = { src: string; alt: string }

export function Gallery({ items, className = '' }: { items: readonly ImageItem[]; className?: string }) {
  return <div className={`gallery ${className}`}>{items.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}><img src={item.src} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} /></figure>)}</div>
}

export function ReviewStrip({ items }: { items: readonly ImageItem[] }) {
  return <div className="review-strip">{items.map((item) => <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}</div>
}