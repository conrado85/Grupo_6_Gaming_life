'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'disco rigido',
      description: 'disco de estado solido de 128gigas',
      price: '200',
      img:'',
      category_id:'Almacenamiento',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    name: 'placa de video',
    description: 'placade video  de 128',
    price: '270',
    img:'',
    category_id:'Componente',
    createdAt: new Date(),
    updatedAt: new Date()

    },
    {
      name: 'teclado',
      description: 'teclado retroiluminado rgb',
      price: '20',
      img:'',
      category_id:'Perifericos',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
