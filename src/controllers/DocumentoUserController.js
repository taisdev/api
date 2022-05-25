import DocumentoUser from '../models/DocumentoUser';

class DocumentoUserController {
  async index(req, res) {
    const documentouser = await DocumentoUser.findAll({
      include: ['User', 'Empresa_Documento'],
    });
    res.json(documentouser);
  }

  async create(req, res) {
    try {
      const novoDocumentoUser = await DocumentoUser.create(req.body);
      return res.json(novoDocumentoUser);
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

      const documentouser = await DocumentoUser.findByPk(id, { include: ['User', 'Empresa_Documento'] });

      if (!documentouser) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      return res.json(documentouser);
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

      const documentouser = await DocumentoUser.findByPk(id, { include: ['User', 'Empresa_Documento'] });

      if (!documentouser) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      await documentouser.destroy();
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

      const documentouser = await DocumentoUser.findByPk(id, { include: ['User', 'Empresa_Documento'] });

      if (!documentouser) {
        return res.status(400).json({
          errors: ['Esse documento não existe'],
        });
      }

      const documentouserAtualizado = await documentouser.update(req.body);
      return res.json(documentouserAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new DocumentoUserController();
