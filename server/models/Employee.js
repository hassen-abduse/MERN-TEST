const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Employees = mongoose.model('Employee', employeeSchema)

module.exports = Employees