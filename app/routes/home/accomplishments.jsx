import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './accomplishments.module.css';

const accomplishmentsList = [
  {
    badge: '🏆 2nd Place Winner',
    title: 'Freedom Fest 2026 Vibe Coding Hackathon',
    description: 'Swecha Andhra Pradesh (2026) — Built high-impact AI automation tools and generative AI workflows under strict time limits.',
  },
  {
    badge: '🥇 2nd Prize',
    title: 'National Level Idea Hackathon',
    description: 'Eswar College of Engineering (2025) — Recognized for novel AI innovation and machine learning architecture design.',
  },
  {
    badge: '🌐 Research Presenter',
    title: 'Global STEM Educational Expo',
    description: 'Presented research paper on AI-driven innovation and intelligent chatbot systems (2025).',
  },
  {
    badge: '🌾 Community Service',
    title: 'Smart Irrigation & Automation System',
    description: 'Deployed automated IoT & AI smart irrigation system for Bobbepalli village community (2024).',
  },
];

const certificationsList = [
  'Google – Certified Gemini Student (2025)',
  'Anthropic – AI Certification (2026)',
  'Google Cloud – Arcade Program (2026)',
  'TATA – Generative AI (2025)',
  'IBM – Data Science (2025)',
  'AWS – Solutions Architecture Job Simulation (2025)',
  'Deloitte – Data Analytics & Cyber Simulations (2025)',
  'TCS ION – Career Edge: Young Professional (2025)',
];

export function Accomplishments({ id, sectionRef, visible }) {
  return (
    <Section className={styles.accomplishments} ref={sectionRef} id={id}>
      <Transition in={visible} timeout={300}>
        {({ visible }) => (
          <>
            <div>
              <Heading level={3} className={styles.heading}>
                Accomplishments & Hackathons
              </Heading>
              <div className={styles.grid}>
                {accomplishmentsList.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <span className={styles.badge}>{item.badge}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <Heading level={3} className={styles.heading}>
                Industry Certifications
              </Heading>
              <div className={styles.grid}>
                {certificationsList.map((cert, index) => (
                  <div key={index} className={styles.card}>
                    <span className={styles.badge}>Certified</span>
                    <Text size="m">{cert}</Text>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Transition>
    </Section>
  );
}
