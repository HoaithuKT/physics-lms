const fs = require('fs');

const file = 'D:/APP LMS/physics-lms/src/app/student/lessons/[id]/AzotaExamUI.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the duplicate components in AzotaExamUI.tsx
content = content.replace(
    /components=\{appMarkdownComponents\}[\s\S]*?components=\{\{\s*img:\s*\(\{node,\s*\.\.\.props\}\)\s*=>\s*<img\s*\{\.\.\.props\}\s*className="block max-h-\[400px\] w-auto max-w-full rounded-lg shadow-sm my-4 border border-slate-200"\s*style=\{\{\s*objectFit:\s*'contain'\s*\}\}\s*\/>\s*\}\}/g,
    'components={{ ...appMarkdownComponents, img: ({node, ...props}) => <img {...props} className="block max-h-[400px] w-auto max-w-full rounded-lg shadow-sm my-4 border border-slate-200" style={{ objectFit: \'contain\' }} /> }}'
);

fs.writeFileSync(file, content);
console.log('Fixed AzotaExamUI.tsx');
