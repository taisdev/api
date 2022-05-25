import Sequelize, { Model } from 'sequelize';

export default class EmpresaDocumento extends Model {
  static init(sequelize) {
    super.init({
      doc_ativo: Sequelize.BOOLEAN,
      doc_obrigatorio: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    EmpresaDocumento.associate = (models) => {
      this.belongsTo(models.Documento, {
        foreignKey: 'Documento_idDocumento',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'Documento',
      });
      this.belongsTo(models.Empresa, {
        foreignKey: 'Empresa_idEmpresa',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'Empresa',
      });
    };
    return this;
  }
}
