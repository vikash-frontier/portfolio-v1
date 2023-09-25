import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Me from "../../assets/Me.jpeg";
import "./About.css";
import { FiAward, FiUsers } from "react-icons/fi";
import { ImFolderPlus } from "react-icons/im";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="about_section" data-aos="fade-up-left" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div>
          <div className="about_me">
            <img className="about_me_image" src={Me} alt="AboutPicture" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />

              <h5>Experience</h5>

              <small>2+ Years Working</small>
            </article>

            <article className="about_card">
              <ImFolderPlus className="about_icon" />

              <h5>Projects</h5>

              <small>10+ Completed</small>
            </article>
          </div>

          <p className="para">
            An experienced React developer with a strong foundation in
            JavaScript, NextJS, and TailwindCSS. Possesses excellent
            adaptability and can work efficiently in both team and independent
            work environments, with a strong drive to master legacy technologies
            and explore new systems.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
