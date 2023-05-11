const db = require('../../database/models');
const { error } = require('console');
const { response } = require('express');

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll();
            const response = {
                count: products.length,
                countByCategory: countByCategory.forEach((category) => {
                    response.countByCategory[category.category] = category.count;
                }),
                products: products.map((product) => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        categories: product.categories,
                        detail: product.detailUrl
                })),
            };
            res.json(response);

        } catch (error) {
            res.send(error)
        }
    },
    getByID: async (req, res) => {
        try {
            const products = await db.Product.findByPk(req.params.id);
            if (!products) {
                return res.status(404).send({
                    status: 404,
                    error: 'producto no encontrado'

                })
            }

            const response = {
                name: products.name,
                description: products.description,
                imageUrl: `https://example.com/images/${req.params.id}.jpg`
            };
            res.json(response);
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controller;