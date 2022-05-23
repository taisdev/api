import { Router } from 'express';
import empresaController from '../controllers/EmpresaController';

const router = new Router();

router.get('/', empresaController.index);
router.post('/', empresaController.create);
router.put('/:id', empresaController.update);
router.get('/:id', empresaController.show);
router.delete('/:id', empresaController.delete);

export default router;
