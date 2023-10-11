import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect, useRef, useState } from "react";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { GrMail } from "react-icons/gr";
import { templateId, serviceId, publicKey } from "../../constants";
import { useInView } from "react-intersection-observer";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const { ref } = useInView({ threshold: 0.2 });

  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    const templeteParams = {
      from_name: name,
      from_email: email,
      to_name: "Vikash Kumar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templeteParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .then((err) => {
        console.log("Error sending email: ", err);
      });
  };

  return (
    <section ref={ref} id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div data-aos="zoom-out" className="container contact_container">
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
        <form onSubmit={sendEmailHandler}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
