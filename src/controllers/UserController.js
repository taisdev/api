import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll({
      include: ['Empresa', 'Perfil'],
    });
    res.json(user);
  }

  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
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

      const user = await User.findByPk(id, { include: ['Perfil', 'Empresa'] });

      if (!user) {
        return res.status(400).json({
          errors: ['Esse user não existe'],
        });
      }

      return res.json(user);
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

      const user = await User.findByPk(id, { include: ['Perfil', 'Empresa'] });

      if (!user) {
        return res.status(400).json({
          errors: ['Esse user não existe'],
        });
      }

      await user.destroy();
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

      const user = await User.findByPk(id, { include: ['Perfil', 'Empresa'] });

      if (!user) {
        return res.status(400).json({
          errors: ['Esse user não existe'],
        });
      }

      const userAtualizado = await user.update(req.body);
      return res.json(userAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
