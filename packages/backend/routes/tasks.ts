import express from 'express'
const router = express.Router()


const {getAllTask, createTask, updateTask, getTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTask).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router