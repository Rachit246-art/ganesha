const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'products.js');
let content = fs.readFileSync(productsFilePath, 'utf8');

const prefixMatches = content.match(/const products = (\[[\s\S]*\]);?/);
if (prefixMatches && prefixMatches[1]) {
    try {
        let productsArray = eval(prefixMatches[1]);
        
        productsArray = productsArray.map((product) => {
            if (product.id !== 'product_1') {
                product.videos = [];
            }
            return product;
        });

        let newContent = `// Array of all products with exact data for individual editing\nconst products = ${JSON.stringify(productsArray, null, 4)};\n`;
        fs.writeFileSync(productsFilePath, newContent, 'utf8');
        console.log("Successfully removed videos from all products except product_1.");
    } catch(e) {
        console.error("Error parsing products:", e);
    }
} else {
    console.error("Could not find products array in products.js");
}
