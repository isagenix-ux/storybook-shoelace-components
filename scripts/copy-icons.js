const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../node_modules/@fortawesome/pro-light-svg-icons/svgs');
const targetDir = path.join(__dirname, '../src/assets/icons');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy SVG files
const icons = [
  'house.svg',
  'user.svg',
  'cog.svg',
  'bell.svg',
  'envelope.svg',
  'heart.svg',
  'star.svg',
  'check.svg',
  'xmark.svg',
  'circle-info.svg'
];

icons.forEach(icon => {
  fs.copyFileSync(
    path.join(sourceDir, icon),
    path.join(targetDir, icon)
  );
});

console.log('Icons copied successfully!'); 