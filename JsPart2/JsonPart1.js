const data = [
    {
        "id": 101,
        "name": "Wireless Headphones",
        "price": 2999,
        "inStock": true,
        "rating": 4.3,
        "category": "Electronics",
        "tags": ["audio", "wireless", "bluetooth"],
        "details": {
            "brand": "SoundPulse",
            "warranty": "1 year",
            "colors": ["black", "white"]
        }
    },
    {
        "id": 102,
        "name": "Smart Watch",
        "price": 5499,
        "inStock": false,
        "rating": 4.7,
        "category": "Wearables",
        "tags": ["fitness", "smart", "bluetooth"],
        "details": {
            "brand": "TimeX",
            "warranty": "2 years",
            "colors": ["silver", "gray", "blue"]
        }
    },
    {
        "id": 103,
        "name": "Mechanical Keyboard",
        "price": 2499,
        "inStock": true,
        "rating": 4.5,
        "category": "Accessories",
        "tags": ["keyboard", "gaming", "wired"],
        "details": {
            "brand": "KeyWorks",
            "warranty": "6 months",
            "colors": ["black"]
        }
    }
]


// data.forEach(element => {
//     console.log(element.name, element.id)
// });
// 1. Printing product names
// data.map((dataItem) =>(
//     // console.log(dataItem.name)
// ))

// 2 Print name and price in one line — "Wireless Headphones - ₹2999".
// data.map((dataItem) => (
//     console.log(dataItem.name, '-', dataItem.price)
// ))

// 3 Print only the brand names (nested inside details.brand).
data.map((dataItem) => (
    console.log(dataItem.details.brand)
))

// 4 Print all tags for each product (nested array)

// data.map((dataItem) => (
//     dataItem.tags.map((tag) => (
//         console.log(tag)
//     ))
// ))
//     () → for returning JSX or a value

// { } → for executing code statements like console.log, conditionals, etc.

// 5 Count how many tags each product has.
let count = 0;

// data.map((dataItem) => {
//     console.log(`${dataItem.name} has ${dataItem.tags.length} tags`);
//     count += dataItem.tags.length;
// })
// console.log(count);

// 6 Conditional + Map/Filter Combo

// Print names of only products that are in stock.

// data.map((dataItem) => {
//     if (dataItem.inStock) {
//         console.log(`${dataItem.name} is in stock`);
//     }
// })

//  7 Print names of products with rating > 4.5.

// data.map((dataItem) => {
//     if (dataItem.rating > 4.5)
//         console.log(`${dataItem.name} has a rating of over 4.5`);
// })

//  8 Show the total price of all in-stock items.

let total = 0;

data.map((dataItem) => {
    if (dataItem.inStock) {
        total += dataItem.price;
    }
});
// console.log(total);

// 9 Adding a new data to existing data
const newItem = {
    id: 104,
    name: "Bluetooth Speaker",
    price: 1999,
    inStock: true,
    rating: 4.6,
    category: "Audio",
    tags: ["speaker", "bluetooth"],
    details: {
        brand: "BoomBox",
        warranty: "1 year",
        colors: ["red", "black"]
    }
};

const updatedData = [...data, newItem];
// updatedData.map((dataItem) => {
//     console.log(dataItem);
// })

// 10 Adding a new field (column) to every object
data.forEach((item) => {
    item.discount = Math.floor(Math.random() * 10);
})

data.forEach((item) => {
    console.log(item);
})

