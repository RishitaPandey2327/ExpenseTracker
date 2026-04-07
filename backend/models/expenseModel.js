const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // must match your User model name
    required: true
  },

  type: {
    type: String,
    default: "expense"
  }
});

module.exports = mongoose.model("Expense", expenseSchema);