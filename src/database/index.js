import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Perfil from '../models/Perfil';
import Empresa from '../models/Empresa';
import Documento from '../models/Documento';
import User from '../models/User';
import Alerta from '../models/Alerta';
import EmpresaDocumento from '../models/EmpresaDocumento';
import Log from '../models/Log';
import DocumentoUser from '../models/DocumentoUser';

const models = [Perfil, Empresa, Documento, User, Alerta, Log, EmpresaDocumento, DocumentoUser];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
