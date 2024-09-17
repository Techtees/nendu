

const express = require('express')
const { createJob, getJob } = require('../controllers/jobController')
const router = express.Router()
const protect = require('../middleware/authMiddleware.')


router.post('/', protect, createJob)
router.get('/', protect, getJob)

module.exports = router