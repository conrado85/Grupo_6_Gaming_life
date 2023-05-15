'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Pablo',
      email: 'example@example.com',
      password:'$2a$10$G8DsmUfj3ZXKwD.ws7bfS.DdxTDJSqQ4R44i8FMm7ENTsXAb.ROdq',
      username:'Pablo',
      img:'1684176459406-user.jpg',
      role_id:'1',
    },
    { 
    name: 'Maxi',
    email: 'example2@example2.com',
    password:'$2a$10$158V/X0Oh6FBME8.7T673O/vuMrnp7SWPvsL0pZd5M/YUwbfU9r4.',
    username:'Maxi',
    img:'1684176284276-user.jpg',
    role_id:'2',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};   