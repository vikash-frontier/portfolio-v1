import { useState } from "react";
import "./App.css";
import PreLoader from "./components/Preloader/PreLoader";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PreLoader />
      <Header />
    </div>
  );
}

export default App;
