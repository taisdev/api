import Log from '../models/Log';

class LogController {
  async index(req, res) {
    const log = await Log.findAll({
      include: ['User'],
    });
    res.json(log);
  }

  async create(req, res) {
    try {
      const novoLog = await Log.create(req.body);
      return res.json(novoLog);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const log = await Log.findByPk(id, { include: ['User'] });

      if (!log) {
        return res.status(400).json({
          errors: ['Esse log não existe'],
        });
      }

      return res.json(log);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const log = await Log.findByPk(id, { include: ['User'] });

      if (!log) {
        return res.status(400).json({
          errors: ['Esse log não existe'],
        });
      }

      await log.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const log = await Log.findByPk(id, { include: ['User'] });

      if (!log) {
        return res.status(400).json({
          errors: ['Esse log não existe'],
        });
      }

      const logAtualizado = await log.update(req.body);
      return res.json(logAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new LogController();
