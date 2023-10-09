import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineRocket } from "react-icons/ai";
import { motion } from "framer-motion";
import { BiBook } from "react-icons/bi";
import { RiMessage2Line, RiServiceFill } from "react-icons/ri";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      const sectionPositions = {
        "#": 0, // Home
        "#about": document.getElementById("about").offsetTop,
        "#experience": document.getElementById("experience").offsetTop,
        "#skills": document.getElementById("skills").offsetTop,
        "#portfolio": document.getElementById("portfolio").offsetTop,
        "#contact": document.getElementById("contact").offsetTop,
      };

      let visibleSection = "#";
      for (let section in sectionPositions) {
        if (scrollPosition >= sectionPositions[section]) {
          visibleSection = section;
        }
      }

      setActiveNav(visibleSection);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ x: "-100vw" }}
        animate={{ x: "-12vw" }}
        transition={{ type: "spring", bounce: 0.3, duration: 3 }}
      >
        <a
          title="Home"
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          title="About Me"
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          title="Experience"
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <AiOutlineRocket />
        </a>
        <a
          title="Skills"
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          title="Portfolio"
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <RiServiceFill />
        </a>
        <a
          title="Contact"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <RiMessage2Line />
        </a>
      </motion.nav>
    </div>
  );
};

export default Nav;
