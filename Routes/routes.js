const express = require('express');
const app = express();
const empRouter = express.Router();

let empModel = require('../Models/employee');

// Actual routes
// Get employee
empRouter.route('/').get((req, res) => {
    empModel.find((err, employee) => {
        if(err) {
            console.log(err);
            res.send('Error in get employee route');
        } else {
            res.json(employee);
        }
    });
});

// Add employee
empRouter.route('/addEmp').post((req, res) => {
    let employee = new empModel(req.body);
    employee.save().then( employeee => {
        res.status(200).json({ 'employee' : 'Employee added successfully.'});
    }).catch(err => {
        res.status(400).send('Error in adding employee.');
    });
});

 // To Get Employee Details By Employee ID
 empRouter.route('/editEmp/:id').get(function (req, res) {
    let id = req.params.id;
    empModel.findById(id, function (err, employee) {
    res.json(employee);
    });
});


// To Update the employee details
empRouter.route('/updateEmp').post((req, res) => {
    const emp = new empModel(req.body);
    console.log('Emp: ' + emp);
    empModel.findOneAndUpdate( {_id : emp._id}, { $set: emp }, { new: true }, (err, updatedEmp) => {
        if (err) {
            res.json('Error while updating employee details.');
        } else {
            if (updatedEmp) {                
                res.json('Employee updated successfully');
            } else {
                res.status(400).send('Unable to update employee.');
            }
        }
    });
    
});

// Delete employee
empRouter.route('/deleteEmp/:id').get( (req, res) => {
    empModel.findByIdAndRemove( {_id: req.params.id }, (err, employee) => {
        if(err) {
            res.json(err);
        } else {
            res.json('Employee deleted successfully.');
        }
    });
});

module.exports = empRouter;
