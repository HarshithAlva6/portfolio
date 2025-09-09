import Info from './pages/info';
import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Footer from "./pages/footer";
import "./styles/App.css";
import Navi from './pages/navi';
import About from './pages/about';
import CustomCursor from './helpers/CustomCursor';

function App() {
  const [isScrollable, setIsScrollable] = useState(true);
  const [navPosition, setNavPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById('back');

      if (resumeSection) { 
        const resumeOffsetTop = resumeSection.getBoundingClientRect().top + window.scrollY; // Get offset from the top
        console.log(resumeSection.getBoundingClientRect().top);
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Check if the Resume section is in the viewport
        if (window.scrollY >= resumeOffsetTop && window.scrollY < documentHeight - windowHeight) {
          setIsScrollable(true);
          setNavPosition(resumeOffsetTop);
        } else if (window.scrollY >= documentHeight - windowHeight){
          setIsScrollable(true);
        }
          else {
          setIsScrollable(false);
          }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return ( 
    <div className="App">
      <CustomCursor />
      <div className="vertical-nav" style={window.innerWidth > 768 ? { position: isScrollable ? 'absolute' : 'fixed', top: isScrollable ? navPosition : 0}:{}}>
        <Navi />
      </div>
      <div className='content'>
      <Info />
      <Projects />
      <Resume/>
      <About />
      <Footer />
      </div>
    </div>
  );
}

export default App;
