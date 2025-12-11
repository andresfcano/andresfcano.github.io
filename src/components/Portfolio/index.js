import React, { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faFileAlt, faSatelliteDish, faAtom } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import portfolioData from '../../Data/portfolio.json'
import './index.scss'

const iconMap = {
  plane: faPlane,
  file: faFileAlt,
  satellite: faSatelliteDish,
  atom: faAtom,
}

const toTags = (description) =>
  description
    ? description
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : []

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter] = useState('All')
  const portfolios = portfolioData.portfolios || []

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'All') return portfolios
    return portfolios.filter((p) => p.icon === filter)
  }, [filter, portfolios])

  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(0)
  }, [filtered, activeIndex])

  const activeProject = filtered[activeIndex] || {}
  const highlights = Array.isArray(activeProject.results)
    ? activeProject.results
    : activeProject.results
    ? [activeProject.results]
    : []
  const tags = toTags(activeProject.description)

  const next = () => setActiveIndex((i) => (i + 1) % filtered.length || 0)
  const prev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length || 0)

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={'Projects'.split('')} idx={6} />
        </h1>

        <div className="carousel">
          <button className="nav prev" onClick={prev} aria-label="Previous project">
            ‹
          </button>

          <div className="track">
            {filtered.map((port, idx) => {
              const isActive = idx === activeIndex
              return (
                <div
                  key={port.title}
                  className={`card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveIndex(idx)
                    }
                  }}
                >
                  <div className="media" style={{ backgroundImage: `url(${port.cover})` }} />
                  <div className="card-body">
                    <div className="card-title">
                      <FontAwesomeIcon icon={iconMap[port.icon]} className="project-icon" />
                      <span>{port.title}</span>
                    </div>
                    <p className="card-subtitle">{port.description}</p>
                    <div className="tag-row">
                      {toTags(port.description)
                        .slice(0, 3)
                        .map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button className="nav next" onClick={next} aria-label="Next project">
            ›
          </button>
        </div>

        {activeProject && filtered.length > 0 && (
          <div className="details glass">
            <div className="details-header">
              <div>
                <p className="kicker">Case study</p>
                <h2>{activeProject.title}</h2>
                <p className="subtitle">{activeProject.description}</p>
              </div>
              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="detail-grid">
              <div className="panel">
                <h3>Context</h3>
                {activeProject.introduction && (
                  <p dangerouslySetInnerHTML={{ __html: activeProject.introduction }} />
                )}
                {activeProject.motivation && <p>{activeProject.motivation}</p>}
              </div>

              <div className="panel">
                <h3>Highlights</h3>
                <ul>
                  {highlights.slice(0, 4).map((h, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
                  ))}
                </ul>
              </div>

              {activeProject.images && activeProject.images.length > 0 && (
                <div className="panel gallery">
                  <h3>Gallery</h3>
                  <div className="thumbs">
                    {activeProject.images.map(({ src, alt, caption }, idx) => (
                      <figure key={idx}>
                        <img src={src} alt={alt} />
                        {caption && <figcaption>{caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
