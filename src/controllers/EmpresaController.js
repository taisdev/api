import Empresa from '../models/Empresa';

class PerfilController {
  async index(req, res) {
    const empresa = await Empresa.findAll({});
    res.json(empresa);
  }

  async create(req, res) {
    try {
      const novaEmpresa = await Empresa.create(req.body);
      return res.json(novaEmpresa);
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

      const empresa = await Empresa.findByPk(id);

      if (!empresa) {
        return res.status(400).json({
          errors: ['Esse perfil não existe'],
        });
      }

      return res.json(empresa);
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

      const empresa = await Empresa.findByPk(id);

      if (!empresa) {
        return res.status(400).json({
          errors: ['Essa empresa não existe'],
        });
      }

      await empresa.destroy();
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

      const empresa = await Empresa.findByPk(id);

      if (!empresa) {
        return res.status(400).json({
          errors: ['Essa empresa não existe'],
        });
      }

      const empresaAtualizada = await empresa.update(req.body);
      return res.json(empresaAtualizada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new PerfilController();
