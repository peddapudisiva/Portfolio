import particleverseTexture from '~/assets/particleverse-preview.jpg';
import jarvisTexture from '~/assets/jarvis-preview.jpg';
import vahaanTexture from '~/assets/vahaan-preview.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Accomplishments } from './accomplishments';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI & ML Developer',
    description: `Portfolio of ${config.name} — AI & ML Developer specializing in LLM Integration, Prompt Engineering, AI Agents, and Workflow Automation.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const accomplishments = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, accomplishments, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="ParticleVerse Studio"
        description="Interactive 3D particle engine rendering up to 100,000 particles at 60 FPS using Three.js, React Three Fiber, custom shaders, and Zustand."
        buttonText="View project"
        buttonLink={`https://github.com/${config.github}`}
        model={{
          type: 'laptop',
          alt: 'ParticleVerse Studio 3D engine',
          textures: [
            {
              srcSet: `${particleverseTexture} 1280w, ${particleverseTexture} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Jarvis AI Assistant"
        description="Desktop AI assistant integrating Speech Recognition, NLP, and OpenAI APIs, reducing manual effort by 50%."
        buttonText="View project"
        buttonLink={`https://github.com/${config.github}`}
        model={{
          type: 'phone',
          alt: 'Jarvis AI Assistant interface',
          textures: [
            {
              srcSet: `${jarvisTexture} 375w, ${jarvisTexture} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${jarvisTexture} 375w, ${jarvisTexture} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Vahaan Bazar AI Marketplace"
        description="AI-driven vehicle marketplace with ML-based recommendations and resale value prediction achieving 80%+ accuracy."
        buttonText="View project"
        buttonLink={`https://github.com/${config.github}`}
        model={{
          type: 'laptop',
          alt: 'Vahaan Bazar AI marketplace',
          textures: [
            {
              srcSet: `${vahaanTexture} 800w, ${vahaanTexture} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Accomplishments
        sectionRef={accomplishments}
        visible={visibleSections.includes(accomplishments.current)}
        id="accomplishments"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
