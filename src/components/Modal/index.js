import './index.scss'
import React, { useEffect, useRef } from 'react'
import useFocusTrap from '../../hooks/useFocusTrap'

const Modal = ({ open, onClose, data }) => {
  const modalRef = useRef(null)
  const openerRef = useRef(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Close on Escape key, but only when open
  useEffect(() => {
    if (!open) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  // Remember the element that opened the modal and restore focus on close
  useEffect(() => {
    if (open) {
      // element that had focus just before modal opened
      openerRef.current = document.activeElement
    } else {
      // when closing, restore focus if possible
      openerRef.current?.focus?.()
    }
  }, [open])

  // Trap focus inside the dialog while open
  useFocusTrap(modalRef, open)

  if (!open || !data) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="portfolio-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        onClick={(e) => e.stopPropagation()}  // prevent closing when clicking inside
      >
        <button
          type="button"
          className="close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>

        <h1 id="modal-title">{data.title}</h1>

        <div id="modal-desc">
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
    </div>
  )
}

export default Modal
