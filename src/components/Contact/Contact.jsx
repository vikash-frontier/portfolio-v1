import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect, useRef } from "react";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import "./Contact.css";

const Contact = () => {
  //data-aos="zoom-out"

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>vikash810917@gmail.com</h5>
            <a
              href="mailto:vikash810917@gmail.com"
              target=" rel='noreferrer'_blank"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=9398634953"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
