const express = require('express');
const { getAllEmployees } = require('../../controllers/employeesController');
const router = express.Router();
const data = {}
data.employees = require('../../controllers/employeesController');
    
router.route('/')
        .get(employeesController.getAllEmployees)
        .post(employeesController.createNewEmployee)
        .put(employeesController.updateEmployee)
        .delete(employeesController.deleteEmployee)

        router.route('/: id')
        .get()


module.exports = router;


