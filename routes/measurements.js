const express = require('express')
const router = express.Router()
const  Measurement = require('../models/measurement')

// Getting all
router.get('/', async (req, res) => {
    try {
        const measurements = await Measurement.find()
        res.json(measurements)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getMeasurement, async (req, res) => {

    try {
       const measurements = await Measurement.findById(req.params.id)
        if (measurements == null) {
            return res.status(404).json({ message: 'Cannot find Measurement' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.Measurement = Measurement
})

// Creating one
router.post('/', async (req, res) => {
    const measurement = new Measurement({
        plantID: req.body.plantID,
        //MeasurementId: req.body.MeasurementId,
        temperature: req.body.temperature,
        airHumidity: req.body.airHumidity,
        tempWarning: req.body.tempWarning,
        drySoil: req.body.drySoil,
        dateTime: req.body.dateTime,
        
    })
    try {
        const newMeasurement = await measurement.save()
        res.status(201).json(newMeasurement)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getMeasurement, async (req, res) => {
    if (req.body.name != null) {
        res.Measurement.name = req.body.name
    }
    if (req.body.MeasurementId != null) {
        res.Measurement.MeasurementId = req.body.MeasurementId
    }
    try {
        const updatedMeasurement = await res.Measurement.save()
        res.json(updatedMeasurement)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getMeasurement, async (req, res) => {
    try {
        await res.Measurement.remove()
        res.json({ message: 'Deleted Measurement' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getMeasurement(req, res, next) {
    let Measurement
    try {
        Measurement = await Measurement.findById(req.params.id)
        if (Measurement == null) {
            return res.status(404).json({ message: 'Cannot find Measurement' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.Measurement = Measurement
    next()
}
    
module.exports = router