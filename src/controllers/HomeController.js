import Perfil from '../models/perfil';

class HomeController {
  async index(req, res) {
    const NovoPerfil = await Perfil.create({
      titulo: 'titulo',
      descricao: 'descricao',
      ativo: true,
    });
    res.json(NovoPerfil);
  }
}

export default new HomeController();
