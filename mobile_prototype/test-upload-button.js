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

assert.match(
  html,
  /<button class="sheet-card" type="button" id="sheetChooseFileBtn">/,
  'expected the read-doc sheet choose-file card to have its own upload trigger',
);

assert.match(
  html,
  /sheetChooseFileBtn\.addEventListener\('click',\s*\(\)\s*=>\s*\{\s*sheet\.classList\.remove\('active'\);\s*fileUploadInput\.click\(\);\s*\}\);/,
  'expected the read-doc sheet choose-file card to open the same native file chooser',
);

assert.doesNotMatch(
  html,
  /plusBtn\.addEventListener\('click',\s*\(\)\s*=>\s*showScreen\('upload'\)\);/,
  'plus button should not navigate to the upload demo screen',
);

assert.doesNotMatch(
  html,
  /data-screen="upload"/,
  'upload should not appear as a standalone visible flow tab or action',
);

assert.doesNotMatch(
  html,
  /id="screen-upload"/,
  'upload should not exist as a standalone demo screen',
);

assert.match(
  html,
  /fileUploadInput\.addEventListener\('change',\s*\(\)\s*=>\s*\{\s*if \(!fileUploadInput\.files\.length\) return;\s*showScreen\('clarify'\);/,
  'selecting a real file without an explicit instruction should enter reverse confirmation',
);

console.log('upload button behavior checks passed');
