// Router Empleado
module.exports = function (app) {
	
	var employee = require("../models/Empleados.js");

	// GET - Return colection of employees.
	getAllEmployees = function(req, res){
		employee.findAll(function(err, Empleados){
			if (!err) {
				res.send(empleados);
			}else{
				console.log("Error obteniendo la data de empleados.");
			};
		});
	};
}