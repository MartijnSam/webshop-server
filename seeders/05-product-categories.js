"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product_Categories",
      [
        {
          categoryId: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Product_Categories", null, {});
  },
};
