import { Router } from 'express';
import perfilController from '../controllers/PerfilController';

const router = new Router();

router.get('/', perfilController.index);
router.post('/', perfilController.create);
router.put('/:id', perfilController.update);
router.get('/:id', perfilController.show);
router.delete('/:id', perfilController.delete);

export default router;
