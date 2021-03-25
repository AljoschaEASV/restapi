const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')

// Getting all
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find()
    res.json(plants)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getPlant, (req, res) => {
  res.json(res.Plant)
})

// Creating one
router.post('/', async (req, res) => {
  const plant = new Plant({
    plantID: req.body.plantID,
    //MeasurementId: req.body.MeasurementId,
    temperature: req.body.temperature,
    airHumidity: req.body.airHumidity,
    tempWarning: req.body.tempWarning,
    drySoil: req.body.drySoil,
    dateTime: req.body.dateTime,
  })
  try {
    const newPlant = await plant.save()
    res.status(201).json(newPlant)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getPlant, async (req, res) => {
  if (req.body.name != null) {
    res.plant.name = req.body.name
  }
  if (req.body.plantId != null) {
    res.plant.plantId = req.body.plantId
  }
  try {
    const updatedplant = await res.plant.save()
    res.json(updatedplant)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getPlant, async (req, res) => {
  try {
    await res.plant.remove()
    res.json({ message: 'Deleted plant' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPlant(req, res, next) {
  let plant
  try {
    plant = await Plant.findById(req.params.id)
    if (plant == null) {
      return res.status(404).json({ message: 'Cannot find plant' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.plant = plant
  next()
}

module.exports = router