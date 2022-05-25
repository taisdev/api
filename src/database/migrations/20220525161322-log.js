module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Log', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      dt_create: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      ip: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      navegador: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      session: {
        type: Sequelize.STRING(45),
      },
      sistema: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      modulo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      User_idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Log');
  },
};
