import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>

                <div className="contact-content glass-card">
                    <p className="contact-intro">
                        I'm always open to discussing new projects, opportunities, or collaborations.
                        Feel free to reach out!
                    </p>

                    <div className="contact-methods">
                        <a href="mailto:peddapulisiva515@gmail.com" className="contact-link">
                            <span className="contact-icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>peddapulisiva515@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/peddapudisiva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <span className="contact-icon">💻</span>
                            <div>
                                <h4>GitHub</h4>
                                <p>peddapudisiva</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/peddapudi-siva-5781b32ba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <span className="contact-icon">💼</span>
                            <div>
                                <h4>LinkedIn</h4>
                                <p>Peddapudi Siva</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
