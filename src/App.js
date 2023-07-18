import { useState } from 'react'
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingNav from './components/Floating Nav/FloatingNav';

import Scroll from './components/Scroll';
import Projects from './components/Projects/Projects';
import TopNav from './components/Top Nav/TopNav';
import { useRef } from 'react';
import { useEffect } from 'react';
import Menu from './components/Menu/Menu';

function App() {
  const [shadow, setShadow] = useState("")
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            setShadow("shadow")
        } else {
          setShadow("");
        }
    });
}, []);

  return (
    <div>
      <TopNav shadow={shadow}/>
      <FloatingNav/>
      <div className='container'>
        <Home />
        <About />
        <Scroll />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
