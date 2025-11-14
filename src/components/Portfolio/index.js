import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faFileAlt, faSatelliteDish, faAtom } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Modal from '../Modal'
import portfolioData from '../../Data/portfolio.json'
import './index.scss'

const iconMap = {
  plane: faPlane,
  file: faFileAlt,
  satellite: faSatelliteDish,
  atom: faAtom
}

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [selectedProject, setSelectedProject] = useState(null)

  // function to open modal with a given project
  const openProject = (project) => {
    setSelectedProject(project);
  };
  // function to close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div
            className="image-box"
            key={idx}
            tabIndex="0"
            role="button"
            aria-label={`Open project: ${port.title}`}
            onClick={() => openProject(port)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openProject(port)
              }
            }}
          >
            <img
              src={port.cover}
              className="portfolio-image"
              alt={port.title}
              loading="lazy"
            />
            <div className="content">
              <p className="title">
                <FontAwesomeIcon
                  icon={iconMap[port.icon]}
                  className="project-icon"
                />
                {port.title}
              </p>
              <h4 className="description">{port.description}</h4>
              <button
                type="button"
                className="btn"
                aria-label={`Open ${port.title} case study`}
                onClick={(e) => {
                  e.stopPropagation()
                  openProject(port)
                }}
              >
                View case study
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={"Projects".split("")} idx={6} />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolios)}</div>
      </div>
      {selectedProject && (
        <Modal
          open={Boolean(selectedProject)}
          data={selectedProject}
          onClose={closeModal}
        />
      )}

      <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}

export default Portfolio
