import express from 'express'
import Titan   from '../models/Titan.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = express.Router()

// GET /api/titans — all titans sorted tallest first
router.get('/', async (req, res) => {
  try {
    const titans = await Titan.find().sort({ height: -1 })
    res.json(titans)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET /api/titans/:id — single titan
router.get('/:id', async (req, res) => {
  try {
    const titan = await Titan.findById(req.params.id)
    if (!titan)
      return res.status(404).json({ message: 'Titan not found' })
    res.json(titan)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /api/titans — create (admin only)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const titan = await Titan.create(req.body)
    res.status(201).json(titan)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// PUT /api/titans/:id — update (admin only)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const titan = await Titan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!titan)
      return res.status(404).json({ message: 'Titan not found' })
    res.json(titan)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETE /api/titans/:id — delete (admin only)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const titan = await Titan.findByIdAndDelete(req.params.id)
    if (!titan)
      return res.status(404).json({ message: 'Titan not found' })
    res.json({ message: 'Titan deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router