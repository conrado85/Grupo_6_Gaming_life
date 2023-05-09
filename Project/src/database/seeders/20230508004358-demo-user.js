'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Pablo',
      email: 'example@example.com',
      password:'123456',
      username:'Pablo',
      img:'',
      role_id:'usuario',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Maxi',
    email: 'example2@example2.com',
    password:'123456',
    username:'Maxi',
    img:'',
    role_id:'Administrador',
    createdAt: new Date(),
    updatedAt: new Date()

    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};   