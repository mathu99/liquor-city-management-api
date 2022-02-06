import express from 'express';
import controller from '../controllers/category';
const router = express.Router();

router.post('/api/add-category', controller.addCategory);
router.post('/api/edit-category', controller.editCategory);

export = router;