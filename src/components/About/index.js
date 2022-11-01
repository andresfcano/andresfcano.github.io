import { useEffect, useState } from 'react'
import {
  faPython,
  faLinux,
  faGitAlt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <h2>Scientific Research</h2>
          <p>
            Over three years of experience in scientific research in both my undergraduate and graduate degrees
            which culminated in two first author publications (under review). My undergraduate research work was in experimental plasma physics,
            studying extreme state physics at <a target="_blank" rel="noopener noreferrer" href="https://gourdain.pas.rochester.edu/" class="link">XSPL</a>.
            My graduate thesis work at the <a target="_blank" rel="noopener noreferrer" href="https://www.thelabbelab.com/" class="link">Labbe Lab</a> focused on biofuels,
            specifically studying the combustion behavior of soot-reducing diesel additives with computational chemistry methods.
          </p>
          <h2>Data Science</h2>
          <p>
            Industry and academic experience with relational databases, namely with Microsoft SQL Server. My previous
            role as a Data Scientist involved querying, importing, analyzing, and extracting insights on sales data using Python.
            The data was made accessible by deploying a business intelligence app that showcased our products compared to those
            of competitros using web scraping tools like <em>Beautiful Soup</em> and <em>Selenium</em>.
          </p>
          <h2>Machine Learning in Python</h2>
          <p>
            I've leveraged Python libraries (numpy, pandas, sklearn) in my research work to build classical machine learning models
            (i.e. KNN, ensemble methods, regressors) to extract knowledge from experiments. In personal projects, I've used basic NLP
            libraries (Vader, TextBlob) to perform sentiment analysis on online posts, and have build extensions to open-spurce neural
            networks codes to enable Chess engines to play the <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Millennium_3D_chess" class="link">Millenium 3D Chess</a> variation.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default About
