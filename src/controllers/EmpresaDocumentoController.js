import EmpresaDocumento from '../models/EmpresaDocumento';

class EmpresaDocumentoController {
  async index(req, res) {
    const empresadocumento = await EmpresaDocumento.findAll({
      include: ['Empresa', 'Documento'],
    });
    res.json(empresadocumento);
  }

  async create(req, res) {
    try {
      const novoEmpresaDocumento = await EmpresaDocumento.create(req.body);
      return res.json(novoEmpresaDocumento);
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

      const empresadocumento = await EmpresaDocumento.findByPk(id, { include: ['Empresa', 'Documento'] });

      if (!empresadocumento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      return res.json(empresadocumento);
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

      const empresadocumento = await EmpresaDocumento.findByPk(id, { include: ['Empresa', 'Documento'] });

      if (!empresadocumento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      await empresadocumento.destroy();
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

      const empresadocumento = await EmpresaDocumento.findByPk(id, { include: ['Empresa', 'Documento'] });

      if (!empresadocumento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      const empresadocumentoAtualizado = await empresadocumento.update(req.body);
      return res.json(empresadocumentoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new EmpresaDocumentoController();
