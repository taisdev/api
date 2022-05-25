module.exports = {
  username: 'taisd',
  password: '',
  database: 'mydb',
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timestamps: true,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
  timezone: '-03:00',
  dialectOptions: {
    timezone: '-03:00',
  },
};
