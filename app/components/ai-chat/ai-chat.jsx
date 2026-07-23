import { useState, useRef, useEffect } from 'react';
import styles from './ai-chat.module.css';

const KNOWLEDGE_BASE = [
  {
    keywords: ['project', 'built', 'particleverse', 'jarvis', 'vahaan', 'work'],
    answer: "Siva has built 5 major projects: 1. ParticleVerse Studio (3D particle engine with 100K particles @ 60 FPS), 2. Jarvis AI Assistant (voice AI assistant with Speech Recognition & NLP), 3. Vahaan Bazar (AI vehicle marketplace with 80%+ resale value prediction accuracy), 4. AI Sales Forecast System (LSTM & Random Forest), 5. Interactive 3D Portfolio.",
  },
  {
    keywords: ['intern', 'experience', 'company', 'work', 'summit', 'swecha', 'lambentix', '3skill'],
    answer: "Siva has completed multiple industry internships: 1. AI Automation Intern at Summit Wealth Builders LLC (n8n & generative AI pipelines), 2. AI & ML Intern at 3Skill (CNNs & scikit-learn models), 3. AI Intern at Lambentix AI (dataset preprocessing & ML model optimization), 4. AI Developer Intern at Swecha Telangana (open-source AI tools & chatbot pipelines).",
  },
  {
    keywords: ['skill', 'python', 'langchain', 'n8n', 'tensorflow', 'pytorch', 'stack', 'tool'],
    answer: "Siva's core skills include: Python, TensorFlow, PyTorch, LangChain, OpenAI API, n8n, Make.com, Claude, Gemini, Groq, DALL-E, Three.js, React, TypeScript, Supabase, and REST APIs.",
  },
  {
    keywords: ['education', 'college', 'eswar', 'degree', 'cgpa', 'btech', 'marks'],
    answer: "Siva is a final year B.Tech student specializing in Artificial Intelligence & Machine Learning at Eswar College of Engineering, Narasaraopet (2023–Present) with a 7.0 CGPA.",
  },
  {
    keywords: ['hackathon', 'award', 'prize', 'winner', 'freedom', 'accomplishment', 'certification'],
    answer: "Siva won 2nd Place in the Freedom Fest 2026 Vibe Coding Hackathon (Swecha AP) and 2nd Prize in the National Level Idea Hackathon. He holds certifications from Anthropic AI, Google Gemini, Google Cloud Arcade, IBM Data Science, AWS, TATA, and Deloitte.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'hire', 'resume'],
    answer: "You can reach Siva via Email: peddapulisiva515@gmail.com, Phone: +91-9347701509, LinkedIn: linkedin.com/in/peddapudi-siva-5781b328a, GitHub: github.com/peddapudisiva, or download his PDF resume directly from the portfolio!",
  },
];

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Siva’s AI Assistant. Ask me anything about Siva’s projects, internships, skills, or certifications!' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput('');

    // Answer matching
    const query = textToSend.toLowerCase();
    let reply = "Siva is an AI & ML Developer specializing in LLM integration, prompt engineering, AI agents, and workflow automation. Feel free to ask about his projects, internships, or certifications!";

    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some((k) => query.includes(k))) {
        reply = item.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)} title="Ask Siva AI">
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <span>🤖</span>
              <span>Ask Siva AI Assistant</span>
            </div>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.sender === 'user' ? styles.user : styles.bot}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.quickPrompts}>
            <button className={styles.promptChip} onClick={() => handleSend('Tell me about your projects')}>
              💻 Projects
            </button>
            <button className={styles.promptChip} onClick={() => handleSend('What internships have you done?')}>
              💼 Internships
            </button>
            <button className={styles.promptChip} onClick={() => handleSend('What are your skills?')}>
              ⚡ Skills
            </button>
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ask about Siva..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendButton} onClick={() => handleSend()}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
