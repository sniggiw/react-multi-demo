// dev.js
import { execSync } from 'child_process';

const project = process.argv[2];

if (!project) {
    console.error('Please specify a project: npm run dev project1');
    process.exit(1);
}

const command = `cross-env PROJECT=${project} vite`;

execSync(command, { stdio: 'inherit' });
