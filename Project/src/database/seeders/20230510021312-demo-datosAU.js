'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Aboutus',[{
      name:"Gonzalez Conrado",
      img:"avatarDefault.jpg",
      description:"Tengo 38 Años,Soy de San Miguel.Trabajo de Operario en una fabrica, y en mis tiempos libres me dedico a aprender a programar , me gustaria ser un desarrolador frontEnd.",
      job:"Developer"
    },
    {
      name:"Medina Maximiliano",
      img:"avatarDefault.jpg",
      description:"Tengo 19 años, Vivo en San Miguel. Soy un Desarrollador FrontEnd junior que quiere aprender más sobre BackEnd y tener la posibilidad de poder hacer las dos.",
      job:"Developer"
    },
    {
      name:"Rodriguez Emiliano",
      img:"avatarDefault.jpg",
      description:"Habitando San Miguel hace 6 años, ex 'zonasureño'. Con paciencia y constancia agregandole todos los dias un paso mas a mi meta de ser Fullstack developer y dedicarme a eso al 100% habiendo partido desde 0% de conocimientos.",
      job:"Developer"
    },
    {
      name:"Ruiz Pablo",
      img:"avatarDefault.jpg",
      description:"Tengo 21 años, actualmente me estoy formando como desarrollador web fullstack, mi meta es algun poder dedicarme a este rubro profesionalmente.",
      job:"Developer"
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Aboutus', null, {});
  }
};
