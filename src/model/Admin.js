// models/Company.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Company = sequelize.define('Company', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactPersonFullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  websiteAddress: {
    type: DataTypes.STRING,
  },
  contactNumber: {
    type: DataTypes.STRING,
  },
  whatsappNumber: {
    type: DataTypes.STRING,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  address1: {
    type: DataTypes.STRING,
  },
  address2: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  pinCode: {
    type: DataTypes.STRING,
  },
  currency: {
    type: DataTypes.STRING,
  },
  currencySymbol: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Company;
