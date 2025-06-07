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
          <h2>Data Science</h2>
          <p>
            I'm currently a Data Scientist at <a target="_blank" rel="noopener noreferrer" href="https://www.dataiku.com/" class="link">Dataiku</a>, where I lead the development of production-grade AI solutions for Fortune 500 companies.
            My work spans aviation, banking, insurance, and retail—leveraging NLP, computer vision, time series forecasting, and large language models (LLMs) to automate workflows and deliver measurable business impact.
          </p>
          <p>
            I’ve delivered over 15 end-to-end AI solutions, created custom plugins to extend Dataiku's capabilities, and trained more than 100 client stakeholders on the use of data science platforms. 
            As a Data Scientist in Residence at a major airline, I developed and formalized their MLOps framework, aligning it with CI/CD and security standards to enable successful AI project deployment across departments.
          </p>
          <p>
            What distinguishes me is the scientific mindset I bring to every project—deep curiosity, structured problem solving, and a focus on long-term solutions. My experience working with cross-functional teams allows me to translate complex technical ideas into practical tools that empower others and deliver real value.
          </p>

          <h2>Scientific Research</h2>
          <p>
            I completed my M.S. Thesis in Mechanical Engineering at the University of Colorado, Boulder in August 2022
            (Advisor: <a target="_blank" rel="noopener noreferrer" href="https://www.colorado.edu/mechanical/nicole-labbe" class="link">Nicole J. Labbe</a>).
            My thesis <em>Alkyl end group effects on the thermal decomposition of oxymethylene ether fuel additives</em> focused
            on leveraging quantum chemistry simulations to understand how biofuel additives help reduce soot from diesel engines.
          </p>
          <p>
            To support this work, I built a high-performance computing pipeline using Python and Unix shell scripts to automate calculations on the <a target="_blank" rel="noopener noreferrer" href="https://www.colorado.edu/rc/resources/summit" class="link">RMACC Summit supercomputer</a>,
            cutting down manual setup time from weeks to minutes. This improved both efficiency and scalability in computational chemistry workflows.
          </p>
          <p>
            I hold a B.S. in Astrophysics from the University of Rochester, where I worked with <a target="_blank" rel="noopener noreferrer" href="https://www.sas.rochester.edu/pas/people/faculty/gourdain_pierre/index.html" class="link">Pierre-Alexandre Gourdain</a> in the Extreme State Physics Laboratory. 
            There, I helped design and build a 250 GW pulsed-power driver to study matter at extreme pressures and temperatures. 
          </p>
          <p>
            These research experiences trained me to approach problems methodically and to build reliable tools that support experimentation and insight. 
            They’re also the foundation of my strengths in critical thinking, technical communication, and system-level analysis—skills that I now apply daily as a data scientist.
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
