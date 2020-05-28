"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "The Customer is always... Mug",
          price: 7.99,
          inStock: 50,
          description: `Mug with the customer is always a massive twat! Brighten up someone else's day with these humorous designs. Guaranteed to make you laugh spit your drink out and go say "Oh my god".`,
          img:
            "https://s1.thcdn.com//productimg/1600/1600/12356475-3594719372414915.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Knob Mug",
          price: 8.99,
          inStock: 100,
          description: `Bring a touch of fun to brew time with the Knob Mug. Featuring a gold-toned door knob handle and a humorous slogan, the ceramic cup makes the perfect gift for friends or colleagues.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/11692551-1114558204072071.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TEA-REX Mug",
          price: 5,
          inStock: 150,
          description: `Lovingly created with dinosaurs in mind, this 10oz mug is the perfect way to liven up your coffee break. Sit back, relax and sip away with your favourite prehistoric creature. Dishwasher and Microwaveable safe.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/11633208-2014534568260563.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sloth Good Morning Mug",
          price: 3.5,
          inStock: 20,
          description: `Have a very good morning with this cute sloth. This ceramic mug has a capacity of 315ml / 11oz and is dishwasher and microwave safe. Presented in a secure box, this mug is a great gift idea.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/11682497-6674551975594426.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C*CK Mug",
          price: 13.5,
          inStock: 10,
          description: `What is an "ock"? We hope you will "c" the whole answer, and the whole message if you look hard enough! This ceramic mug has a capacity of 315ml / 10oz and is dishwasher and microwave safe. Presented in a secure box, this mug is a great gift idea.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/12070993-1744658708261124.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toilet Mug",
          price: 1.5,
          inStock: 100,
          description: `When drinking from the bowl is a good thing.
          Watching someone take a drink from our toilet mug is guaranteed to crack a smile. This popular mug makes a great gift for any age, and also makes a great candy or ice cream dish. It’s even great for tea—just ask Sir Richard Branson.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/12070224-3004660845486312.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colour Changing Unicorn Mug",
          price: 12.75,
          inStock: 1000,
          description: `Serve your daily cuppa with a little magic with the Colour Changing Unicorn Mug. The 3D mug has an adorable face and horn and when filled with a hot drink will reveal a charming multi-coloured mane. The mug will delight all unicorn lovers.`,
          img:
            "https://s1.thcdn.com/productimg/1600/1600/11433365-8614487371659153.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
