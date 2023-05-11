const db = require('../../database/models');
const { error, count } = require('console');
const { response } = require('express');

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Products.findAll({
                include: [{ model: db.Category, as: 'category' }]
              });
            const countByCategory = {};
            products.forEach((product) => {
                const categoryId = product.category ? product.category.name : null;
                if (countByCategory[categoryId]) {
                    countByCategory[categoryId]++;
                } else {
                    countByCategory[categoryId] = 1;
                }
            })
            const response = {
                count: products.length,
                countByCategory: countByCategory,
                products: products.map((product) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    categories: product.category ? product.category.name : null,
                    detail: `http://localhost:3030/products/${product.id}`,
                })),
            };

            res.json(response);

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    getByID: async (req, res) => {
        try {
            const products = await db.Products.findByPk(req.params.id);
            if (!products) {
                return res.status(404).send({
                    status: 404,
                    error: 'producto no encontrado'

                })
            }

            const response = {
                name: products.name,
                description: products.description,
                categories: product.category ? product.category.name : null,
                imageUrl: `https://localhost:3030/images/${req.params.id}.jpg`
            };
            res.json(response);
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controller;