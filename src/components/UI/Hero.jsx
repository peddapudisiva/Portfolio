import React, { useState, useEffect } from 'react';
import './Hero.css';
import { resumeData } from '../../assets/resumeData';

function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "AI & ML Undergraduate",
        "AI Intern",
        "Project-Based Learner",
        "Tech Enthusiast"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Siva Sankara Vara Prasad Peddapudi</span></h1>
                <p className="typewriter">{text}<span className="cursor">|</span></p>

                <div className="location">
                    <span className="pin">📍</span> Narasaraopet, Andhra Pradesh, India
                </div>

                <p className="description">
                    AI & ML Undergraduate building practical AI solutions through real-world projects.
                    <br />
                    Focused on machine learning, computer vision, and AI-driven automation.
                </p>

                <div className="cta-buttons">
                    <button
                        className="btn btn-primary"
                        onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        View Projects
                    </button>
                    <a
                        href="https://github.com/peddapudisiva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        GitHub
                    </a>
                    <a
                        href={resumeData}
                        download="Siva_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
