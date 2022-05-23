import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Perfil from '../models/perfil';
import Empresa from '../models/Empresa';

const models = [Perfil, Empresa];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
