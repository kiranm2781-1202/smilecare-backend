const Patient = require('../models/Patient');

exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find().populate('user', 'name email phone');
    res.json({ success: true, data: patients });
  } catch (err) { next(err); }
};

exports.getPatientById = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('user', 'name email phone');
    if (!patient) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true, data: patient });
  } catch (err) { next(err); }
};

exports.updatePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: patient });
  } catch (err) { next(err); }
};
