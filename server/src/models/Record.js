const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Record', {
        record: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false
        }
    }, { timestamps: false })
}