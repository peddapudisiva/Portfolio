import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Skills & Tools"
          description="A comprehensive list of AI & ML frameworks, automation platforms, development tools, and technologies I use daily to build intelligent applications."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI & Machine Learning</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Python</strong> is my primary language for machine learning, deep learning, NLP, and backend automation pipelines.
                  </ListItem>
                  <ListItem>
                    <strong>TensorFlow & PyTorch</strong> for building and evaluating neural network architectures, CNNs, Regression models, and LSTM networks.
                  </ListItem>
                  <ListItem>
                    <strong>LangChain & OpenAI API</strong> for creating LLM-powered applications, desktop AI assistants, and conversational agents.
                  </ListItem>
                  <ListItem>
                    <strong>AI Models & Assistants</strong>: Hands-on experience with Claude, Gemini, Groq, DALL-E, Antigravity, and Cursor.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Automation & Web Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>n8n & Make.com</strong> for building multi-step workflow automation pipelines and AI content production workflows.
                  </ListItem>
                  <ListItem>
                    <strong>React 18 & TypeScript</strong> for building responsive, modern interactive web interfaces.
                  </ListItem>
                  <ListItem>
                    <strong>Three.js & GSAP</strong> for 3D graphics rendering, shaders, and dynamic web animations (ParticleVerse Studio).
                  </ListItem>
                  <ListItem>
                    <strong>Supabase & REST APIs</strong> for backend data management, authentication, and integration.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Developer Environment</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Code Editor</TableHeadCell>
                    <TableCell>VS Code / Cursor</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Cloud Environment</TableHeadCell>
                    <TableCell>Google Colab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Automation Server</TableHeadCell>
                    <TableCell>n8n Cloud / Local</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git & GitHub</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Database</TableHeadCell>
                    <TableCell>Supabase / PostgreSQL</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
