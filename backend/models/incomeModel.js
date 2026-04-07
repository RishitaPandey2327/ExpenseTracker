const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
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
    ref: "User",   // must match model name exactly
    required: true
  },

  type: {
    type: String,
    default: "income"
  }
});

module.exports = mongoose.model("Income", incomeSchema);