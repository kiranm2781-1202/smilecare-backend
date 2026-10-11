const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (err) { next(err); }
};

exports.getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find()
      .populate('patient').populate('doctor').populate('service');
    res.json({ success: true, data: appointments });
  } catch (err) { next(err); }
};

exports.getAppointmentById = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('patient').populate('doctor').populate('service');
    if (!appointment) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true, data: appointment });
  } catch (err) { next(err); }
};

exports.updateAppointmentStatus = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: appointment });
  } catch (err) { next(err); }
};

exports.cancelAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled', cancelReason: req.body.reason },
      { new: true }
    );
    res.json({ success: true, data: appointment });
  } catch (err) { next(err); }
};
