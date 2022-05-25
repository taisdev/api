import { Router } from 'express';
import logController from '../controllers/LogController';

const router = new Router();

router.get('/', logController.index);
router.post('/', logController.create);
router.put('/:id', logController.update);
router.get('/:id', logController.show);
router.delete('/:id', logController.delete);

export default router;
