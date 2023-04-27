module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(128),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11,2),
            allowNull: false
        },
        img: {
            type: dataTypes.TEXT
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
    }

    return Product
};