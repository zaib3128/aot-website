import express       from 'express'
import cors          from 'cors'
import helmet        from 'helmet'
import dotenv        from 'dotenv'
import rateLimit     from 'express-rate-limit'
import connectDB     from './config/db.js'
import titanRoutes   from './routes/titans.js'
import soldierRoutes from './routes/soldiers.js'
import authRoutes    from './routes/auth.js'

// ── Load env variables ──────────────────────────────────────
dotenv.config()

// ── Connect to MongoDB ──────────────────────────────────────
connectDB()

// ── Init app ────────────────────────────────────────────────
const app = express()

// ── Security middleware ─────────────────────────────────────
app.use(helmet())
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL
    : 'http://localhost:5173',
  credentials: true,
}))

// ── Body parsers ────────────────────────────────────────────
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ── Rate limiting ───────────────────────────────────────────
const limiter = rateLimit({
  windowMs : 15 * 60 * 1000,
  max      : 100,
  message  : { message: 'Too many requests, slow down.' },
})
app.use('/api', limiter)

// ── Health check ────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status    : 'ok',
    message   : 'Shingeki no Kyojin API is alive',
    timestamp : new Date().toISOString(),
  })
})

// ── Routes ──────────────────────────────────────────────────
app.use('/api/titans',   titanRoutes)
app.use('/api/soldiers', soldierRoutes)
app.use('/api/auth',     authRoutes)

// ── 404 handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` })
})

// ── Global error handler ────────────────────────────────────
app.use((err, req, res, next) => {
  const status = err.statusCode || 500
  res.status(status).json({
    message : err.message || 'Internal Server Error',
    stack   : process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

// ── Start server ────────────────────────────────────────────
// ── Start server (local only) ────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`✓ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  })
}

// ── Export for Vercel serverless ─────────────────────────────
export default app