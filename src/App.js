import { useState, useEffect } from 'react'
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingNav from './components/Floating Nav/FloatingNav';

import Learnings from './components/Learnings/Learnings';
import Projects from './components/Projects/Projects';
import TopNav from './components/Top Nav/TopNav';
import HomeTwo from './components/New Home/HomeTwo';

function App() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 850) {
        setShadow(true)
      } else {
        setShadow(false);
      }
    });
  }, [])
  return (
    <><TopNav shadow={shadow}/>
          <HomeTwo />
        <FloatingNav />
          <About />
          <Learnings />
          <Projects />
          <Contact />
          <Footer />
    </>
  );
}

export default App;
