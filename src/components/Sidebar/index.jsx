import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import codechefLogo from '../../assets/images/codechef.png'
import LogoSubtitle from '../../assets/images/Sudip_logo_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Grid from '@mui/material/Grid';


const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link> */}
     
        <nav>
          <p style={{display : 'block' , marginTop : '-440px' }}>

          <NavLink   to="/">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          <NavLink  className="git-link"  activeclassname="active" to="/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </NavLink>

          <NavLink className="linkedin-link"  activeclassname="active" to="/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </NavLink>

          {/* <NavLink className="skills-link" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink> */}

          </p>
          
          <NavLink className="home-link" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="projets-link"
            to="/projets"
          >
            <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sudip-banerjee-300b691bb/"
              target="_blank"
              rel="noreferrer"
            >
              Doawnload PDF
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>

          <li>
          </li>
          
        </ul>
      </div>
    </>
  )
}

export default Sidebar
