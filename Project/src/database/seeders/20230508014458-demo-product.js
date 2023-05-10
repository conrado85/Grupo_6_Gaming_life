'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Motherboard Asrock B360m',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '21656',
      img: 'MotherboardAsrockB360m.png',
      category_id: '1',
    },
    {
      name: 'Placa de video Nvidia GTX 1050 Ti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '163647',
      img: 'PlacadevideoNvidiaGTX1050Ti.jpg',
      category_id: '1',
    },
    {
      name: 'Teclado gamer Redragon Kumara K552',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '21399',
      img: 'TecladogamerRedragonKumaraK552.png',
      category_id: '3',
    },
    {
      name: 'Mouse gamer HP Gamer G360',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '5339',
      img: 'MousegamerHPGamerG360.jpg',
      category_id: '3',
    },
    {
      name: 'Disco duro interno Seagate SkyHawk 1TB',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '24638',
      img: 'DiscodurointernoSeagateSkyHawk1TB.jpg',
      category_id: '2',
    },
    {
      name: 'Disco Sólido Ssd Lexar Nm620 512gb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Facilisis sed odio morbi quis commodo odio. Habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam maecenas sed enim ut sem. Aliquam vestibulum morbi blandit cursus risus at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae auctor eu augue ut lectus arcu bibendum. Malesuada fames ac turpis egestas integer eget. Non arcu risus quis varius quam quisque id diam. Eget sit amet tellus cras. Vel eros donec ac odio tempor orci. Feugiat in ante metus dictum at tempor. Volutpat est velit egestas dui id ornare arcu odio ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
      price: '22499',
      img: 'DiscoSólidoSsdLexarNm620512gb.jpg',
      category_id: '2',
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
