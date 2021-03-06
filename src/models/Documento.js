import Sequelize, { Model } from 'sequelize';

export default class Documento extends Model {
  static init(sequelize) {
    super.init({
      titulo: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      formato: Sequelize.STRING,
      ativo: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
}
