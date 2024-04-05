import React, { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";
import Arrow from "./Arrow"
import ArrowBack from "./ArrowBack";


const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const otherComponentRef = useRef(null);
  const otherComponentRefs = useRef(null);
  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // style={{ overflowX: "auto", whiteSpace: "nowrap" }}
  return (
    <>
      <div className="container skills-page" ref={otherComponentRefs}>
      <Arrow  scrollTargetRef={otherComponentRef}/>
      <div className="tagcloud-wrap">
          <WordCloud />
        </div>
        <div className="text-zone"  >
          
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I love to keep a variety of tools in my tech stack. I also make sure
            to be pro at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around.
          </p>
          <p>
            Looking for a role in a company with the opportunity to work with
            the latest technologies on challenging and diverse projects.
          </p>
   
        </div>

        <div ref={otherComponentRef}>
        <h1>PART 2</h1>
        <ArrowBack scrollTargetRef={otherComponentRefs}/>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
