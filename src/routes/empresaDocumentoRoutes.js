import { Router } from 'express';
import empresaDocumentoController from '../controllers/EmpresaDocumentoController';

const router = new Router();

router.get('/', empresaDocumentoController.index);
router.post('/', empresaDocumentoController.create);
router.put('/:id', empresaDocumentoController.update);
router.get('/:id', empresaDocumentoController.show);
router.delete('/:id', empresaDocumentoController.delete);

export default router;
