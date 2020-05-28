"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order_Product = sequelize.define(
    "Order_Product",
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  );
  Order_Product.associate = function (models) {
    Order_Product.belongsTo(models.Order);
    Order_Product.belongsTo(models.Product);
  };
  return Order_Product;
};
