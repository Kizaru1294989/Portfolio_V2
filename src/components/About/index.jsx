/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faLinux,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ciscoimg from '../../assets/images/cisco.svg'
import './index.scss'

const About = () => {
  const aboutArray = 'A Propos de moi'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Je suis un étudiant a l'école supérieur du génie informatique spécialisé dans la Cybersécurité
          </p>
          <p>
            Je dévloppe
          </p>
          <p>
            I
          </p>
          <p>I</p>
          <p>
            I
          </p>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
