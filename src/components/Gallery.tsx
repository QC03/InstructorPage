import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

type ImageItem = { src: string; alt: string }

export function Gallery({ items, className = '' }: { items: readonly ImageItem[]; className?: string }) {
  return (
    <div className={`gallery ${className}`}>
      {items.map((item, index) => (
        <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}>
          <img
            src={item.src}
            alt={item.alt}
            loading={index > 1 ? 'lazy' : 'eager'}
          />
        </figure>
      ))}
    </div>
  )
}

export function ReviewStrip({ items }: { items: readonly ImageItem[] }) {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)

  useEffect(() => {
    if (!selectedItem) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedItem(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  useEffect(() => {
    if (!selectedItem) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [selectedItem])

  return (
    <>
      <div className="review-strip">
      {items.map((item) => (
        <button className="review-thumbnail" key={item.src} type="button" onClick={() => setSelectedItem(item)} aria-label={`${item.alt} 크게 보기`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </button>
      ))}
      </div>
      {selectedItem && <div className="image-modal" role="dialog" aria-modal="true" aria-label="후기 이미지 확대" onClick={() => setSelectedItem(null)}>
        <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
          <button className="image-modal-close" type="button" onClick={() => setSelectedItem(null)} aria-label="이미지 닫기"><X size={22} /></button>
          <img src={selectedItem.src} alt={selectedItem.alt} />
        </div>
      </div>}
    </>
  )
}