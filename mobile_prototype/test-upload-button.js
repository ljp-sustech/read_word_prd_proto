const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const htmlPath = path.join(__dirname, 'output', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

assert.match(
  html,
  /<input[^>]+id="fileUploadInput"[^>]+type="file"[^>]*>/,
  'expected a hidden file input for the upload button',
);

assert.match(
  html,
  /const\s+fileUploadInput\s*=\s*document\.getElementById\('fileUploadInput'\);/,
  'expected script to reference the file input',
);

assert.match(
  html,
  /plusBtn\.addEventListener\('click',\s*\(\)\s*=>\s*fileUploadInput\.click\(\)\);/,
  'expected plus button click to open the native file chooser',
);

assert.doesNotMatch(
  html,
  /plusBtn\.addEventListener\('click',\s*\(\)\s*=>\s*showScreen\('upload'\)\);/,
  'plus button should not navigate to the upload demo screen',
);

console.log('upload button behavior checks passed');
