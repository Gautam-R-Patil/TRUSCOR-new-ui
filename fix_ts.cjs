const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix ease types by appending as any if it doesn't already have it
    content = content.replace(/ease:\s*(["'][^"']+["']|\[[^\]]+\])(?![\s]*as[\s]+any)/g, 'ease: $1 as any');
    // Fix staggerChildren type issues by casting transition
    content = content.replace(/transition:\s*\{\s*duration:\s*([^,]+),\s*ease:\s*([^,]+),\s*staggerChildren:\s*([^}]+)\s*\}/g, 'transition: { duration: $1, ease: $2 as any, staggerChildren: $3 } as any');
    
    // Fix unused imports
    if (filePath.includes('TruscorLegacy.tsx')) {
      content = content.replace(/import \{ motion \} from 'framer-motion';/g, '');
    }
    if (filePath.includes('AboutCanvas.tsx')) {
      content = content.replace(/import \{ motion \} from 'framer-motion';/g, '');
    }
    if (filePath.includes('LoadingScreen.tsx')) {
      content = content.replace(/import \{ motion \} from 'framer-motion';/g, '');
    }
    if (filePath.includes('App.tsx')) {
      content = content.replace(/import \{ Waitlist \} from '\.\/components\/Waitlist';/g, '');
      content = content.replace(/import \{ DemoDownload \} from '\.\/components\/DemoDownload';/g, '');
      content = content.replace(/import \{ ProductVisual \} from '\.\/components\/ProductVisual';/g, '');
    }
    if (filePath.includes('Team.tsx')) {
      content = content.replace(/import gautamImg from '\.\.\/assets\/gautam\.png';/g, '');
      content = content.replace(/import dheerajImg from '\.\.\/assets\/dheeraj\.png';/g, '');
    }
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});
