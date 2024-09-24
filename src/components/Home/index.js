import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import myCV from '../../assets/CV_Andres__Oct2024_.pdf'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = " Andres Cano".split("")
  const jobArray = "Data Scientist & Researcher".split("")

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={9}
            />
          </h1>
          <div className="home-buttons-container">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <a href={myCV} className="flat-button" target="_blank" rel="noopener noreferrer">MY CV</a>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Home
