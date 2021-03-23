const mongoose = require('mongoose')

const measurementSchema = new mongoose.Schema( {
        plantId:{
            type: String,
            required: true
        },
        measureId: {
            type: String,
            required: true
        },
        airHumidity: {
            type: Number,
            required: true
        },
        drySoil: {
            type: String,
            required: true
        },
        tempWarning: {
            type: String
        },
        date_time: {
            type: Date,
            required: true
        },
})


module.exports = mongoose.model("measurements", measurementSchema)