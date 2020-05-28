"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Animal",
          description: "This mug has something with an animal on it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Funny",
          description: "This mug has something funny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "18+",
          description: "This mug has something only for adults on it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cute",
          description: "This mug has something cute on it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
