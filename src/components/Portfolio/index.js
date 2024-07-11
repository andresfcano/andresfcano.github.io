import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Modal from '../Modal'
import portfolioData from '../../Data/portfolio.json'
import './index.scss'

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  })

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      // if (!event.target) {
      //
      // }
      setIsOpen(false)
    })
  })

  const renderPortfolio = (portfolio) => {
    return (
      <>
      <div className="images-container">
        {
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx} onClick={() => setIsOpen(true)}>
                <img src={port.cover} className="portfolio-image" alt="portfolio" />
                <div className="content">
                 <p className="title">{port.title}</p>
                 <h4 className="description">{port.description}</h4>
                 <button className="btn">
                 VIEW
                 </button>
                </div>
              </div>
            )
          })
        }
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </>
    )
  }

  return (
    <>
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={6} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={"& Publications".split("")} idx={6} />
      </h1>
      <div>{renderPortfolio(portfolioData.portfolios)}</div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Portfolio
