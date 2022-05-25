import Sequelize, { Model } from 'sequelize';

export default class Alerta extends Model {
  static init(sequelize) {
    super.init({
      titulo: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      link: Sequelize.STRING,
      lido: Sequelize.BOOLEAN,
      dt_lido: Sequelize.DATE,

    }, {
      sequelize,
    });
    Alerta.associate = (models) => {
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
