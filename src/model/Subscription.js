// models/Subscription.js
module.exports = function (sequelize, DataTypes) {
  const Subscription = sequelize.define("subscriptions", {
    subscription_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    planName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planType: {
      type: DataTypes.ENUM("Monthly", "Yearly"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    months_Year_Num : {
      type : DataTypes.INTEGER,
      allowNull : false ,
      defaultValue : 1
    }, 
    noOfCompanyAllowed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue : 1
    },
    noOfAdminAllowed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue : 1
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      allowNull: true,
      defaultValue: "Active",
    },

  });
  return Subscription;
};
