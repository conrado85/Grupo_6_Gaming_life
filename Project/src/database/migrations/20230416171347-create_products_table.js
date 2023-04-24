'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(128),
    },
    description:{
        type: Sequelize.TEXT,
        allownull: false
    },
    price:{
        type: Sequelize.DECIMAL(11,2),
        allownull: false
    },
    img:{
        type: Sequelize.STRING(128),
        allownull: false
    },
    category_id:{
      type: Sequelize.INTEGER,
      references:{
        model:'categories',
        key:'id'
      }
    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');
  }
};
