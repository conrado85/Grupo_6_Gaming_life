const db = require('../../database/models');

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
      });

      const response = {
        count: products.length,
        countByCategory: countByCategory,
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          categories: product.category ? product.category.name : null,
          detail: `http://localhost:3030/products/${product.id}`,
          imageUrl: `http://localhost:3030/images/imgProductos/${product.img}`,
        })),
      };

      res.json(response);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  getByID: async (req, res) => {
    try {
      const product = await db.Products.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send({
          status: 404,
          error: 'Producto no encontrado',
        });
      }

      const response = {
        productos: [
          {
            
            name: product.name,
            description: product.description,
            categories: product.category_id,
            imageUrl: `http://localhost:3030/images/imgProductos${product.img}`,
          },
        ],
      };

      res.json(response);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = controller;