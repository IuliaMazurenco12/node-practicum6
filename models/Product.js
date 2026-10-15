import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Categories", // таблица, на которую ссылаемся
        key: "name",         // поле в этой таблице
      },
    },
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

export default Product;
