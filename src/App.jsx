import { useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PreLoader />
      <Header />
      <Nav />
      <About />
    </div>
  );
}

export default App;
