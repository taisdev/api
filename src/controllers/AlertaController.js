import Alerta from '../models/Alerta';

class AlertaController {
  async index(req, res) {
    const alerta = await Alerta.findAll({
      include: ['User'],
    });
    res.json(alerta);
  }

  async create(req, res) {
    try {
      const novoAlerta = await Alerta.create(req.body);
      return res.json(novoAlerta);
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

      const alerta = await Alerta.findByPk(id, { include: ['User'] });

      if (!alerta) {
        return res.status(400).json({
          errors: ['Esse alerta não existe'],
        });
      }

      return res.json(alerta);
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

      const alerta = await Alerta.findByPk(id, { include: ['User'] });

      if (!alerta) {
        return res.status(400).json({
          errors: ['Esse alerta não existe'],
        });
      }

      await alerta.destroy();
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

      const alerta = await Alerta.findByPk(id, { include: ['User'] });

      if (!alerta) {
        return res.status(400).json({
          errors: ['Esse alerta não existe'],
        });
      }

      const alertaAtualizado = await alerta.update(req.body);
      return res.json(alertaAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlertaController();
