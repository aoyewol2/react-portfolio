import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// components

import Navbar from './pages/Navbar';
import Floaters from './components/Floater';
import Home from "./pages/Hero"; 
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import './components/Animation';
import "./components/Home";
import Cursor from "./components/Cursor";

import './styles/App.css';
import './styles/Selectors.css';
import './styles/Query.css';
import './styles/Keyframes.css';
import './styles/Root.css';

// main app

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> }></Route>
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Floaters />
      <Cursor />
    </>
  );
};