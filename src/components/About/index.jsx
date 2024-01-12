/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ciscoimg from "../../assets/images/cisco.svg";
import ESGI from "../../assets/images/esgi.jpg";
import "./index.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(40),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const About = () => {
  const aboutArray = "A Propos de moi".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Grid container className="container about-page">
        
        <Grid item xs={6} className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Je suis un étudiant de l'ESGI en cours de Master en Cybersécurité
            {/* <img src={ESGI} alt="" /> */}
          </p>

          <p>
            Malgré ma spécialisation en cybersécurité, ma curiosité pour le
            monde informatique s'étend à tous ses domaines. J'apprécie
            particulièrement le développement, car il me permet d'automatiser
            des infrastructures réseau tout en explorant le côté du
            développement web pour des tests de pénétration.
          </p>
          <p>
            Je mène en parallèle de mes études une activité de freelance
            dévloppement Web dont le but est de proposer des solutions web a des
            particuliers
          </p>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid style={{ display : 'flex' ,  justifyContent : 'center' , alignItems :'center'}} item  xs={6}>
          <Item>
            {/* <Grid style={{ backgroundColor : 'grey' , borderRadius : '25px' , padding : '5px'}}>Picture</Grid>
            <Grid style={{ backgroundColor : 'black' , borderRadius : '25px'}} >d</Grid> */}




          </Item>
        </Grid>

      </Grid>
      <Loader type="pacman" />
    </>
  );
};

export default About;
