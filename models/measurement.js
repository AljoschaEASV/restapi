const mongoose = require('mongoose')

const measurementSchema = new mongoose.Schema( {
    measureId: {
        type: String,
        required: true
    },
    airHumidity: {
        type: Number,
        required: true
    },
    temperature: {
        type: String
    },
    date_time: {
        type: Date,
        required: true
    },
    Identify_measureID: {
        type: Boolean
    }
})


module.exports = mongoose.model("measurements", measurementSchema)