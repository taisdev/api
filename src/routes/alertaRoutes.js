import { Router } from 'express';
import alertaController from '../controllers/AlertaController';

const router = new Router();

router.get('/', alertaController.index);
router.post('/', alertaController.create);
router.put('/:id', alertaController.update);
router.get('/:id', alertaController.show);
router.delete('/:id', alertaController.delete);

export default router;
