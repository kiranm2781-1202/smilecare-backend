const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find({ isAvailable: true }).populate('user', 'name email phone');
    res.json({ success: true, data: doctors });
  } catch (err) { next(err); }
};

exports.getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user', 'name email phone');
    if (!doctor) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true, data: doctor });
  } catch (err) { next(err); }
};

exports.createDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({ success: true, data: doctor });
  } catch (err) { next(err); }
};

exports.updateDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: doctor });
  } catch (err) { next(err); }
};
