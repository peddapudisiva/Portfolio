import React from 'react';
import './Skills.css';

function Skills() {
    const coreSkills = [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning (Basic)',
        'NLP',
        'Data Science',
        'Chatbot Development',
    ];

    const familiarWith = [
        'TensorFlow',
        'NLP Basics',
        'API-based Chatbots',
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills-grid">
                    <div className="skill-category glass-card">
                        <h3 className="text-gradient">Core Skills</h3>
                        <ul className="skill-list">
                            {coreSkills.map((skill, index) => (
                                <li key={index}>
                                    <span className="skill-bullet">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="skill-category glass-card">
                        <h3 className="text-gradient">Familiar With</h3>
                        <ul className="skill-list">
                            {familiarWith.map((skill, index) => (
                                <li key={index}>
                                    <span className="skill-bullet">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
