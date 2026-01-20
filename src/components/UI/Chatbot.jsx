import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Siva's AI assistant. Ask me about his skills, projects, or experience! 👋" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

        // Skills related
        if (msg.includes('skill') || msg.includes('what can') || msg.includes('technologies')) {
            return "Siva specializes in Artificial Intelligence, Machine Learning, Deep Learning, NLP, Data Science, and Chatbot Development. He's also familiar with TensorFlow, NLP Basics, and API-based Chatbots!";
        }

        // Projects related
        if (msg.includes('project') || msg.includes('work') || msg.includes('built')) {
            return "Siva has built several impressive projects:\n\n🖐️ Hand Gesture Recognition System - Real-time gesture recognition using OpenCV and MediaPipe\n\n📈 AI Sales Forecasting System - LSTM and Random Forest models with over 85% accuracy\n\n🤖 Jarvis AI Assistant - Desktop AI assistant using Speech Recognition and OpenAI APIs\n\n🌱 EduSense App - Cross-domain platform for smart agriculture and education";
        }

        // Experience related
        if (msg.includes('experience') || msg.includes('intern') || msg.includes('work')) {
            return "Siva worked as an AI Intern at MachineHack from Jan-Apr 2024. He built an AI-powered sales forecasting tool, developed Jarvis (AI Desktop Assistant), and delivered a technical presentation to 40+ employees.";
        }

        // Education
        if (msg.includes('education') || msg.includes('study') || msg.includes('degree')) {
            return "Siva is a B.Tech AI & ML Undergraduate and an AI Intern. He's a project-based learner focused on building practical AI solutions!";
        }

        // Contact
        if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('hire')) {
            return "You can reach Siva at:\n\n📧 Email: peddapulisiva515@gmail.com\n\n💼 LinkedIn: linkedin.com/in/siva-peddapudi\n\n🐙 GitHub: github.com/peddapudisiva\n\nFeel free to connect!";
        }

        // Location
        if (msg.includes('location') || msg.includes('where') || msg.includes('live')) {
            return "Siva is based in Narasaraopet, Andhra Pradesh, India 📍";
        }

        // Achievements
        if (msg.includes('achievement') || msg.includes('award') || msg.includes('prize')) {
            return "Siva's achievements include:\n\n🏆 2nd Prize at National Level Idea Hackathon\n💡 CSP Project: Smart Irrigation & Automation\n🎤 Presenter at Global STEM Educational Expo\n🌱 Built EduSense App integrating AI, agriculture, and automation (2025)";
        }

        // About
        if (msg.includes('about') || msg.includes('who') || msg.includes('tell me')) {
            return "Siva is an AI & ML Undergraduate passionate about building practical AI solutions through real-world projects. He focuses on machine learning, computer vision, and AI-driven automation. Check out his projects and experience to learn more!";
        }

        // Default response
        return "I can help you learn about:\n\n✨ Skills\n💼 Projects\n🎓 Experience\n🏆 Achievements\n📧 Contact Info\n\nWhat would you like to know?";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: input }]);

        // Get bot response
        setTimeout(() => {
            const response = getBotResponse(input);
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 500);

        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={`chat-button ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? '✕' : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C10.3431 2 9 3.34315 9 5V6H15V5C15 3.34315 13.6569 2 12 2Z" fill="currentColor" />
                        <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M7 11L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M15 11L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 15C9 15 10 16 12 16C14 16 15 15 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
                        <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-title">
                            <span className="chat-avatar">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C10.3431 2 9 3.34315 9 5V6H15V5C15 3.34315 13.6569 2 12 2Z" fill="var(--neon-green)" />
                                    <rect x="3" y="6" width="18" height="12" rx="4" stroke="var(--neon-green)" strokeWidth="2" />
                                    <path d="M7 11L9 11" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M15 11L17 11" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M9 15C9 15 10 16 12 16C14 16 15 15 15 15" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <div>
                                <h3>AI Assistant</h3>
                                <p>Ask me anything!</p>
                            </div>
                        </div>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.type}`}>
                                {msg.type === 'bot' && (
                                    <span className="message-avatar">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
                                            <path d="M7 11L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M15 11L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                )}
                                <div className="message-bubble">
                                    {msg.text.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < msg.text.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about skills, projects, experience..."
                        />
                        <button onClick={handleSend} aria-label="Send message">
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot;
