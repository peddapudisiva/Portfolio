import React from 'react';
import './Achievements.css';

function Achievements() {
    const achievements = [
        'National Level Idea Hackathon – 2nd Prize',
        'CSP Project: Smart Irrigation & Automation',
        'Presenter at Global STEM Educational Expo',
        'Built EduSense App integrating AI, agriculture, and automation for sustainability (2025)',
    ];

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <h2>Achievements</h2>

                <div className="achievements-content glass-card">
                    <ul className="achievements-list">
                        {achievements.map((achievement, index) => (
                            <li key={index}>
                                <span className="achievement-icon">🏆</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
