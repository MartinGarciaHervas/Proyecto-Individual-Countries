const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                esFormatoHoras(value) {
                    if (!/^\d{1,2}Hs$/.test(value)) {
                        throw new Error('La duración debe estar en el formato xxHs');
                    }
                }
            }
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false,
        }
    }, { timestamps: false })
}