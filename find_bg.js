const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

const regex = /\.home-2-section-bg\s*{[^}]*}/g;
let match;
while ((match = regex.exec(cssContent)) !== null) {
    console.log('Found block:');
    console.log(match[0]);
    console.log('-------------------');
}
