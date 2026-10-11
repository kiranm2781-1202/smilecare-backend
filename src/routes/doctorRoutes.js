const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctor, updateDoctor } = require('../controllers/doctorController');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.post('/', protect, adminOnly, createDoctor);
router.put('/:id', protect, adminOnly, updateDoctor);

module.exports = router;
