import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Canvas/Scene';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import About from './components/UI/About';
import Skills from './components/UI/Skills';
import Projects from './components/UI/Projects';
import Experience from './components/UI/Experience';
import Achievements from './components/UI/Achievements';
import Contact from './components/UI/Contact';
import Footer from './components/UI/Footer';
import Chatbot from './components/UI/Chatbot';
import BackToTop from './components/UI/BackToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
    // Initialize scroll animations
    useScrollAnimation();

    return (
        <div className="App">
            {/* 3D Background Canvas */}
            <div className="scene-container">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Scene />
                </Canvas>
            </div>

            {/* UI Content */}
            <Navbar />
            <Hero />
            <div className="animate-on-scroll">
                <About />
            </div>
            <div className="animate-on-scroll stagger-1">
                <Skills />
            </div>
            <div className="animate-on-scroll stagger-2">
                <Projects />
            </div>
            <div className="animate-on-scroll stagger-3">
                <Experience />
            </div>
            <div className="animate-on-scroll">
                <Achievements />
            </div>
            <div className="animate-on-scroll">
                <Contact />
            </div>
            <Footer />

            {/* AI Chatbot */}
            <Chatbot />
            <BackToTop />
        </div>
    );
}

export default App;
