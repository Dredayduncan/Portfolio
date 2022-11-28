import React, { useEffect } from "react";
import Home from './views/Home';
import About from './views/About';
import Footer from './views/Footer';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';
import locomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


function App() {
      
  const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true
  //   });

  //   // scroll to work section
  //   const target = document.querySelector('#footer')
  //   const scrolltoBtn = document.querySelector('.foot');

  //   scrolltoBtn.addEventListener('click', () => {
  //     scroll.scrollTo(target)
  //   })
  // });

  const options = {
    smooth: true,
  } 
  

  return (
    <LocomotiveScrollProvider options={options} containerRef={scrollRef}>
      <main data-scroll-container>
        <Home/>
        <About/>
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;