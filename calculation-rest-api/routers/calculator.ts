import { Router } from 'express';
import { add, subtract, multiply, divide, sumArray } from '../controllers/calculator';

const router = Router();

router.post('/add', add);

router.post('/subtract', subtract);

router.post('/multiply', multiply);

router.post('/divide', divide);

router.post('/sumArray', sumArray);

export default router;