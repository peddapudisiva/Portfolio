import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resumePath = path.join(__dirname, 'public', 'resume.pdf');
const outputPath = path.join(__dirname, 'src', 'assets', 'resumeData.js');

try {
    const buffer = fs.readFileSync(resumePath);
    const base64 = buffer.toString('base64');
    const content = `export const resumeData = "data:application/pdf;base64,${base64}";`;
    
    fs.writeFileSync(outputPath, content);
    console.log('Successfully created resumeData.js');
} catch (error) {
    console.error('Error converting resume:', error);
    process.exit(1);
}
