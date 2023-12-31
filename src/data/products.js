import {
    i10,
    i10s,
    i11,
    i11pro,
    i12,
    i12pro,
    i13,
    i13mini,
    i13pro,
    i6,
    i6s,
    i6splus,
    i7,
    i7plus,
    i8,
    i8plus,
    i9,
} from "./productsImages";

const products = [
    {
        title: "Iphone 6",
        image: i6,
        description: "Awesome iphone 6",
        price: 300,
    },
    {
        title: "Iphone 6s",
        image: i6s,
        description: "Awesome iphone 6 s",
        price: 280,
    },
    {
        title: "Iphone 6s plus",
        image: i6splus,
        description: "Awesome iphone 6 s plus",
        price: 340,
    },
    {
        title: "Iphone 7",
        image: i7,
        description: "Awesome iphone 7",
        price: 370,
    },
    {
        title: "Iphone 7 plus",
        image: i7plus,
        description: "Awesome iphone 7 plus",
        price: 400,
    },
    {
        title: "Iphone 8",
        image: i8,
        description: "Awesome iphone 8 plus",
        price: 440,
    },
    {
        title: "Iphone 8 plus",
        image: i8plus,
        description: "Awesome iphone 8 plus",
        price: 480,
    },
    {
        title: "Iphone 9",
        image: i9,
        description: "Awesome iphone 9",
        price: 520,
    },
    {
        title: "Iphone 10",
        image: i10,
        description: "Awesome iphone 10",
        price: 620,
    },
    {
        title: "Iphone 10s",
        image: i10s,
        description: "Awesome iphone 10 s",
        price: 580,
    },
    {
        title: "Iphone 11",
        image: i11,
        description: "Awesome iphone 11",
        price: 680,
    },
    {
        title: "Iphone 11 pro",
        image: i11pro,
        description: "Awesome iphone 11 pro",
        price: 800,
    },
    {
        title: "Iphone 12",
        image: i12,
        description: "Awesome iphone 12",
        price: 880,
    },
    {
        title: "Iphone 12 pro",
        image: i12pro,
        description: "Awesome iphone 12 pro",
        price: 950,
    },
    {
        title: "Iphone 13",
        image: i13,
        description: "Awesome iphone 13",
        price: 1050,
    },
    {
        title: "Iphone 13 mini",
        image: i13mini,
        description: "Awesome iphone 13 mini",
        price: 880,
    },
    {
        title: "Iphone 13 pro",
        image: i13pro,
        description: "Awesome iphone 13 pro",
        price: 1150,
    },
].map((product) => {
    product.id = product.title; // generated ids are changed every time app is refreshed and is not in sync with localStorage, so title will be the id as its assumed its persistent
    return product;
});

export default products;
