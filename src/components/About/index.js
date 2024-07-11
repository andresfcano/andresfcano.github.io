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
            I completed my M.S. Thesis in Mechanical Engineering at the University of Colorado, Boulder in August 2022
            (Advisor: <a target="_blank" rel="noopener noreferrer" href="https://www.colorado.edu/mechanical/nicole-labbe" class="link">Nicole J. Labbe</a>).
            My thesis <em>Alkyl end group effects on the thermal decomposition of oxymethylene ether fuel additives</em> focused
            on leveraging computational chemistry tools to improve chemistry models of additives that reduce
            soot formation in diesel engines. I graduated from the University of Rochester in 2019 with a B.S. in Astrophysics, where I worked for two years
            with <a target="_blank" rel="noopener noreferrer" href="https://www.sas.rochester.edu/pas/people/faculty/gourdain_pierre/index.html" class="link">Pierre-Alexandre Gourdain</a> studying extreme state physics.
          </p>
          <h2>Data Science</h2>
          <p>
            I worked as a Data Scientist before starting my masters, where gaining experience with relational databases, namely with Microsoft SQL Server.
            My responsibilities involved querying, importing, analyzing, and extracting insights on sales data, as well as developing Python-based
            machine learning models that would predict market trends. Together with the web development team, I deployed a business intelligence app
            that showcased our products compared to those of competitors using web scraping tools like <em>Beautiful Soup</em> and <em>Selenium</em>.
          </p>
          <h2>Machine Learning in Python</h2>
          <p>
            I've leveraged Python libraries (numpy, pandas, sklearn) in my research work to build classical machine learning models
            (i.e. KNN, ensemble methods, regressors) to extract knowledge from experiments. In personal projects, I've used basic NLP
            libraries (Vader, TextBlob) to perform sentiment analysis on online posts, and have build extensions to open-source neural
            networks codes to enable Chess engines to play the <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Millennium_3D_chess" class="link">Millenium 3D Chess</a> variation.
            The cube on the right shows the technologies that I've used in my past work.
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
