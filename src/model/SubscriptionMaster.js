module.exports = function (sequelize, DataTypes) {
    const SubscriptionMaster = sequelize.define(
      "subscriptionMasters",
      {
        subscriptionmaster_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        company_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "companies",
            key: "company_id",
          },
        },
        subscription_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "subscriptions",
            key: "subscription_id",
          },
        },
        startDate: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM("Active", "Inactive"),
          allowNull: true,
          defaultValue: "Active",
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        PaymentStatus: {
          type: DataTypes.ENUM("Pending", "Paid", "Failed"),
          allowNull: true,
          defaultValue: "Pending",
        },
        PaymentDate: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        paymentReference: {
          type: DataTypes.STRING,
          allowNull : true
        },
        paymentMode: {
          type: DataTypes.ENUM("Online", "wire", "cash"),
          allowNull: true,
        },
        transactionDate: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        timestamps: true,
        hooks: {
          beforeUpdate: (subscriptionMaster) => {
            if (subscriptionMaster.endDate <= new Date()) {
              subscriptionMaster.status = "Inactive";
            }
          },
        },
      }
    );
  
    return SubscriptionMaster;
  };