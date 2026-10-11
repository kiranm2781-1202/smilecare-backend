const express = require('express');
const router = express.Router();
const { getPatients, getPatientById, updatePatient } = require('../controllers/patientController');
const { protect, adminOnly } = require('../middleware/auth');

router.use(protect);
router.get('/', adminOnly, getPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);

module.exports = router;
