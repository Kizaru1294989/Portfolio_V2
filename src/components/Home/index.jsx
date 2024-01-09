import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
// import DisplacementSphere from '../background/DisplacementSphere'
import './index.scss'
import { SocialIcons } from '../Contact/SocialIcons'
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Cube } from './Cube'
import { motion, AnimatePresence } from 'framer-motion';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterName, setLetterName] = useState('name-animate')

  const nameArray = 'Ryan Rais'.split('')
  const jobArray = 'Fullstack Devloppeur'.split('')
  const interestArray = 'étudiant en cybersécurité'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterName('name-animate-hover')
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
       
            <AnimatedLetters
              letterClass={letterName}
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
            PRENNONS CONTACT
          </Link>
          <motion.div
             initial={{ x: '300%' , y : -340 }}
             animate={{ x: 0 , y : -340, }}
             exit={{ x: '300%' , y : -340 }}
             transition={{
               type: 'keyframe',
               stiffness: 260,
               damping: 20,
               duration: 3,
               delay: 1.5, // Délai de 4 secondes avant que l'animation commence
             }}
          >
          <Cube/>
          </motion.div>
          
          {/* <Logo/> */}
               {/* <Framer/> */}
          
        </div>
     
      </div>

      <Loader type="pacman" />
      </div>
    </>
  )
}

export default Home
