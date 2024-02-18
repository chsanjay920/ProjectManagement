const mongoose = require('mongoose')

const AssignmentSchema = new mongoose.Schema({
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    }
  });

module.exports = mongoose.model('projectAssignment', AssignmentSchema)
