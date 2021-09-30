const express = require('express');
const Employees = require('../models/Employee')

const emplyeesRouter = express.Router()
emplyeesRouter.use(express.json())

emplyeesRouter.route('/')
	.get((req, res, next) => {
		Employees.find({})
			.then((employees) => {
				res.statusCode = 200
				res.setHeader('Content-Type', 'application/json')
				res.json(employees)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

	.post((req, res, next) => {
		Employees.create(req.body)
			.then((employee) => {
				res.statusCode = 201
				res.setHeader('Content-Type', 'application/json')
				res.json(employee)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

	.put((req, res, next) => {
		res.statusCode = 403
		res.end('Error: Operation Not Supported!')
	})

	.delete((req, res, next) => {
		Employees.remove({})
			.then((resp) => {
				res.statusCode = 200
				res.setHeader('Content-Type', 'application/json')
				res.json(resp)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

emplyeesRouter.route('/:employeeId')
	.get((req, res, next) => {
		Employees.findById(req.params.employeeId)
			.then((employee) => {
				res.statusCode = 200
				res.setHeader('Content-Type', 'application/json')
				res.json(employee)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

	.post((req, res, next) => {
		res.statusCode = 403
		res.end('Error: Operation Not Supported!')
	})

	.put((req, res, next) => {
		Employees.findByIdAndUpdate(req.params.employeeId,
			{ $set: req.body }, { new: true })
			.then((employee) => {
				res.statusCode = 200
				res.setHeader('Content-Type', 'application/json')
				res.json(employee)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

	.delete((req, res, next) => {
		Employees.findByIdAndRemove(req.params.employeeId)
			.then((resp) => {
				res.statusCode = 200
				res.setHeader('Content-Type', 'application/json')
				res.json(resp)
			}, (err) => next(err))
			.catch((err) => next(err))
	})

module.exports = emplyeesRouter