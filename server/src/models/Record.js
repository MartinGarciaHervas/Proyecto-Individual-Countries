const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Record', {
        record: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }, { timestamps: false })
}