import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineRocket } from "react-icons/ai";
import { motion } from "framer-motion";
import { BiBook } from "react-icons/bi";
import { RiMessage2Line, RiServiceFill } from "react-icons/ri";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

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
          href="#skills0" // Updated to match the id of "Skills0"
          onClick={() => setActiveNav("#skills0")} // Updated to match the id of "Skills0"
          className={activeNav === "#skills0" ? "active" : ""}
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
