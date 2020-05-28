"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Category.associate = function (models) {
    Category.belongsToMany(models.Product, {
      through: "Product_Categories",
      foreignKey: "categoryId",
    });
  };
  return Category;
};
