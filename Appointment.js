
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    time: Date,
    reason: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
