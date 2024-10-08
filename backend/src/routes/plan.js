const express = require('express')
const router = express.Router()
const { getPlanByAccId,getPlanById, updatePlan, deletePlan, createPlan } = require('../app/controllers/PlanController')
const managerAuthMiddleware = require('../app/middlewares/managerAuthMiddleware')
const authMiddleware = require('../app/middlewares/authMiddleware')

// router.get('/:id', getPlanById)
router.get('/:accId',getPlanByAccId)
router.post('/', createPlan)
router.put('/:id', updatePlan)
router.delete('/:id', deletePlan)

module.exports = router