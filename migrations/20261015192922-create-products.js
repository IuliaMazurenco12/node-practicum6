"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Products", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "Categories",
        key: "name",
      },
      onUpdate: "CASCADE", 
      onDelete: "CASCADE", 
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Products");
}
