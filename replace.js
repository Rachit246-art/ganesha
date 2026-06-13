const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'product.html',
    'vighnaharta.html',
    'siddhivinayak.html',
    'mangalmurti.html',
    'lambodara.html',
    'gajanana.html',
    'ekadanta.html'
];

files.forEach(f => {
    let fp = path.join(process.cwd(), f);
    if(fs.existsSync(fp)) {
        let c = fs.readFileSync(fp, 'utf8');
        c = c.replace(/Mumbai, Maharashtra, India/g, 'Solapur and Bengaluru, India.');
        fs.writeFileSync(fp, c);
    }
});
