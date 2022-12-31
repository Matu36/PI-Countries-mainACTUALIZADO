const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),   //Lo que se enumera en el modelo
    },
    duration: {
      type: DataTypes.STRING
    },
    seasson: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  }, {
    timestamps: false
  });
};