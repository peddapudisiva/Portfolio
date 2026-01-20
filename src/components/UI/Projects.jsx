import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Hand Gesture Recognition System',
            description: 'Built a real-time hand gesture recognition system using OpenCV and MediaPipe to enable gesture-based automation and control.',
            techStack: ['Python', 'OpenCV', 'MediaPipe'],
        },
        {
            title: 'AI Sales Forecasting System',
            description: 'Developed LSTM and Random Forest models to predict sales trends, achieving over 85% accuracy on historical datasets.',
            techStack: ['Python', 'TensorFlow', 'Scikit-learn'],
        },
        {
            title: 'Jarvis AI Assistant [Research Project]',
            description: 'Desktop AI assistant using Speech Recognition, NLP, and OpenAI APIs for automation tasks.',
            techStack: ['Python', 'Speech Recognition', 'NLP', 'OpenAI API'],
        },
        {
            title: 'EduSense App [Major Project]',
            description: 'Cross-domain platform for smart agriculture, education, and sustainability.',
            techStack: ['Python', 'Machine Learning', 'Mobile Development'],
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="tech-stack">
                                <span className="tech-label">Tech Stack:</span>
                                <div className="tech-tags">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
