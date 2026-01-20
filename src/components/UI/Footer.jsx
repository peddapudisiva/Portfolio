import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>&copy; 2026 Siva Sankara Vara Prasad Peddapudi. All rights reserved.</p>
                        <p className="footer-tagline">Building the future with AI & ML</p>
                    </div>

                    <div className="footer-links">
                        <a
                            href="https://github.com/peddapudisiva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/peddapudi-siva-5781b32ba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:peddapulisiva515@gmail.com"
                            className="footer-link"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
