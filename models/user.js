//создаем схему пользователя модель
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const User = sequelize.define(
  "User",
  {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, //уникальный идентификатор 
        allowNull: false, //не может быть пустым
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, //устанавливаем текущую дату и время по умолчанию
    },
},
{
 tableName: "users", //имя таблицы в базе данных

 timestamps: false, //отключаем автоматическое создание полей createdAt и updatedAt
  });

export default User;