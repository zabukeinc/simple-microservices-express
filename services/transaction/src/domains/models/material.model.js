const { DataTypes } = require("sequelize");
const sequelizeInstance = require("@database/database");
const TransactionModel = require("@transaction-module/domains/models/transaction.model");

const MaterialModel = sequelizeInstance.define(
  "materials",
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

MaterialModel.associate = () => {
  MaterialModel.hasMany(TransactionModel, {
    foreignKey: "materialId",
    as: "materialTransactions",
  });
};
module.exports = MaterialModel;
