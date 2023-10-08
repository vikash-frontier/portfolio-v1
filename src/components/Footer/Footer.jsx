import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        {" "}
        Vikash Kumar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>

      <div className="footer_socials">
        <div whilehover={{ scale: 2.5 }}>
          <a
            href="https://www.linkedin.com/in/vikashkr-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <motion.div whilehover={{ scale: 1.1 }} onHoverStart={{ scale: 1.2 }}>
          <a
            href="https://www.instagram.com/btwitsme_v/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </motion.div>
        <div whilehover={{ scale: 1.1 }}>
          <a
            href="https://twitter.com/im_vikashkr"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div whilehover={{ scale: 1.1 }}>
          <a
            href="https://github.com/vikash-frontier"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Vikash Kumar. All rights reserved {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
