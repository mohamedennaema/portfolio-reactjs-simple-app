import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          
        </div>

        <h1
         
          className="title"
        >
          Développeur Full Stack,
        </h1>

        <p className="sub-title">
        Je suis ENNAEM Mohamed, un développeur Full Stack passionné par la création d'applications web innovantes. Ma mission est d'utiliser mes compétences 
        techniques pour construire des solutions numériques puissantes et accessibles
        </p>

        
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
