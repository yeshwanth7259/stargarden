const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svgs = {
  'airbus.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="#00205b" letter-spacing="1">AIRBUS</text></svg>`,
  
  'accenture.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="34" fill="#000000">accenture</text><path d="M175 25 L185 30 L175 35" fill="none" stroke="#a100ff" stroke-width="4" stroke-linecap="round"/></svg>`,
  
  'wipro.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="15" fill="none" stroke="#e0e0e0" stroke-width="4" stroke-dasharray="2 4"/>
    <circle cx="30" cy="30" r="22" fill="none" stroke="#00b050" stroke-width="4" stroke-dasharray="4 6"/>
    <text x="65" y="42" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="#000000">wipro</text>
  </svg>`,
  
  'boeing.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="50" y="45" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0039A6">BOEING</text><path d="M20 40 Q40 10 40 40 Q20 20 20 40 Z" fill="#0039A6"/></svg>`,
  
  'titan.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#333333" letter-spacing="2">TITAN</text></svg>`,
  
  'disney.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Brush Script MT, cursive" font-size="46" fill="#001489">Disney</text><text x="140" y="40" font-family="Arial" font-size="36" font-weight="bold" fill="#001489">+</text></svg>`,
  
  'ola.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="30" r="15" fill="#D7DF23"/><text x="50" y="42" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#000000">OLA</text></svg>`,
  
  'bayer.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="20" fill="none" stroke="#0033A0" stroke-width="3"/><text x="70" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#0033A0">Bayer</text></svg>`,
  
  'abb.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="900" font-size="46" fill="#FF0000" letter-spacing="-2">ABB</text></svg>`,
  
  'yokogawa.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="30" fill="#005A9C">YOKOGAWA</text></svg>`,
  
  'sodexo.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="38" fill="#1C3881">sodexo</text><circle cx="150" cy="20" r="4" fill="#FF0000"/></svg>`,
  
  'siemens.svg': `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="38" fill="#009999" letter-spacing="1">SIEMENS</text></svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir, filename), content);
}
console.log('SVG logos generated successfully!');
