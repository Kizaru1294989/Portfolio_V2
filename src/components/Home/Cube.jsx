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


export const Cube = () => {
    return (
    <div className="stage-cube-cont">
    <div className="cubespinner">
      <div className="face1">
        <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
      </div>
      <div className="face2">
        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face5">
        <FontAwesomeIcon icon={faLinux} color="#EFD81D" />
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
    </div>
  </div>
    )
}