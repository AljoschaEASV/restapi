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
    type: String
  },
  drySoil: {
    type: String
  }

})

module.exports = mongoose.model('plants', plantsSchema)




