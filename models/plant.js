const mongoose = require('mongoose')

const plantsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  plantId: {
    type: String,
  },
  plantHumidity: {
    type: String
  },
  tempWarning: {
    type: Boolean
  },
  drySoil: {
    type: Boolean
  }

})

module.exports = mongoose.model('plants', plantsSchema)
/*
const measurementSchema = new mongoose.Schema( {
  measureId: {
    type: String,
    required: true
  },
  airHumidity: {
    type: Number,
    required: true
  },
  te: {
    type: String
  },
  date_time: {
    type: Boolean
  },
  Identify_measureID: {
    type: Boolean
  }
})


module.exports = mongoose.model("Measurement", measurementSchema)
*/


