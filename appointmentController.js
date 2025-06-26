
const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { doctorId, time, reason } = req.body;
    const appointment = await Appointment.create({
        patientId: req.user.id,
        doctorId,
        time,
        reason
    });
    res.status(201).json(appointment);
};

exports.getAppointments = async (req, res) => {
    const role = req.user.role;
    let query = {};
    if (role === 'patient') query.patientId = req.user.id;
    if (role === 'doctor') query.doctorId = req.user.id;

    const appointments = await Appointment.find(query).populate('doctorId').populate('patientId');
    res.json(appointments);
};
