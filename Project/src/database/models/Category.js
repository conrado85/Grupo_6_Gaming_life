module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45)
        }
    };
    let config = {
        timestamps: false,
    }
    const Category = sequelize.define(alias, cols, config);

    return Category
};