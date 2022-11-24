const express = require('express')
const router = express.Router()
const { getAllTasks } = require("../controllers/tasks.controller")

router.route("/").get(getAllTasks)

module.exports = router