import Info from './sections/Info';
import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Footer from "./sections/Footer";
import "./styles/App.css";
import Navi from './sections/Navbar';
import About from './sections/About';
import CustomCursor from './components/CustomCursor';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [isScrollable, setIsScrollable] = useState(true);
  const [navPosition, setNavPosition] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');


  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById('back');

      if (resumeSection) {
        const resumeOffsetTop = resumeSection.getBoundingClientRect().top + window.scrollY; // Get offset from the top
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
      <div className="vertical-nav" style={isDesktop ? { position: isScrollable ? 'absolute' : 'fixed', top: isScrollable ? navPosition : 0}:{}}>
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
