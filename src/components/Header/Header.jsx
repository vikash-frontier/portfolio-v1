import React, { useCallback } from "react";
import "./Header.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineCaretDown } from "react-icons/ai";
import {
  nextLogo,
  reactLogo,
  tailwindLogo,
  typeScriptLogo,
} from "../../assets";

const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <header>
      <div className="background_words">
        <img className="wiggle" src={nextLogo} alt="NextJS" />
        <img className="wiggle" src={reactLogo} alt="React" />
        <img className="wiggle" src={typeScriptLogo} alt="typescript" />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        width="100vw"
        height="100vh"
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 5.0,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 805,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },

          detectRetina: true,
        }}
      />
      <div className="container header_container">
        <div className="header_info">
          <motion.h2
            className="static_header_name"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 3 }}
          >
            Hello I'm{" "}
          </motion.h2>

          <h3
            style={{ color: "white", fontWeight: "bold", fontSize: "1.7rem" }}
          >
            {/* Style will be inherited from the parent element */}

            <Typewriter
              options={{
                strings: ["Vikash Kumar", "a Front End React Dev"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <a href="#about">
            <div className="scroll-down"></div>
          </a>

          <CTA />
        </div>
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          <AiOutlineCaretDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
