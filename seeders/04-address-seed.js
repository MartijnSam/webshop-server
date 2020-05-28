"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Addresses",
      [
        {
          street: "Zandfort",
          number: "66",
          postcode: "4631RN",
          city: "Hoogerheide",
          country: "Netherlands",
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};
