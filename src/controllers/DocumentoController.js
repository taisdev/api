import Documento from '../models/Documento';

class DocumentoController {
  async index(req, res) {
    const documento = await Documento.findAll({});
    res.json(documento);
  }

  async create(req, res) {
    try {
      const novoDocumento = await Documento.create(req.body);
      console.log('Doc', novoDocumento);
      return res.json(novoDocumento);
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

      const documento = await Documento.findByPk(id);

      if (!documento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      return res.json(documento);
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

      const documento = await Documento.findByPk(id);

      if (!documento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      await documento.destroy();
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

      const documento = await Documento.findByPk(id);

      if (!documento) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      const documentoAtualizado = await documento.update(req.body);
      return res.json(documentoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new DocumentoController();
