const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats
} = require('../controllers/jobs')

router.route('/stats').get(showStats)
router.route('/').post(createJob).get(getAllJobs)

router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
