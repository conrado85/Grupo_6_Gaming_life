module.exports = (sequelize, dataTypes) => {
    let alias = 'product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45)
        },
        category:{
            type: dataTypes.INTEGER(3).UNSIGNED,
            allownull: false
        },
        description:{
            type: dataTypes.STRING(100),
            allownull: false
        },
        img:{
            type: dataTypes.STRING(100),
            allownull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'products'
    }
    const product = sequelize.define(alias, cols, config);

    return product
};