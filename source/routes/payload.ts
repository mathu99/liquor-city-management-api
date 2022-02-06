import express from 'express';
import controller from '../controllers/payload';
const router = express.Router();

router.post('/api/test-payload', controller.testPayload);

export = router;