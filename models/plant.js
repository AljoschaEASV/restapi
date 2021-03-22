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




