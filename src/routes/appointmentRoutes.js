const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments, getAppointmentById, updateAppointmentStatus, cancelAppointment } = require('../controllers/appointmentController');
const { protect, adminOnly } = require('../middleware/auth');

router.use(protect);
router.post('/', createAppointment);
router.get('/', adminOnly, getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id/status', adminOnly, updateAppointmentStatus);
router.put('/:id/cancel', cancelAppointment);

module.exports = router;
