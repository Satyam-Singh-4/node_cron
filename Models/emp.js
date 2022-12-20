const { Sequelize } = require("sequelize");
const sequelize = require("../Configuration/db");
const employee = sequelize.define(
  "Employee",
  {
    emp_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expiry_date: {
      type: Sequelize.DATEONLY,
      defaultValue:new Date(),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = employee;
