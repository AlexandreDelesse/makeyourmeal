// db.js
const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

// Initialiser la connexion à la base de données SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Définir le modèle NutritionalInfo
const NutritionalInfo = sequelize.define("NutritionalInfo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  lipids: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  proteins: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  carbohydrates: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Définir le modèle Ingredient
const Ingredient = sequelize.define("Ingredient", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Définir la relation entre Ingredient et NutritionalInfo
Ingredient.belongsTo(NutritionalInfo);
NutritionalInfo.hasMany(Ingredient);

// Synchroniser les modèles avec la base de données
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Failed to sync database:", err));

module.exports = {
  sequelize,
  Ingredient,
  NutritionalInfo,
};
