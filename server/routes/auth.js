import express from 'express'
import jwt     from 'jsonwebtoken'
import User    from '../models/User.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// ── Helper: sign a JWT ──────────────────────────────────────
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })

// ── POST /api/auth/register ─────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' })

    const exists = await User.findOne({ email })
    if (exists)
      return res.status(400).json({ message: 'User already exists' })

    // password gets hashed by the pre-save hook in User.js
    const user = await User.create({ name, email, password })

    res.status(201).json({
      _id   : user._id,
      name  : user.name,
      email : user.email,
      role  : user.role,
      token : generateToken(user._id),
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ── POST /api/auth/login ────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password required' })

    // select('+password') because password has select:false in schema
    const user = await User.findOne({ email }).select('+password')
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' })

    const isMatch = await user.matchPassword(password)
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' })

    res.json({
      _id   : user._id,
      name  : user.name,
      email : user.email,
      role  : user.role,
      token : generateToken(user._id),
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ── GET /api/auth/me  (protected) ──────────────────────────
router.get('/me', protect, (req, res) => {
  res.json(req.user)
})

export default router