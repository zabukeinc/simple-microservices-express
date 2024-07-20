const { DataTypes } = require("sequelize");
const sequelizeInstance = require("@database/database");
const TransactionModel = require("@transaction-module/domains/models/transaction.model");

const UserModel = sequelizeInstance.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("customer", "vendor"),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { timestamps: true, paranoid: true },
);

UserModel.associate = () => {
  UserModel.hasMany(TransactionModel, {
    foreignKey: "vendorId",
    as: "vendorTransactions",
  });
  UserModel.hasMany(TransactionModel, {
    foreignKey: "customerId",
    as: "customerTransactions",
  });
};
module.exports = UserModel;
