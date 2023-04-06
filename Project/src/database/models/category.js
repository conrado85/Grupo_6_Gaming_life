module.exports = (sequelize, dataTypes) => {
    let alias = 'category';
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
        tableName: 'categories'
    }
    const category = sequelize.define(alias, cols, config);

    return category
};