const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    let products = [
        {
            name: "IPHONE 11",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://rukminim2.flixcart.com/image/704/844/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=90&crop=false"
        },
        {
            name: "One Plus 7T",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUmxQT8iM23yhsMKQJ0bBZDYnQ05dAvraoQ&s"
        },
        {
            name: "OPPO 10X",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://assorted.downloads.oppo.com/static/archives/images/dd/Smartphones/Reno-pro/Floating-Layer-980-x-748.png"
        },
        {
            name: "MI Note 9 pro",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro-500x500.jpg?x70461"
        },
        {
            name: "IPHONE 11",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://rukminim2.flixcart.com/image/704/844/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=90&crop=false"
        },
        {
            name: "IPHONE 11",
            category: "Mobile",
            description: "This is a good phone",
            image: "https://rukminim2.flixcart.com/image/704/844/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=90&crop=false"
        },
    ]

    res.render('index', { products , admin: false })
});

module.exports = router;