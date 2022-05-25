import Sequelize, { Model } from 'sequelize';

export default class DocumentoUser extends Model {
  static init(sequelize) {
    super.init({
      doc_validado: Sequelize.BOOLEAN,
      doc_validado_date: Sequelize.DATE,
      path_save: Sequelize.STRING,
    }, {
      sequelize,
    });
    DocumentoUser.associate = (models) => {
      this.belongsTo(models.EmpresaDocumento, {
        foreignKey: 'Empresa_Documento_idEmpresa_Documento',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'Empresa_Documento',
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
