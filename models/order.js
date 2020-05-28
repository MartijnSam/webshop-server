"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      totalPrice: DataTypes.DECIMAL,
    },
    {}
  );
  Order.associate = function (models) {
    Order.belongsTo(models.Customer);
    Order.belongsToMany(models.Product, {
      through: "Order_Products",
      foreignKey: "orderId",
    });
  };
  return Order;
};
