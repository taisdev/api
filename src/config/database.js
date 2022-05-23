require('dotenv').config();

module.exports = {
  username: 'taisd',
  password: '',
  database: 'mydb',
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timestamps: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
