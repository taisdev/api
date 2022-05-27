import Sequelize, { Model } from 'sequelize';

export default class Perfil extends Model {
  static init(sequelize) {
    super.init({
      titulo: Sequelize.STRING,
      descricao: Sequelize.STRING,
      ativo: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    Perfil.associate = (models) => {
      this.hasMany(models.User, {
        foreignKey: 'Empresa_idEmpresa',
        as: 'User',
      });
    };
    return this;
  }
}
