const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      if (filepath.endsWith('.ts') || filepath.endsWith('.tsx')) {
        callback(filepath);
      }
    }
  });
}

let modified = 0;
walkSync(path.join(__dirname, 'src'), (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;
  
  // Replace titles
  content = content.replace(/LMS TOÁN THẦY PHÚC/gi, 'LMS Lí Cô Thu');
  content = content.replace(/LMS Toán Thầy Phúc/gi, 'LMS Lí Cô Thu');
  content = content.replace(/LMS VẬT LÝ CÔ HOÀI THU/gi, 'LMS Lí Cô Thu');
  
  // Custom fix for title formatting like "LMS Lí Cô Thu - LMS Lí Cô Thu"
  content = content.replace(/LMS Lí Cô Thu - LMS Lí Cô Thu/gi, 'LMS Lí Cô Thu');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Modified:', filepath);
    modified++;
  }
});

console.log('Total files modified:', modified);
