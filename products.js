// Array of all products with exact data for individual editing
const products = [
    {
        "id": "product_1",
        "title": "100% Eco Clay Vighnaharta",
        "price": "₹1,299",
        "originalPrice": "₹2,598",
        "discount": "50% OFF",
        "image": "images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg",
        "videos": [
            "images/product1/video.mp4",
            "images/product1/video (1).mp4",
            "images/product1/video (2).mp4"
        ],
        "code": "DMM2601",
        "images": [
            "images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg",
            "images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM (1).jpeg",
            "images/product1/WhatsApp Image 2026-06-09 at 5.28.09 PM (2).jpeg",
            "images/product1/WhatsApp Image 2026-06-09 at 5.28.10 PM (1).jpeg",
            "images/product1/WhatsApp Image 2026-06-09 at 5.28.10 PM (2).jpeg"
        ]
    },
    {
        "id": "product_2",
        "title": "Mangalmurti Ganesha Idol",
        "price": "₹1,399",
        "originalPrice": "₹2,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (1).jpeg",
        "videos": [],
        "code": "DMM2602"
    },
    {
        "id": "product_3",
        "title": "Lambodara Majestic Form",
        "price": "₹1,499",
        "originalPrice": "₹2,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (2).jpeg",
        "videos": [],
        "code": "DMM2603"
    },
    {
        "id": "product_4",
        "title": "Gajanana Traditional",
        "price": "₹1,599",
        "originalPrice": "₹3,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM.jpeg",
        "videos": [],
        "code": "DMM2604"
    },
    {
        "id": "product_5",
        "title": "Siddhivinayak Pure Clay",
        "price": "₹1,699",
        "originalPrice": "₹3,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (1).jpeg",
        "videos": [],
        "code": "DMM2605"
    },
    {
        "id": "product_6",
        "title": "Ekadanta Elegant Posture",
        "price": "₹1,799",
        "originalPrice": "₹3,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (2).jpeg",
        "videos": [],
        "code": "DMM2606"
    },
    {
        "id": "product_7",
        "title": "Mahaganapati Sacred Form",
        "price": "₹1,899",
        "originalPrice": "₹3,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (3).jpeg",
        "videos": [],
        "code": "DMM2607"
    },
    {
        "id": "product_8",
        "title": "Heramba Divine Idol",
        "price": "₹1,999",
        "originalPrice": "₹3,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM.jpeg",
        "videos": [],
        "code": "DMM2608"
    },
    {
        "id": "product_9",
        "title": "Vighneshwara Clay Murti",
        "price": "₹2,099",
        "originalPrice": "₹4,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (1).jpeg",
        "videos": [],
        "code": "DMM2609"
    },
    {
        "id": "product_10",
        "title": "Dhumravarna Heritage Edition",
        "price": "₹2,199",
        "originalPrice": "₹4,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (2).jpeg",
        "videos": [],
        "code": "DMM2610"
    },
    {
        "id": "product_11",
        "title": "Vakratunda Artistic Form",
        "price": "₹2,299",
        "originalPrice": "₹4,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (3).jpeg",
        "videos": [],
        "code": "DMM2611"
    },
    {
        "id": "product_12",
        "title": "Sumukhaya Eco Ganesha",
        "price": "₹2,399",
        "originalPrice": "₹4,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM.jpeg",
        "videos": [],
        "code": "DMM2612"
    },
    {
        "id": "product_13",
        "title": "100% Eco Clay Vighnaharta - Edition 2",
        "price": "₹1,349",
        "originalPrice": "₹2,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (1).jpeg",
        "videos": [],
        "code": "DMM2613"
    },
    {
        "id": "product_14",
        "title": "Mangalmurti Ganesha Idol - Edition 2",
        "price": "₹1,449",
        "originalPrice": "₹2,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (2).jpeg",
        "videos": [],
        "code": "DMM2614"
    },
    {
        "id": "product_15",
        "title": "Lambodara Majestic Form - Edition 2",
        "price": "₹1,549",
        "originalPrice": "₹3,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (3).jpeg",
        "videos": [],
        "code": "DMM2615"
    },
    {
        "id": "product_16",
        "title": "Gajanana Traditional - Edition 2",
        "price": "₹1,649",
        "originalPrice": "₹3,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM.jpeg",
        "videos": [],
        "code": "DMM2616"
    },
    {
        "id": "product_17",
        "title": "Siddhivinayak Pure Clay - Edition 2",
        "price": "₹1,749",
        "originalPrice": "₹3,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (1).jpeg",
        "videos": [],
        "code": "DMM2617"
    },
    {
        "id": "product_18",
        "title": "Ekadanta Elegant Posture - Edition 2",
        "price": "₹1,849",
        "originalPrice": "₹3,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (2).jpeg",
        "videos": [],
        "code": "DMM2618"
    },
    {
        "id": "product_19",
        "title": "Mahaganapati Sacred Form - Edition 2",
        "price": "₹1,949",
        "originalPrice": "₹3,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (3).jpeg",
        "videos": [],
        "code": "DMM2619"
    },
    {
        "id": "product_20",
        "title": "Heramba Divine Idol - Edition 2",
        "price": "₹2,049",
        "originalPrice": "₹4,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM.jpeg",
        "videos": [],
        "code": "DMM2620"
    },
    {
        "id": "product_21",
        "title": "Vighneshwara Clay Murti - Edition 2",
        "price": "₹2,149",
        "originalPrice": "₹4,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (1).jpeg",
        "videos": [],
        "code": "DMM2621"
    },
    {
        "id": "product_22",
        "title": "Dhumravarna Heritage Edition - Edition 2",
        "price": "₹2,249",
        "originalPrice": "₹4,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (2).jpeg",
        "videos": [],
        "code": "DMM2622"
    },
    {
        "id": "product_23",
        "title": "Vakratunda Artistic Form - Edition 2",
        "price": "₹2,349",
        "originalPrice": "₹4,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM.jpeg",
        "videos": [],
        "code": "DMM2623"
    },
    {
        "id": "product_24",
        "title": "Sumukhaya Eco Ganesha - Edition 2",
        "price": "₹2,449",
        "originalPrice": "₹4,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (1).jpeg",
        "videos": [],
        "code": "DMM2624"
    },
    {
        "id": "product_25",
        "title": "100% Eco Clay Vighnaharta - Edition 3",
        "price": "₹1,399",
        "originalPrice": "₹2,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (2).jpeg",
        "videos": [],
        "code": "DMM2625"
    },
    {
        "id": "product_26",
        "title": "Mangalmurti Ganesha Idol - Edition 3",
        "price": "₹1,499",
        "originalPrice": "₹2,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (3).jpeg",
        "videos": [],
        "code": "DMM2626"
    },
    {
        "id": "product_27",
        "title": "Lambodara Majestic Form - Edition 3",
        "price": "₹1,599",
        "originalPrice": "₹3,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM.jpeg",
        "videos": [],
        "code": "DMM2627"
    },
    {
        "id": "product_28",
        "title": "Gajanana Traditional - Edition 3",
        "price": "₹1,699",
        "originalPrice": "₹3,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (1).jpeg",
        "videos": [],
        "code": "DMM2628"
    },
    {
        "id": "product_29",
        "title": "Siddhivinayak Pure Clay - Edition 3",
        "price": "₹1,799",
        "originalPrice": "₹3,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (2).jpeg",
        "videos": [],
        "code": "DMM2629"
    },
    {
        "id": "product_30",
        "title": "Ekadanta Elegant Posture - Edition 3",
        "price": "₹1,899",
        "originalPrice": "₹3,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (3).jpeg",
        "videos": [],
        "code": "DMM2630"
    },
    {
        "id": "product_31",
        "title": "Mahaganapati Sacred Form - Edition 3",
        "price": "₹1,999",
        "originalPrice": "₹3,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM.jpeg",
        "videos": [],
        "code": "DMM2631"
    },
    {
        "id": "product_32",
        "title": "Heramba Divine Idol - Edition 3",
        "price": "₹2,099",
        "originalPrice": "₹4,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (1).jpeg",
        "videos": [],
        "code": "DMM2632"
    },
    {
        "id": "product_33",
        "title": "Vighneshwara Clay Murti - Edition 3",
        "price": "₹2,199",
        "originalPrice": "₹4,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (2).jpeg",
        "videos": [],
        "code": "DMM2633"
    },
    {
        "id": "product_34",
        "title": "Dhumravarna Heritage Edition - Edition 3",
        "price": "₹2,299",
        "originalPrice": "₹4,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.18 PM.jpeg",
        "videos": [],
        "code": "DMM2634"
    },
    {
        "id": "product_35",
        "title": "Vakratunda Artistic Form - Edition 3",
        "price": "₹2,399",
        "originalPrice": "₹4,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.18 PM (1).jpeg",
        "videos": [],
        "code": "DMM2635"
    },
    {
        "id": "product_36",
        "title": "Sumukhaya Eco Ganesha - Edition 3",
        "price": "₹2,499",
        "originalPrice": "₹4,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.09 PM.jpeg",
        "videos": [],
        "code": "DMM2636"
    },
    {
        "id": "product_37",
        "title": "100% Eco Clay Vighnaharta - Edition 4",
        "price": "₹1,449",
        "originalPrice": "₹2,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (1).jpeg",
        "videos": [],
        "code": "DMM2637"
    },
    {
        "id": "product_38",
        "title": "Mangalmurti Ganesha Idol - Edition 4",
        "price": "₹1,549",
        "originalPrice": "₹3,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.09 PM (2).jpeg",
        "videos": [],
        "code": "DMM2638"
    },
    {
        "id": "product_39",
        "title": "Lambodara Majestic Form - Edition 4",
        "price": "₹1,649",
        "originalPrice": "₹3,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM.jpeg",
        "videos": [],
        "code": "DMM2639"
    },
    {
        "id": "product_40",
        "title": "Gajanana Traditional - Edition 4",
        "price": "₹1,749",
        "originalPrice": "₹3,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (1).jpeg",
        "videos": [],
        "code": "DMM2640"
    },
    {
        "id": "product_41",
        "title": "Siddhivinayak Pure Clay - Edition 4",
        "price": "₹1,849",
        "originalPrice": "₹3,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (2).jpeg",
        "videos": [],
        "code": "DMM2641"
    },
    {
        "id": "product_42",
        "title": "Ekadanta Elegant Posture - Edition 4",
        "price": "₹1,949",
        "originalPrice": "₹3,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.10 PM (3).jpeg",
        "videos": [],
        "code": "DMM2642"
    },
    {
        "id": "product_43",
        "title": "Mahaganapati Sacred Form - Edition 4",
        "price": "₹2,049",
        "originalPrice": "₹4,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM.jpeg",
        "videos": [],
        "code": "DMM2643"
    },
    {
        "id": "product_44",
        "title": "Heramba Divine Idol - Edition 4",
        "price": "₹2,149",
        "originalPrice": "₹4,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (1).jpeg",
        "videos": [],
        "code": "DMM2644"
    },
    {
        "id": "product_45",
        "title": "Vighneshwara Clay Murti - Edition 4",
        "price": "₹2,249",
        "originalPrice": "₹4,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (2).jpeg",
        "videos": [],
        "code": "DMM2645"
    },
    {
        "id": "product_46",
        "title": "Dhumravarna Heritage Edition - Edition 4",
        "price": "₹2,349",
        "originalPrice": "₹4,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.11 PM (3).jpeg",
        "videos": [],
        "code": "DMM2646"
    },
    {
        "id": "product_47",
        "title": "Vakratunda Artistic Form - Edition 4",
        "price": "₹2,449",
        "originalPrice": "₹4,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM.jpeg",
        "videos": [],
        "code": "DMM2647"
    },
    {
        "id": "product_48",
        "title": "Sumukhaya Eco Ganesha - Edition 4",
        "price": "₹2,549",
        "originalPrice": "₹5,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (1).jpeg",
        "videos": [],
        "code": "DMM2648"
    },
    {
        "id": "product_49",
        "title": "100% Eco Clay Vighnaharta - Edition 5",
        "price": "₹1,499",
        "originalPrice": "₹2,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (2).jpeg",
        "videos": [],
        "code": "DMM2649"
    },
    {
        "id": "product_50",
        "title": "Mangalmurti Ganesha Idol - Edition 5",
        "price": "₹1,599",
        "originalPrice": "₹3,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.12 PM (3).jpeg",
        "videos": [],
        "code": "DMM2650"
    },
    {
        "id": "product_51",
        "title": "Lambodara Majestic Form - Edition 5",
        "price": "₹1,699",
        "originalPrice": "₹3,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM.jpeg",
        "videos": [],
        "code": "DMM2651"
    },
    {
        "id": "product_52",
        "title": "Gajanana Traditional - Edition 5",
        "price": "₹1,799",
        "originalPrice": "₹3,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (1).jpeg",
        "videos": [],
        "code": "DMM2652"
    },
    {
        "id": "product_53",
        "title": "Siddhivinayak Pure Clay - Edition 5",
        "price": "₹1,899",
        "originalPrice": "₹3,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (2).jpeg",
        "videos": [],
        "code": "DMM2653"
    },
    {
        "id": "product_54",
        "title": "Ekadanta Elegant Posture - Edition 5",
        "price": "₹1,999",
        "originalPrice": "₹3,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.13 PM (3).jpeg",
        "videos": [],
        "code": "DMM2654"
    },
    {
        "id": "product_55",
        "title": "Mahaganapati Sacred Form - Edition 5",
        "price": "₹2,099",
        "originalPrice": "₹4,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM.jpeg",
        "videos": [],
        "code": "DMM2655"
    },
    {
        "id": "product_56",
        "title": "Heramba Divine Idol - Edition 5",
        "price": "₹2,199",
        "originalPrice": "₹4,398",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (1).jpeg",
        "videos": [],
        "code": "DMM2656"
    },
    {
        "id": "product_57",
        "title": "Vighneshwara Clay Murti - Edition 5",
        "price": "₹2,299",
        "originalPrice": "₹4,598",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.14 PM (2).jpeg",
        "videos": [],
        "code": "DMM2657"
    },
    {
        "id": "product_58",
        "title": "Dhumravarna Heritage Edition - Edition 5",
        "price": "₹2,399",
        "originalPrice": "₹4,798",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM.jpeg",
        "videos": [],
        "code": "DMM2658"
    },
    {
        "id": "product_59",
        "title": "Vakratunda Artistic Form - Edition 5",
        "price": "₹2,499",
        "originalPrice": "₹4,998",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (1).jpeg",
        "videos": [],
        "code": "DMM2659"
    },
    {
        "id": "product_60",
        "title": "Sumukhaya Eco Ganesha - Edition 5",
        "price": "₹2,599",
        "originalPrice": "₹5,198",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (2).jpeg",
        "videos": [],
        "code": "DMM2660"
    },
    {
        "id": "product_61",
        "title": "100% Eco Clay Vighnaharta - Edition 6",
        "price": "₹1,549",
        "originalPrice": "₹3,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.15 PM (3).jpeg",
        "videos": [],
        "code": "DMM2661"
    },
    {
        "id": "product_62",
        "title": "Mangalmurti Ganesha Idol - Edition 6",
        "price": "₹1,649",
        "originalPrice": "₹3,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM.jpeg",
        "videos": [],
        "code": "DMM2662"
    },
    {
        "id": "product_63",
        "title": "Lambodara Majestic Form - Edition 6",
        "price": "₹1,749",
        "originalPrice": "₹3,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (1).jpeg",
        "videos": [],
        "code": "DMM2663"
    },
    {
        "id": "product_64",
        "title": "Gajanana Traditional - Edition 6",
        "price": "₹1,849",
        "originalPrice": "₹3,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (2).jpeg",
        "videos": [],
        "code": "DMM2664"
    },
    {
        "id": "product_65",
        "title": "Siddhivinayak Pure Clay - Edition 6",
        "price": "₹1,949",
        "originalPrice": "₹3,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.16 PM (3).jpeg",
        "videos": [],
        "code": "DMM2665"
    },
    {
        "id": "product_66",
        "title": "Ekadanta Elegant Posture - Edition 6",
        "price": "₹2,049",
        "originalPrice": "₹4,098",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM.jpeg",
        "videos": [],
        "code": "DMM2666"
    },
    {
        "id": "product_67",
        "title": "Mahaganapati Sacred Form - Edition 6",
        "price": "₹2,149",
        "originalPrice": "₹4,298",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (1).jpeg",
        "videos": [],
        "code": "DMM2667"
    },
    {
        "id": "product_68",
        "title": "Heramba Divine Idol - Edition 6",
        "price": "₹2,249",
        "originalPrice": "₹4,498",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.17 PM (2).jpeg",
        "videos": [],
        "code": "DMM2668"
    },
    {
        "id": "product_69",
        "title": "Vighneshwara Clay Murti - Edition 6",
        "price": "₹2,349",
        "originalPrice": "₹4,698",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.18 PM.jpeg",
        "videos": [],
        "code": "DMM2669"
    },
    {
        "id": "product_70",
        "title": "Dhumravarna Heritage Edition - Edition 6",
        "price": "₹2,449",
        "originalPrice": "₹4,898",
        "discount": "50% OFF",
        "image": "images/WhatsApp Image 2026-06-09 at 5.28.18 PM (1).jpeg",
        "videos": [],
        "code": "DMM2670"
    }
];
