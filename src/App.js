import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import MyNavbar from "./components/Navbar";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const aboutref = useRef(null);
  const aboutClick = ()=>{
    aboutref.current?.scrollIntoView({ behavior: "smooth" });
  }
  const homeref = useRef(null);
  const homeClick = ()=>{
    homeref.current?.scrollIntoView({ behavior: "smooth" });
  }
  const projectref = useRef(null);
  const projectClick = ()=>{
    projectref.current?.scrollIntoView({ behavior: "smooth" });
  }
  const contactref = useRef(null);
  const contactClick = ()=>{
    contactref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <MyNavbar aboutClick={aboutClick} homeClick={homeClick} projectClick={projectClick} contactClick={contactClick}></MyNavbar>
      <Home homeref={homeref}></Home>
      <About aboutref={aboutref}></About>
      <Projects projectref={projectref}></Projects>
      <Contact contactref={contactref}></Contact>
    </div>
  );
}

export default App;
