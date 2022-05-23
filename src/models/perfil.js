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
    return this;
  }
}
