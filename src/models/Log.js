import Sequelize, { Model } from 'sequelize';

export default class Log extends Model {
  static init(sequelize) {
    super.init({
      ip: Sequelize.STRING,
      navegador: Sequelize.STRING,
      session: Sequelize.STRING,
      sistema: Sequelize.STRING,
      modulo: Sequelize.STRING,
    }, {
      sequelize,
    });
    Log.associate = (models) => {
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
