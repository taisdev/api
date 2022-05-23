import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Perfil from '../models/Perfil';
import Empresa from '../models/Empresa';
import Documento from '../models/Documento';

const models = [Perfil, Empresa, Documento];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
