import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { X } from 'lucide-react'

type ImageItem = { src: string; alt: string }

function useImageModal(selectedItem: ImageItem | null, setSelectedItem: Dispatch<SetStateAction<ImageItem | null>>) {
  useEffect(() => {
    if (!selectedItem) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, setSelectedItem])

  useEffect(() => {
    if (!selectedItem) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [selectedItem])
}

function ImageModal({ item, label, onClose }: { item: ImageItem; label: string; onClose: () => void }) {
  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="image-modal-close" type="button" onClick={onClose} aria-label="이미지 닫기">
          <X size={22} />
        </button>
        <img src={item.src} alt={item.alt} />
      </div>
    </div>
  )
}

export function Gallery({ items, className = '' }: { items: readonly ImageItem[]; className?: string }) {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  useImageModal(selectedItem, setSelectedItem)

  return (
    <>
      <div className={`gallery ${className}`}>
        {items.map((item, index) => (
          <button className={`gallery-item gallery-item-${index + 1}`} type="button" key={item.src} onClick={() => setSelectedItem(item)} aria-label={`${item.alt} 크게 보기`}>
            <img src={item.src} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} />
          </button>
        ))}
      </div>
      {selectedItem && <ImageModal item={selectedItem} label="강습 사진 확대" onClose={() => setSelectedItem(null)} />}
    </>
  )
}

export function ReviewStrip({ items }: { items: readonly ImageItem[] }) {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  useImageModal(selectedItem, setSelectedItem)

  return (
    <>
      <div className="review-strip">
        {items.map((item) => (
          <button className="review-thumbnail" key={item.src} type="button" onClick={() => setSelectedItem(item)} aria-label={`${item.alt} 크게 보기`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {selectedItem && <ImageModal item={selectedItem} label="후기 이미지 확대" onClose={() => setSelectedItem(null)} />}
    </>
  )
}