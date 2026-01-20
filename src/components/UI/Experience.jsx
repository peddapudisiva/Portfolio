import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            role: 'AI Developer Intern',
            company: 'Swecha Telangana',
            contributions: [
                'Developed Python-based NLP tools for community-focused AI applications.',
                'Built chatbot and automation pipelines using open-source technologies.',
            ],
        },
        {
            role: 'AI Intern',
            company: 'Lambentix AI',
            contributions: [
                'Performed dataset preprocessing and assisted in optimizing machine learning models for AI products.',
            ],
        },
        {
            role: 'AI & ML Intern',
            company: '3Skill',
            contributions: [
                'Implemented regression, CNN, and clustering models using TensorFlow and scikit-learn.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2>Experience</h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item glass-card">
                            <h3 className="experience-role">{exp.role}</h3>
                            <p className="experience-company">{exp.company}</p>

                            <ul className="experience-contributions">
                                {exp.contributions.map((contribution, i) => (
                                    <li key={i}>
                                        <span className="bullet">▹</span>
                                        {contribution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
