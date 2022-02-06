import express from 'express';
import controller from '../controllers/category';
const router = express.Router();

router.post('/category', controller.addCategory);

export = router;