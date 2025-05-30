// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
// import SkillBlock from "./component/SkillBlock";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
