"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define(
    "Product_Category",
    {
      categoryId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  Product_Category.associate = function (models) {
    Product_Category.belongsTo(models.Category);
    Product_Category.belongsTo(models.Product);
  };
  return Product_Category;
};
