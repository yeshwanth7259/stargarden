const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
  { file: 'airbus.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Airbus_Logo.svg/512px-Airbus_Logo.svg.png' },
  { file: 'accenture.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png' },
  { file: 'boeing.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Boeing_full_logo.svg/512px-Boeing_full_logo.svg.png' },
  { file: 'wipro.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png' },
  { file: 'titan.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Titan_Company_Logo.svg/512px-Titan_Company_Logo.svg.png' },
  { file: 'disney.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/512px-Disney%2B_logo.svg.png' },
  { file: 'ola.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ola_Cabs_logo.svg/512px-Ola_Cabs_logo.svg.png' },
  { file: 'bayer.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bayer_Logo.svg/512px-Bayer_Logo.svg.png' },
  { file: 'abb.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/512px-ABB_logo.svg.png' },
  { file: 'yokogawa.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Yokogawa_logo.svg/512px-Yokogawa_logo.svg.png' },
  { file: 'sodexo.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sodexo_logo.svg/512px-Sodexo_logo.svg.png' },
  { file: 'siemens.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/512px-Siemens-logo.svg.png' }
];

logos.forEach(logo => {
  const dest = path.join(__dirname, 'public', 'assets', 'logos', logo.file);
  const file = fs.createWriteStream(dest);
  https.get(logo.url, response => {
    response.pipe(file);
    file.on('finish', () => file.close());
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error('Error downloading ' + logo.file + ':', err.message);
  });
});
console.log('Downloading logos...');
