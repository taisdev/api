import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);

export default router;
