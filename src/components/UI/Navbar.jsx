import React, { useState } from 'react';
import './Navbar.css';
import { resumeData } from '../../assets/resumeData';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">SP</div>

                <div className="nav-controls">
                    {/* Hamburger Menu Button - Mobile Only */}
                    <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle menu">
                        <span className={isOpen ? 'open' : ''}></span>
                        <span className={isOpen ? 'open' : ''}></span>
                        <span className={isOpen ? 'open' : ''}></span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-nav">
                    {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                onClick={() => scrollToSection(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={resumeData}
                            download="Siva_Resume.pdf"
                            className="resume-link"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Sidebar */}
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links mobile-nav">
                        {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                            <li key={section}>
                                <a onClick={() => scrollToSection(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                            </li>
                        ))}
                        <li><a href={resumeData} download="Siva_Resume.pdf" className="resume-link">Resume</a></li>
                    </ul>
                </div>

                {/* Overlay - Mobile Only */}
                {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            </div>
        </nav>
    );
}
export default Navbar;
