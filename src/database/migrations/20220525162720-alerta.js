module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alerta', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      lido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      dt_create: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      dt_lido: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
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
    await queryInterface.dropTable('Alerta');
  },
};
