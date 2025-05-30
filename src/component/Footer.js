import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../index.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Site Name */}
                <div className="footer-brand">
                    <h2>Rishabh Saini</h2>
                    <div className="footer-social">
                        {/* <h3>Follow Me</h3> */}
                        <a href="https://github.com/rishabh0422" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/rishabh-saini-6995a8319" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Page Links
                <div className="footer-links">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skill">Skill</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div> */}

                {/* Social Links */}

            </div>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
    );
}

export default Footer;
