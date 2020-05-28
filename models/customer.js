"use strict";
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.STRING,
      profileImg: DataTypes.STRING,
    },
    {}
  );
  Customer.associate = function (models) {
    Customer.hasMany(models.Order);
    Customer.hasMany(models.Address);
  };
  return Customer;
};
