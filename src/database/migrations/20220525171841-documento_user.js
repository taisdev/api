module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documento_User', {
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
      doc_validado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      doc_validado_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      path_save: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      User_idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      Empresa_Documento_idEmpresa_Documento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Empresa_Documento',
          key: 'id',
        },
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Documento_User');
  },
};
