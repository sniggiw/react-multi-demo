// build.js
import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const project = process.argv[2];

if (!project) {
    console.error('Please specify a project: npm run build project1');
    process.exit(1);
}

// 清除 dist 文件夹
const distPath = path.resolve(__dirname, `../../dist`);
try {
    await fs.rm(distPath, { recursive: true, force: true });
    console.log(`Removed existing dist folder: ${distPath}`);
} catch (error) {
    console.error(`Error removing dist folder: ${error}`);
}

const command = `cross-env PROJECT=${project} vite build`;

try {
    execSync(command, { stdio: 'inherit' });
} catch (error) {
    console.error(`Error executing build command: ${error}`);
}
