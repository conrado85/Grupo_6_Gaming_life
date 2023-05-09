'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Pablo',
      email: 'example@example.com',
      password:'12345678',
      username:'Pablo',
      img:'avatarUser',
      role_id:'1',
    },
    { 
    name: 'Maxi',
    email: 'example2@example2.com',
    password:'12345678',
    username:'Maxi',
    img:'AvatarAdmin',
    role_id:'2',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};   