// All available product images
const allImages = [
    "images/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.10 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.11 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.12 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.13 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.14 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.15 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.16 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (3).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.17 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (1).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (2).jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.18 PM.jpeg",
    "images/WhatsApp Image 2026-06-09 at 5.28.18 PM (1).jpeg"
];

const baseTitles = [
    "100% Eco Clay Vighnaharta",
    "Mangalmurti Ganesha Idol",
    "Lambodara Majestic Form",
    "Gajanana Traditional",
    "Siddhivinayak Pure Clay",
    "Ekadanta Elegant Posture",
    "Mahaganapati Sacred Form",
    "Heramba Divine Idol",
    "Vighneshwara Clay Murti",
    "Dhumravarna Heritage Edition",
    "Vakratunda Artistic Form",
    "Sumukhaya Eco Ganesha"
];

const products = [];

// Create exactly 70 products — each gets a unique image cycling through all 35 available
for (let i = 0; i < 70; i++) {
    const titleIndex = i % baseTitles.length;
    const edition = Math.floor(i / baseTitles.length) + 1;
    const isOriginal = i < baseTitles.length;

    const titleSuffix = isOriginal ? "" : ` - Edition ${edition}`;

    const basePrice = 1299 + (i % 12) * 100 + Math.floor(i / 12) * 50;
    const originalPrice = basePrice * 2;

    // Each product gets a unique image - cycle through all 35 images
    const imageIndex = i % allImages.length;

    products.push({
        id: `product_${i + 1}`,
        title: baseTitles[titleIndex] + titleSuffix,
        price: `₹${basePrice.toLocaleString('en-IN')}`,
        originalPrice: `₹${originalPrice.toLocaleString('en-IN')}`,
        discount: "50% OFF",
        image: allImages[imageIndex]
    });
}
