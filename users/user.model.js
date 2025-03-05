
const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    const attributes = {
       email: {type: DataTypes.STRING, allowNull: false},
       passwordHash: {type: DataTypes.STRING, allowNull: false},
       title: {type: DataTypes.STRING, allowNull: false},
       fistname: {type: DataTypes.STRING, allowNull: false},
       lastname: {type: DataTypes.STRING, allowNull: false},
       role: {type: DataTypes.STRING, allowNull: false},
    };

    const options = {
        defaultScope: {
            //exclude hash by default
            attributes: {exclude: ['passwordHash']}
        },
        scopes: {
            //include hash with this scope
            withHash: {attributes: {},}
        }
    };

    return sequelize.define('User', attributes, options);
}