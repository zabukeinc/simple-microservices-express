"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      vendorId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      customerId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      materialId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "materials",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      materialName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transactions");
  },
};
