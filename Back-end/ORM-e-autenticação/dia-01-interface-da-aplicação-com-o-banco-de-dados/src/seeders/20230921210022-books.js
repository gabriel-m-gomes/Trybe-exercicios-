'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'A volta dos q não foram',
          author: 'Gabriel Macedo Gomes',
          pageQuantity: 30,
          // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Barbie',
          author: 'Ana julia antunes',
          pageQuantity: 10,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
