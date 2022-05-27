import Sequelize, { Model } from 'sequelize';

export default class DocumentoUser extends Model {
  static init(sequelize) {
    super.init({
      doc_validado: Sequelize.BOOLEAN,
      doc_validadoDate: Sequelize.DATE,
      path_save: Sequelize.STRING,
    }, {
      sequelize,
    });
    DocumentoUser.associate = (models) => {
      this.belongsTo(models.EmpresaDocumento, {
        foreignKey: 'Empresa_DocumentoIdEmpresaDocumento',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'EmpresaDocumento',
      });
      this.belongsTo(models.User, {
        foreignKey: 'User_idUser',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'User',
      });
    };
    return this;
  }
}
