const mongoose = require('mongoose')
const ListItmesSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = ListItmesSchema
