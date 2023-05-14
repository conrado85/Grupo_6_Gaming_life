'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'disco rigido',
      description: 'disco de estado solido de 128gigas',
      price: '200',
      img:'DiscodurointernoSeagateSkyHawk1TB.jpg',
      category_id:'2',
    },
    { name: 'placa de video',
      description: 'placade video  de 128',
      price: '270',
      img:'',
      category_id:'1',
    },
    {
      name: 'teclado',
      description: 'teclado retroiluminado rgb',
      price: '20',
      img:'',
      category_id:'3',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
