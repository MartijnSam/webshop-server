"use strict";
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      postcode: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {}
  );
  Address.associate = function (models) {
    Address.belongsTo(models.Customer);
  };
  return Address;
};
