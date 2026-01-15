const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

if (cssContent.includes('--black-primary-dark')) {
    console.log('Variable found');
    const index = cssContent.indexOf('--black-primary-dark');
    console.log(cssContent.substring(index - 50, index + 50));
} else {
    console.log('Variable NOT found');
}
