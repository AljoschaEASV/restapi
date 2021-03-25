const mongoose = require('mongoose')

const plantsSchema = new mongoose.Schema({
  plantID:{
    type: String,
    required: true
},
/*
measureId: {
    type: String,
    required: true
},
*/
temperature: {
type: String,
required: true
},


airHumidity: {
    type: String,
    required: true
},
drySoil: {
    type: String,
    required: true
},
tempWarning: {
    type: String
},
dateTime: {
    type: String,
    required: true
},
})

module.exports = mongoose.model('plants', plantsSchema)




