import { useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PreLoader />
      <Header />
      <Nav />
      <About />
      <Experience />
    </div>
  );
}

export default App;
