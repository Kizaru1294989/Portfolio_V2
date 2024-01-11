import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import codechefLogo from '../../assets/images/codechef.png'
import Linkedin from '../../assets/images/linkedin.png'
import Download from '../../assets/images/circle-down-regular.svg'
import Git from '../../assets/images/icons8-github-64.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <Link   to="/">
          <img src={LogoS} style={{display : 'flex'  , margin : '5px' ,  marginBottom : '10px',  width : '50px' , height : '50px' , borderRadius : '50px'}}  alt="Logo" />
        </Link>
     
        <nav>
          <p style={{display : 'block' , marginTop : '-440px' }}>

          <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sudip-banerjee-300b691bb/"
              target="_blank"
              rel="noreferrer"
            >
                <img src={Linkedin} width="24" alt="Codechef" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/metal-oopa"
              target="_blank"
              rel="noreferrer"
            >
                    <img src={Git} width="24" alt="Codechef" />
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/metal_oopa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={codechefLogo} width="24" alt="Codechef" />
            </a>
          </li>
        </ul>

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
              
                  <img src={Download} width="24" alt="Codechef" />
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
