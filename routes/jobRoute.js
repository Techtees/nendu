

const express = require('express')
const { createJob } = require('../controllers/jobController')
const router = express.Router()
const protect = require('../middleware/authMiddleware.')


router.post('/create', protect, createJob)

module.exports = router