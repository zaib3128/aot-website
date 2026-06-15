import express from 'express'
import Soldier from '../models/Soldier.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = express.Router()

// GET /api/soldiers — all soldiers
router.get('/', async (req, res) => {
  try {
    const soldiers = await Soldier.find().sort({ name: 1 })
    res.json(soldiers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET /api/soldiers/:id — single soldier
router.get('/:id', async (req, res) => {
  try {
    const soldier = await Soldier.findById(req.params.id)
    if (!soldier)
      return res.status(404).json({ message: 'Soldier not found' })
    res.json(soldier)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /api/soldiers — create (admin only)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const soldier = await Soldier.create(req.body)
    res.status(201).json(soldier)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// PUT /api/soldiers/:id — update (admin only)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const soldier = await Soldier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!soldier)
      return res.status(404).json({ message: 'Soldier not found' })
    res.json(soldier)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETE /api/soldiers/:id — delete (admin only)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const soldier = await Soldier.findByIdAndDelete(req.params.id)
    if (!soldier)
      return res.status(404).json({ message: 'Soldier not found' })
    res.json({ message: 'Soldier deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router