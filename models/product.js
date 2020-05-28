"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      inStock: DataTypes.INTEGER,
      description: DataTypes.STRING(1000),
      img: DataTypes.STRING,
    },
    {}
  );
  Product.associate = function (models) {
    Product.belongsToMany(models.Order, {
      through: "Order_Products",
      foreignKey: "productId",
    });
    Product.belongsToMany(models.Category, {
      through: "Product_Categories",
      foreignKey: "productId",
    });
  };
  return Product;
};
