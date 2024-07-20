const { DataTypes } = require("sequelize");
const sequelizeInstance = require("@database/database");
const UserModel = require("@transaction-module/domains/models/user.model");
const MaterialModel = require("@transaction-module/domains/models/material.model");

const TransactionModel = sequelizeInstance.define(
  "transactions",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    vendorId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    materialId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "materials",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    materialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vendorName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
  {
    timestamps: true,
    paranoid: true,
  },
);

TransactionModel.associate = () => {
  TransactionModel.belongsTo(UserModel, {
    foreignKey: "vendorId",
    as: "vendor",
  });
  TransactionModel.belongsTo(UserModel, {
    foreignKey: "customerId",
    as: "customer",
  });
  TransactionModel.belongsTo(MaterialModel, {
    foreignKey: "materialId",
    as: "material",
  });
};

module.exports = TransactionModel;
