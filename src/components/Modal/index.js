import './index.scss'
import { useEffect, useRef } from 'react'

const Modal = ({ open, onClose, data }) => {
  const modalRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!open || !data) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div className="portfolio-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <h1>{data.title}</h1>

        {data.introduction && (
          <>
            <h2>Introduction</h2>
            <p dangerouslySetInnerHTML={{ __html: data.introduction }} />
          </>
        )}

        {data.motivation && (
          <>
            <h2>Motivation</h2>
            <p>{data.motivation}</p>
          </>
        )}

        {data.results && (
          <>
            <h2>Results &amp; Conclusions</h2>
            {Array.isArray(data.results) ? (
              data.results.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))
            ) : (
              <p dangerouslySetInnerHTML={{ __html: data.results }} />
            )}
          </>
        )}

        {data.images && data.images.length > 0 && (
          <div className="modal-image-gallery">
            {data.images.map(({ src, alt, caption }, idx) => (
              <figure key={idx}>
                <img src={src} alt={alt} />
                {caption && <figcaption>{caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
