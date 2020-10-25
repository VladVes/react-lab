import fs from 'fs';

const content = fs.readFileSync('client/src/components/TestComponent.jsx', { encoding: 'utf8' });
console.log(content);

