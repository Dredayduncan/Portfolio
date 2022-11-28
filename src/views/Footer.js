import React from 'react';

function Footer(){
    return <footer id="footer" data-scroll-section>
        <div id="foot" className="container">
            <div className="row justify-content-center">
                        <div className="col-md-3 footer-contact">
                            <p className="name">Andrew Duncan.</p>
                            <p>
                                Software Engineer & Mobile Application Developer
                            </p>
                        </div>

                        <div className="col-md-3 footer-links">
                            <h5>Useful Links</h5>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#home">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about">About</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#skills">Skills</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#footer">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 footer-links">
                            <h5>Social Media</h5>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dredayduncan/">linkedin</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dredayduncan">GitHub</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/2d_dreday">Twitter</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/2d_dreday/">Instagram</a></li>
                                {/* <li><i className="bx bx-chevron-right"></i> <a target="_blank" rel="noreferrer" href="#">Graphic Design</a></li> */}
                            </ul>
                        </div>

                        <div className="col-md-3 footer-links">
                            <h5>My Motivation</h5>
                            <p>"If you need inspiring words, don't do it" <br></br> - Elon Musk</p>
                        </div>

                    </div>

        </div>  

    </footer>;
}

export default Footer;