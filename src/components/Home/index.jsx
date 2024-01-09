import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
// import DisplacementSphere from '../background/DisplacementSphere'
import { Framer } from '../Geometry/Framer'
import './index.scss'
import { SocialIcons } from '../Contact/SocialIcons'
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Ryan Rais'.split('')
  const jobArray = 'Fullstack Devlopper'.split('')
  const interestArray = 'étudiant en cybersécurité'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} id="home">
              <Hidden smDown>
          <SocialIcons />
        </Hidden>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Bon</span>
            <span className={`${letterClass} _12`}>jour,</span>
            <br />
            <span className={`${letterClass} _13`}>Je suis</span>
            <span className={`${letterClass} _14`}></span>
            {/* <img src={LogoTitle} alt="Sudip Banerjee" /> */}
       
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Etudiant en Cybersécurité
            
          </h2>
   
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
               {/* <Framer/> */}
          
        </div>
     
      </div>

      <Loader type="pacman" />
      </div>
    </>
  )
}

export default Home
