import { Router } from 'express';
import documentoUserController from '../controllers/DocumentoUserController';

const router = new Router();

router.get('/', documentoUserController.index);
router.post('/', documentoUserController.create);
router.put('/:id', documentoUserController.update);
router.get('/:id', documentoUserController.show);
router.delete('/:id', documentoUserController.delete);

export default router;
