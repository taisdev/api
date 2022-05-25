module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome_fantasia: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      razao_social: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      whatsapp: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      site: {
        type: Sequelize.STRING(99),
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Empresa');
  },
};
