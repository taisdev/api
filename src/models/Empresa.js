import Sequelize, { Model } from 'sequelize';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      nome_fantasia: Sequelize.STRING,
      razao_social: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      endereco: Sequelize.TEXT,
      email: Sequelize.STRING,
      telefone: Sequelize.STRING,
      whatsapp: Sequelize.STRING,
      site: Sequelize.STRING,
    }, {
      sequelize,
    });
    Empresa.associate = (models) => {
      this.hasMany(models.User, {
        foreignKey: 'Empresa_idEmpresa',
        as: 'User',
      });
    };
    return this;
  }
}
