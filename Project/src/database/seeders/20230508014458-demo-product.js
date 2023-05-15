'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Disco duro interno Seagate SkyHawk 1TB',
      description: 'El SkyHawk Surveillance ST1000VX005 se caracteriza por su eficiencia y buen funcionamiento, que sumado a su reducido consumo energético lo vuelven un disco indispensable para funciones estándar.\n\nResguardá todo tipo de información sensible a través de su sistema de seguridad incorporado.\n\nSu defensa es impenetrable.\n\nEste producto posee una interfaz SATA III que se encarga de transferir datos con la placa madre de tu computadora. Es de gran importancia y con su velocidad de envío de información mejora el rendimiento.\n\nVas a poder cargar todo tipo de archivos en tu PC con rapidez.',
      price: '25926.00',
      img:'DiscodurointernoSeagateSkyHawk1TB.jpg',
      category_id:'2',
    },
    { name: 'Placa de video Nvidia GTX 1050Ti',
      description:'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora.\n\nAdemás, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.\n\nVelocidad en cada lectura. Como cuenta con 768 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.\n\nCalidad de imagen. Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.',
      price: '176329.00',
      img:'PlacadevideoNvidiaGTX1050Ti.jpg',
      category_id:'1',
    },
    {
      name: 'Teclado gamer Redragon Kumara K552',
      description: 'La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.',
      price: '24299.00',
      img:'TecladogamerRedragonKumaraK552.png',
      category_id:'3',
    },
    {
      name: 'Disco Sólido SSD Lexar Nm620',
      description: 'Con la unidad en estado sólido Lexar vas a incrementar la capacidad de respuesta de tu equipo. Gracias a esta tecnología podrás invertir en velocidad y eficiencia para el inicio, la carga y la transferencia de datos.\n\nMás velocidad a tu alcance. Este disco transfiere datos a través de una interfaz M.2, NVMe, PCIe, lo que te brindará trasmitir una mayor cantidad de información de una sola vez.',
      price: '22000.00',
      img:'DiscoSólidoSsdLexarNm620512gb.jpg',
      category_id:'2',
    },
    {
      name: 'Motherboard Asrock B360m',
      description: 'Marca ASRock\nLínea OEM\nModelo B360M\nVersión 1.0\nColor Negro\nChipsets: Intel B360\nSocket: Lga 1151 (300 series)\nRanuras de expansión:\nPci express 3.0 x16\n2 x pcie 3.0 x16 (16/4)\npci express x1\n2 x pcie 3.0 x1',
      price: '26324.00',
      img:'MotherboardAsrockB360m.png',
      category_id:'1',
    },
    {
      name: 'Mousegamer HP Gamer G360',
      description: 'La funcionalidad al alcance de tu mano.\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n Apto para fácil traslado.\n Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',
      price: '5399.00',
      img:'MousegamerHPGamerG360.jpg',
      category_id:'3',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
