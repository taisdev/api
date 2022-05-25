import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      login: Sequelize.STRING,
      password: Sequelize.STRING,
      email: Sequelize.STRING,
      ativo: Sequelize.BOOLEAN,
      nome_completo: Sequelize.STRING,
      tipo_pessoa: Sequelize.CHAR,
      cpf_cnpj: Sequelize.STRING,
      data_nascimento: Sequelize.DATE,
      user_ativo: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    User.associate = (models) => {
      this.hasMany(models.Alerta, {
        foreignKey: 'User_idUser',
        as: 'Alerta',
      });
      this.hasMany(models.Log, {
        foreignKey: 'User_idUser',
        as: 'Log',
      });
      this.belongsTo(models.Empresa, {
        foreignKey: 'Empresa_idEmpresa',
        otherKey: 'Perfil_idPerfil',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'Empresa',
      });
      this.belongsTo(models.Perfil, {
        foreignKey: 'Perfil_idPerfil',
        otherKey: 'Empresa_idEmpresa',
        onDelete: 'NO-ACTION',
        onUpdate: 'NO-ACTION',
        as: 'Perfil',
      });
    };
    return this;
  }
}
