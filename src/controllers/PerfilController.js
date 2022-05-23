import Perfil from '../models/perfil';

class PerfilController {
  async index(req, res) {
    const perfil = await Perfil.findAll({});
    res.json(perfil);
  }

  async create(req, res) {
    try {
      const novoPerfil = await Perfil.create(req.body);
      return res.json(novoPerfil);
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

      const perfil = await Perfil.findByPk(id);

      if (!perfil) {
        return res.status(400).json({
          errors: ['Esse perfil não existe'],
        });
      }

      return res.json(perfil);
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

      const perfil = await Perfil.findByPk(id);

      if (!perfil) {
        return res.status(400).json({
          errors: ['Esse perfil não existe'],
        });
      }

      await perfil.destroy();
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

      const perfil = await Perfil.findByPk(id);

      if (!perfil) {
        return res.status(400).json({
          errors: ['Esse perfil não existe'],
        });
      }

      const perfilAtualizado = await perfil.update(req.body);
      return res.json(perfilAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new PerfilController();
