import { Router } from 'express';
import documentoController from '../controllers/DocumentoController';

const router = new Router();

router.get('/', documentoController.index);
router.post('/', documentoController.create);
router.put('/:id', documentoController.update);
router.get('/:id', documentoController.show);
router.delete('/:id', documentoController.delete);

export default router;
