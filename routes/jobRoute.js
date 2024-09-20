

const express = require('express')
const { createJob, getJob, getJobs, deleteJob, updateJob } = require('../controllers/jobController')
const router = express.Router()
const protect = require('../middleware/authMiddleware.')


router.post('/', protect, createJob)
router.get('/', protect, getJobs)
router.get('/:id', protect, getJob)
router.delete('/:id', protect, deleteJob)
router.put('/:id', protect, updateJob)

module.exports = router