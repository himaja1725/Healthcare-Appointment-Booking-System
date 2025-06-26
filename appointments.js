
const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, authorize('patient'), createAppointment);
router.get('/', protect, getAppointments);

module.exports = router;
