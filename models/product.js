"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      inStock: DataTypes.INTEGER,
      description: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
