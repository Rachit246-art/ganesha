const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'products.js');
let content = fs.readFileSync(productsFilePath, 'utf8');

const prefixMatches = content.match(/const products = (\[[\s\S]*\]);?/);
if (prefixMatches && prefixMatches[1]) {
    try {
        let productsArray = eval(prefixMatches[1]);
        
        const p1 = productsArray.find(p => p.id === 'product_1');
        if (p1) {
            p1.image = 'images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg';
            p1.images = [
                'images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg',
                'images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM (1).jpeg',
                'images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM (2).jpeg',
                'images/product1/WhatsApp Image 2026-06-09 at 5.28.10 PM (1).jpeg',
                'images/product1/WhatsApp Image 2026-06-09 at 5.28.10 PM (2).jpeg'
            ];
            p1.videos = [
                'images/product1/video.mp4',
                'images/product1/video (1).mp4',
                'images/product1/video (2).mp4'
            ];
        }

        let newContent = `// Array of all products with exact data for individual editing\nconst products = ${JSON.stringify(productsArray, null, 4)};\n`;
        fs.writeFileSync(productsFilePath, newContent, 'utf8');
        console.log("Successfully updated product_1 in products.js");
    } catch(e) {
        console.error("Error parsing products:", e);
    }
} else {
    console.error("Could not find products array in products.js");
}
