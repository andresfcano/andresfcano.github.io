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
  const [selectedItem, setSelectedItem] = useState(null)

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
          <div className="image-box" key={idx} onClick={() => setSelectedItem(port)}>
            <img src={port.cover} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">
                <FontAwesomeIcon icon={iconMap[port.icon]} className="project-icon"/>
                {port.title}
              </p>
              <h4 className="description">
                {port.description}
              </h4>
              <button className="btn">VIEW</button>
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
      {selectedItem && (
        <Modal open={!!selectedItem} onClose={() => setSelectedItem(null)} data={selectedItem} />
      )}
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}

export default Portfolio
