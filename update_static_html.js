const fs = require('fs');
const path = require('path');

const fileMap = {
    'vighnaharta.html': 'DMM2601',
    'mangalmurti.html': 'DMM2602',
    'lambodara.html': 'DMM2603',
    'gajanana.html': 'DMM2604',
    'siddhivinayak.html': 'DMM2605',
    'ekadanta.html': 'DMM2606'
};

for (const [file, code] of Object.entries(fileMap)) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const oldStr = `<p id="product-code" style="font-size: 1.1rem; color: #555; margin-bottom: 12px; font-weight: 500;">Code: ${code}</p>`;
        const newStr = `<p id="product-code" class="product-code-detail">Code: ${code}</p>`;
        
        if (content.includes(oldStr)) {
            content = content.replace(oldStr, newStr);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file} to use class product-code-detail`);
        }
    }
}
