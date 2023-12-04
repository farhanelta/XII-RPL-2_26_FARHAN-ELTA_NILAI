const express = require('express')
const router = express.Router()

const gradecontroller = require('../controllers/grade')

router.get('/grades', gradecontroller.index)

router.get('/grade/:nis', gradecontroller.show)

router.post('/grade', gradecontroller.store)

router.put('/grade/:id', gradecontroller.update)

router.delete('/grade/:id', gradecontroller.delete)

module.exports = router