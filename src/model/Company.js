module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define(
    "company",
    {
      company_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      super_admin_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "super_admins",
          key: "super_admin_id",
        },
      },
      businessType: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      businessLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      businessName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      contactPersonFullName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      whatsappContact: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 0,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pincode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      countryName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pincode1: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      countryName1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subscriptionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "subscriptions",
          key: "subscription_id",
        },
      },
      start_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      expiry_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      renewed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      currency_code: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      currency_symbol: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "inactive",
      },
      taxRegNo: {
        type: DataTypes.STRING ,
        allowNull : true
        // defaultValue: "inactive",
      },
    },
    {
      timestamps: true,
      underscored: true,
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
    }
  );
  return Company;
};