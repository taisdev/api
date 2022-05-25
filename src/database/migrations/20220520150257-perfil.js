module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfil', {
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
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Perfil');
  },
};
