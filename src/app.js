import dotenv from 'dotenv';

import './database';
import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import perfilRoutes from './routes/perfilRoutes';
import empresaRoutes from './routes/empresaRoutes';

dotenv.config();
/*

const whiteList = [
  'https://localhost:3001',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
*/

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.app.use(cors(corsOptions));
    // this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/perfil/', perfilRoutes);
    this.app.use('/empresa/', empresaRoutes);
  }
}

export default new App().app;
