import React, { useEffect } from "react";
import Home from './views/Home';
import About from './views/About';
import Footer from './views/Footer';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';
import locomotiveScroll from "locomotive-scroll";

function App() {

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smoothMobile: true
    });

    // section targets
    const homeTarget = document.querySelector('#homeSection');
    const aboutTarget = document.querySelector('#about');
    const skillsTarget = document.querySelector('#skills');
    const portfolioTarget = document.querySelector('#portfolio');
    const footerTarget = document.querySelector('#footer');

    // scroll to section buttons
    const homeTargetButton = document.getElementById('homeLink');
    const aboutTargetButton = document.getElementById('aboutLink');
    const skillsTargetButton = document.getElementById('skillsLink');
    const portfolioTargetButton = document.getElementById('portfolioLink');
    const footerTargetButton = document.getElementById('footerLink');

    // mobile scroll to section buttons
    const mobileHomeTargetButton = document.getElementById('mobileHomeLink');
    const mobileAboutTargetButton = document.getElementById('mobileAboutLink');
    const mobileSkillsTargetButton = document.getElementById('mobileSkillsLink');
    const mobilePortfolioTargetButton = document.getElementById('mobilePortfolioLink');
    const mobileFooterTargetButton = document.getElementById('mobileFooterLink');

    // main scroll buttons
    homeTargetButton.addEventListener('click', () => {
      scroll.scrollTo(homeTarget)
    });

    aboutTargetButton.addEventListener('click', () => {
      scroll.scrollTo(aboutTarget);
    });

    skillsTargetButton.addEventListener('click', () => {
      scroll.scrollTo(skillsTarget);
    });

    portfolioTargetButton.addEventListener('click', () => {
      scroll.scrollTo(portfolioTarget);
    });

    footerTargetButton.addEventListener('click', () => {
      scroll.scrollTo(footerTarget);
    });

    // mobile scroll buttons
    let closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]');
    
    mobileHomeTargetButton.addEventListener('click', () => {
      scroll.scrollTo(homeTarget);
      closeCanvas.click();
    });

    mobileAboutTargetButton.addEventListener('click', () => {
      scroll.scrollTo(aboutTarget);
      closeCanvas.click();
    });

    mobileSkillsTargetButton.addEventListener('click', () => {
      scroll.scrollTo(skillsTarget);
      closeCanvas.click();
    });

    mobilePortfolioTargetButton.addEventListener('click', () => {
      scroll.scrollTo(portfolioTarget);
      closeCanvas.click();
    });

    mobileFooterTargetButton.addEventListener('click', () => {
      scroll.scrollTo(footerTarget);
      closeCanvas.click();
    });
  });

  return (
    <main data-scroll-container>
      <Home/>
      <About/>
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;