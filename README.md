# ⚔️ Attack on Titan — Full Stack MERN Website

> A cinematic, full-stack fan website for Attack on Titan built with MongoDB, Express, React, and Node.js.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-green?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Node](https://img.shields.io/badge/Node.js-24-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## 📸 Pages

| Page | Description |
|------|-------------|
| `/` | Home — GSAP scroll-driven video hero + animated titan size comparison |
| `/titans` | All 9 titans with height comparison bars, expandable cards |
| `/soldiers` | Survey Corps soldiers with rank filters, alive/fallen status |
| `/walls` | The three walls with concentric ring diagram and data cards |
| `/story` | Season-by-season story arcs with expandable accordion cards |
| `/chronicle` | Full timeline of 15 events across 1,100 years, filterable by era |
| `/explore` | Hub page linking to all sections |
| `/*` | Custom 404 page |

---

## 🛠 Tech Stack

### Frontend
- **React 18** + **Vite** — fast dev server and build
- **React Router v6** — client-side routing
- **Axios** — HTTP client with JWT interceptor
- **GSAP + ScrollTrigger** — scroll-driven animations on the hero and titan size sections

### Backend
- **Node.js** + **Express** — REST API server
- **MongoDB Atlas** + **Mongoose** — cloud database with schema validation
- **JWT (jsonwebtoken)** — stateless authentication
- **bcryptjs** — password hashing
- **Helmet** + **CORS** + **express-rate-limit** — security middleware

---

## 📁 Project Structure

```
aot-website/
├── client/                      # React frontend (Vite)
│   ├── public/
│   │   ├── images/              # Titan and soldier images
│   │   └── video/               # Hero background video
│   └── src/
│       ├── api/
│       │   └── axios.js         # Axios instance with JWT interceptor
│       ├── components/
│       │   ├── Navbar.jsx       # Scroll-aware navbar with NavLink
│       │   ├── Hero.jsx         # GSAP scroll video hero
│       │   ├── Titansize.jsx    # Animated size comparison (API-wired)
│       │   └── ProtectedRoute.jsx
│       ├── context/
│       │   └── AuthContext.jsx  # JWT auth context + useAuth hook
│       └── pages/
│           ├── TitansPage.jsx
│           ├── SoldiersPage.jsx
│           ├── WallsPage.jsx
│           ├── StoryPage.jsx
│           ├── ChroniclesPage.jsx
│           ├── ExplorePage.jsx
│           ├── LoginPage.jsx
│           ├── RegisterPage.jsx
│           └── NotFoundPage.jsx
│
└── server/                      # Express backend
    ├── config/
    │   └── db.js                # MongoDB connection
    ├── middleware/
    │   └── auth.js              # JWT protect + adminOnly middleware
    ├── models/
    │   ├── Titan.js
    │   ├── Soldier.js
    │   └── User.js
    ├── routes/
    │   ├── titans.js            # GET, GET/:id, POST, PUT, DELETE
    │   ├── soldiers.js          # GET, GET/:id, POST, PUT, DELETE
    │   └── auth.js              # POST /register, POST /login, GET /me
    ├── seed.js                  # Database seeder script
    └── server.js                # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)
- Git

### 1 — Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/aot-website.git
cd aot-website
```

### 2 — Set up the backend
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/aot-db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

### 3 — Seed the database
```bash
npm run seed
```

This inserts all 9 titans, 7 soldiers, and 1 admin user into MongoDB.

### 4 — Set up the frontend
```bash
cd ../client
npm install
```

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

### 5 — Run both servers
```bash
# Terminal 1 — backend
cd server && npm run dev

# Terminal 2 — frontend
cd client && npm run dev
```

Open `http://localhost:5173`

---

## 🔌 API Reference

### Titans
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/titans` | Public | Get all titans |
| GET | `/api/titans/:id` | Public | Get one titan |
| POST | `/api/titans` | Admin | Create titan |
| PUT | `/api/titans/:id` | Admin | Update titan |
| DELETE | `/api/titans/:id` | Admin | Delete titan |

### Soldiers
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/soldiers` | Public | Get all soldiers |
| GET | `/api/soldiers/:id` | Public | Get one soldier |
| POST | `/api/soldiers` | Admin | Create soldier |
| PUT | `/api/soldiers/:id` | Admin | Update soldier |
| DELETE | `/api/soldiers/:id` | Admin | Delete soldier |

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | Public | Create account |
| POST | `/api/auth/login` | Public | Login, returns JWT |
| GET | `/api/auth/me` | JWT | Get current user |

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server status check |

---

## 🔐 Default Admin Account

After running `npm run seed`:

```
Email:    admin@aot.com
Password: admin123456
```

---

## 🌐 Deployment

| Service | Purpose | URL |
|---------|---------|-----|
| Vercel | React frontend | https://your-app.vercel.app |
| Render | Express backend | https://your-api.onrender.com |
| MongoDB Atlas | Database | cloud.mongodb.com |

---

## 📦 Scripts

### Server (`/server`)
```bash
npm start       # production server
npm run dev     # nodemon dev server
npm run seed    # seed database
```

### Client (`/client`)
```bash
npm run dev     # Vite dev server
npm run build   # production build
npm run preview # preview production build
```

---

## 👨‍💻 Author

**Zohaib** — BITF23M017  
Punjab University College of Information Technology (PUCIT)  
GitHub: [@zaib3128](https://github.com/zaib3128)

---

## 📄 License

MIT — free to use for educational purposes.

---

> *"If you win, you live. If you lose, you die. If you don't fight, you can't win."*  
> — Eren Yeager
