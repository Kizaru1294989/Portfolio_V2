/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faLinux,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ciscoimg from "../../assets/images/cisco.svg";
import ESGI from "../../assets/images/esgi.jpg";
import "./index.scss";

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
          <p>I</p>
          <p>I</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
