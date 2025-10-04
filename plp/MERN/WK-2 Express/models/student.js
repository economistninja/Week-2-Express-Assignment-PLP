const mongoose = require('mongoose');
require('dotenv').config();

// Define the Student schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;