const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    task_name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    important: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
