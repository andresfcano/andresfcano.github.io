import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/atom.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          end
          onClick={() => setShowNav(false)}
          aria-label="Home" 
          title="Home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')}
          to="/about"
          onClick={() => setShowNav(false)}
          aria-label="About" 
          title="About">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active portfolio-link' : 'portfolio-link')}
          to="/portfolio"
          onClick={() => setShowNav(false)}
          aria-label="Projects" 
          title="Projects">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}
          to="/contact"
          onClick={() => setShowNav(false)}
          aria-label="Contact" 
          title="Contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/andresfelipecano/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/andresfcano"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
