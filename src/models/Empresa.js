import Sequelize, { Model } from 'sequelize';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      nomeFantasia: Sequelize.STRING,
      razaoSozial: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      endereco: Sequelize.STRING,
      email: Sequelize.STRING,
      telefone: Sequelize.STRING,
      whatsapp: Sequelize.STRING,
      site: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
