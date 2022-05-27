module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmpresaDocumento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      Empresa_idEmpresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Empresa',
          key: 'id',
        },
      },
      Documento_idDocumento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Documento',
          key: 'id',
        },
      },
      dt_create: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      doc_ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      doc_obrigatorio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('EmpresaDocumento');
  },
};
