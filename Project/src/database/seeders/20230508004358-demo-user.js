'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Pablo',
      email: 'example@example.com',
      password: bcrypt.hashSync("12345678", 10),
      username:'Pablo',
      img:'1684176459406-user.jpg',
      role_id:'1',
    },
    { 
    name: 'Maxi',
    email: 'example2@example2.com',
    password: bcrypt.hashSync("12345678", 10),
    username:'Maxi',
    img:'1684176284276-user.jpg',
    role_id:'2',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};   