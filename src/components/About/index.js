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
import myCV from '../../assets/CV_Andres__2025____Industry.pdf'
import './index.scss'

const tracks = {
  data: [
    {
      title: 'Applied AI at Dataiku',
      detail:
        'Lead production AI for Fortune 500 clients—NLP, computer vision, time series, LLM automations.',
      tools: 'Python, SQL, Dataiku, Docker, Airflow, GCP/AWS',
      link: '/#/portfolio',
    },
    {
      title: 'Airline Data Scientist in Residence',
      detail:
        'Formalized MLOps with CI/CD and security so teams could ship safely and repeatedly.',
      tools: 'Feature stores, monitoring, governance',
      link: '/#/portfolio',
    },
    {
      title: 'Plugins & enablement',
      detail:
        'Built platform plugins and trained 100+ stakeholders to self-serve on DS/ML projects.',
      tools: 'Python, UX for data tools, technical teaching',
      link: '/#/portfolio',
    },
  ],
  research: [
    {
      title: 'M.S. Mechanical Engineering, CU Boulder',
      detail:
        'OME fuel research using quantum chemistry; advisor: Nicole J. Labbe.',
      tools: 'Python, Gaussian, kinetic modeling',
    },
    {
      title: 'HPC pipelines',
      detail:
        'Automated Summit supercomputer workflows with Python + Unix, cutting setup from weeks to minutes.',
      tools: 'Batch scheduling, automation, reproducibility',
    },
    {
      title: 'B.S. Astrophysics, U. Rochester',
      detail:
        'Built a 250 GW pulsed-power driver in the Extreme State Physics Lab.',
      tools: 'Experimental design, instrumentation, analysis',
    },
  ],
}

const skills = [
  'Python',
  'SQL',
  'Dataiku',
  'LLMs',
  'Docker',
  'Airflow',
  'Linux',
  'Git',
  'GCP/AWS',
  'MLOps',
  'Computer Vision',
  'Time Series',
]

const timeline = [
  {
    year: '2022 — 2025',
    title: 'Data Scientist, Dataiku',
    text: 'Applied AI for Fortune 500 clients; plugins and enablement.',
  },
  {
    year: '2024',
    title: 'Data Scientist in Residence (Major U.S. Airline)',
    text: 'Established MLOps framework with CI/CD and security.',
  },
  {
    year: '2020-2022',
    title: 'M.S. Mechanical Engineering, CU Boulder',
    text: 'OME fuel research; HPC automation for quantum chemistry.',
  },
  {
    year: '2015-2019',
    title: 'B.S. Astrophysics, U. Rochester',
    text: 'Built 250 GW pulsed-power driver in Extreme State Physics Lab.',
  },
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeTab, setActiveTab] = useState('data')

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="hero simple">
          <div className="hero-text">
            <p className="eyebrow">Data scientist / ML engineer</p>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'About me'.split('')}
                idx={15}
              />
            </h1>
            <p className="lede">
              I build production AI—LLMs, NLP, computer vision, and time series—for
              Fortune 500 teams. I focus on repeatable MLOps and measurable impact.
            </p>
            <div className="cta-row">
              <a
                className="btn primary"
                href={myCV}
                target="_blank"
                rel="noopener noreferrer"
              >
                My CV
              </a>
              <a className="btn primary" href="/#/portfolio">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="quick-stats">
          {[
            {
              value: '15+',
              label: 'AI solutions shipped',
              detail: 'End-to-end, production-grade',
            },
            {
              value: '100+',
              label: 'People trained',
              detail: 'Stakeholders enabled on DS/ML',
            },
            {
              value: '$1M+',
              label: 'Services revenue',
              detail: 'Delivered through AI programs',
            },
            {
              value: 'Multi-industry',
              label: 'Aviation, banking, retail, insurance',
              detail: 'NLP, CV, forecasting, LLMs',
            },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="tabs">
          <div className="tab-buttons">
            <button
              className={activeTab === 'data' ? 'active' : ''}
              onClick={() => setActiveTab('data')}
            >
              Data Science
            </button>
            <button
              className={activeTab === 'research' ? 'active' : ''}
              onClick={() => setActiveTab('research')}
            >
              Research & Education
            </button>
          </div>
          <div className="tab-grid">
            {tracks[activeTab].map((item) => (
              <div className="tab-card" key={item.title}>
                <p className="tab-title">{item.title}</p>
                <p className="tab-text">{item.detail}</p>
                <p className="tab-tools">{item.tools}</p>
                {item.link && (
                  <a className="tab-link" href={item.link}>
                    View portfolio
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-row">
          <div className="skills">
            <div className="section-head">
              <h2>Skills & Tech Stack</h2>
              <p>Tools and focus areas I specialize in.</p>
            </div>
            <div className="badge-wall">
              {skills.map((skill) => (
                <span className="badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
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

        <div className="timeline">
          <div className="section-head">
            <h2>Timeline</h2>
            <p style={{fontSize: '16px'}}>Key roles and how they shaped my work.</p>
          </div>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="dot" />
                <div className="content">
                  <p className="year">{item.year}</p>
                  <p className="title">{item.title}</p>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default About
