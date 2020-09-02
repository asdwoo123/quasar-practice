const mongoose = require('mongoose')

const { Schema } = mongoose
const stationSchema = new Schema({
  projectName: String,
  productId: String,
  stationName: String,
  data: [{ dataName: String, dataValue: Number }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('station', stationSchema)
