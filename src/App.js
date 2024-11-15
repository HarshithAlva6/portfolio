import Info from './page/info';
import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import Projects from "./page/projects";
import Resume from "./page/resume";
import Footer from "./page/footer";
import "./App.css";
import Navi from './page/navi';
import About from './page/about';

function App() {
  const [isScrollable, setIsScrollable] = useState(true);
  const [navPosition, setNavPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById('back');

      if (resumeSection) { // Check if resumeSection is not null
        const resumeOffsetTop = resumeSection.getBoundingClientRect().top + window.scrollY; // Get offset from the top
        console.log(resumeSection.getBoundingClientRect().top);
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Check if the Resume section is in the viewport
        if (window.scrollY >= resumeOffsetTop && window.scrollY < documentHeight - windowHeight) {
          setIsScrollable(true);
          setNavPosition(resumeOffsetTop); // Update position
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
      <div className="vertical-nav" style={window.innerWidth > 768 ? { position: isScrollable ? 'absolute' : 'fixed', top: isScrollable ? navPosition : 0}:{}}>
        <Navi />
      </div>
      <div className='content'>
      <Info />
      <Projects />
      <Resume id="back"/>
      <About />
      <Footer />
      </div>
    </div>
  );
}

export default App;
