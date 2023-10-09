import { useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <PreLoader />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
