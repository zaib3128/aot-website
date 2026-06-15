import mongoose from 'mongoose'
import dotenv   from 'dotenv'
import Titan    from './models/Titan.js'
import Soldier  from './models/Soldier.js'
import User     from './models/User.js'

dotenv.config()

// ── Seed data ────────────────────────────────────────────────

const titans = [
  {
    name          : 'Colossal Titan',
    height        : 60,
    description   : 'The largest of the Nine Titans. Its appearance signaled the fall of Wall Maria and changed humanity forever.',
    power         : 'Massive steam emission, explosive transformation',
    currentHolder : 'Armin Arlert',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/ColloselTitan.png',
  },
  {
    name          : 'Founding Titan',
    height        : 13,
    description   : 'The most powerful of the Nine Titans. Holds the power to control all Titans and alter memories of Subjects of Ymir.',
    power         : 'Memory manipulation, Titan control, Rumbling',
    currentHolder : 'Eren Yeager',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/Founding_Titan.png',
  },
  {
    name          : 'Beast Titan',
    height        : 17,
    description   : 'A uniquely shaped Titan with animal-like features. Capable of throwing objects with devastating precision.',
    power         : 'Hardening, Titan control via scream, Throwing',
    currentHolder : 'Zeke Yeager',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/BeastTitan.png',
  },
  {
    name          : 'Armored Titan',
    height        : 15,
    description   : 'Covered in hardened crystalline plates that deflect nearly any attack. Breached Wall Maria on day one.',
    power         : 'Full body armor hardening',
    currentHolder : 'Reiner Braun',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/ArmoredTitan.png',
  },
  {
    name          : 'Attack Titan',
    height        : 15,
    description   : 'A Titan that has always fought for freedom across generations, passing memories forward and backward in time.',
    power         : 'Future memory inheritance',
    currentHolder : 'Eren Yeager',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/Attack_Titan.png',
  },
  {
    name          : 'Female Titan',
    height        : 14,
    description   : 'An agile and versatile Titan capable of selectively hardening any part of its body and attracting Pure Titans.',
    power         : 'Selective hardening, Pure Titan attraction',
    currentHolder : 'Annie Leonhart',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/FemaleTitan.png',
  },
  {
    name          : 'Jaw Titan',
    height        : 5,
    description   : 'The smallest and fastest of the Nine Titans. Its jaws and claws can crush nearly anything, including hardened crystal.',
    power         : 'Indestructible jaws and claws, extreme speed',
    currentHolder : 'Falco Grice',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/Jaw_Titan.png',
  },
  {
    name          : 'Cart Titan',
    height        : 4,
    description   : 'A quadrupedal Titan capable of carrying heavy equipment for extended periods without rest.',
    power         : 'Quadrupedal endurance, equipment carrying',
    currentHolder : 'Pieck Finger',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/Cart_Titan.png',
  },
  {
    name          : 'War Hammer Titan',
    height        : 15,
    description   : 'Can create weapons and structures from hardened Titan flesh. The holder can control it remotely from a crystal.',
    power         : 'Construct creation from hardened flesh',
    currentHolder : 'Eren Yeager',
    category      : 'The Nine',
    isIntelligent : true,
    image         : '/images/War_Hammer_Titan.png',
  },
]

const soldiers = [
  {
    name: 'Levi Ackerman',
    rank: 'Captain',
    regiment: 'Scout Regiment',
    description: "Humanity's strongest soldier. Unmatched skill with ODM gear.",
    abilities: ['ODM Gear Mastery', 'Ackerman Power', 'Leadership'],
    isAlive: true,
    age: 34,
    image: '/images/Levi_Ackerman.png',
  },

  {
    name: 'Erwin Smith',
    rank: 'Commander',
    regiment: 'Scout Regiment',
    description: 'Legendary commander who dedicated his life to discovering the truth.',
    abilities: ['Leadership', 'Strategy', 'ODM Gear'],
    isAlive: false,
    age: 39,
    image: '/images/Erwin_Smith.png',
  },

  {
    name: 'Hange Zoe',
    rank: 'Commander',
    regiment: 'Scout Regiment',
    description: 'Titan researcher and successor to Erwin Smith.',
    abilities: ['Research', 'Leadership', 'ODM Gear'],
    isAlive: false,
    age: 30,
    image: '/images/Hange_Zoë.jpg',
  },

  {
    name: 'Mikasa Ackerman',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'One of the most talented soldiers in history.',
    abilities: ['ODM Gear', 'Ackerman Power', 'Combat'],
    isAlive: true,
    age: 19,
    image: '/images/Mikasa_Ackerman.jpg',
  },

  {
    name: 'Eren Yeager',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Holder of the Attack Titan and Founding Titan.',
    abilities: ['Attack Titan', 'Founding Titan', 'War Hammer Titan'],
    isAlive: false,
    age: 19,
    image: '/images/Eren_Yeager.png',
  },

  {
    name: 'Armin Arlert',
    rank: 'Commander',
    regiment: 'Scout Regiment',
    description: 'Strategic genius and inheritor of the Colossal Titan.',
    abilities: ['Colossal Titan', 'Strategy', 'ODM Gear'],
    isAlive: true,
    age: 19,
    image: '/images/Armin_Arlert.png',
  },

  {
    name: 'Jean Kirstein',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Natural leader who became a key member of the Survey Corps.',
    abilities: ['Leadership', 'ODM Gear'],
    isAlive: true,
    age: 19,
    image: '/images/Jean_Kirstein.webp',
  },

  {
    name: 'Connie Springer',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Fast and reliable soldier from Ragako village.',
    abilities: ['ODM Gear', 'Speed'],
    isAlive: true,
    age: 19,
    image: '/images/Connie_Springer.webp',
  },

  {
    name: 'Sasha Blouse',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Exceptional marksman known as Potato Girl.',
    abilities: ['Marksmanship', 'ODM Gear'],
    isAlive: false,
    age: 19,
    image: '/images/Sasha_Blouse.jpg',
  },

  {
    name: 'Reiner Braun',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Warrior from Marley and holder of the Armored Titan.',
    abilities: ['Armored Titan', 'Combat', 'ODM Gear'],
    isAlive: true,
    age: 21,
    image: '/images/Reiner_Braun.jpg',
  },

  {
    name: 'Bertholdt Hoover',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Former holder of the Colossal Titan.',
    abilities: ['Colossal Titan', 'ODM Gear'],
    isAlive: false,
    age: 17,
    image: '/images/Bertholdt_Hoover.webp',
  },

  {
    name: 'Ymir',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'Former holder of the Jaw Titan.',
    abilities: ['Jaw Titan', 'ODM Gear'],
    isAlive: false,
    age: 20,
    image: '/images/Ymir.webp',
  },

  {
    name: 'Historia Reiss',
    rank: 'Soldier',
    regiment: 'Scout Regiment',
    description: 'True queen of the Walls.',
    abilities: ['Leadership', 'Political Influence'],
    isAlive: true,
    age: 19,
    image: '/images/Historia_Reiss.png',
  },

  {
    name: 'Dot Pixis',
    rank: 'Commander',
    regiment: 'Garrison Regiment',
    description: 'Commander of the Southern Territories.',
    abilities: ['Leadership', 'Strategy'],
    isAlive: false,
    age: 60,
    image: '/images/Dot_Pixis.jpg',
  },

  {
    name: 'Rico Brzenska',
    rank: 'Soldier',
    regiment: 'Garrison Regiment',
    description: 'Elite member of the Garrison Regiment.',
    abilities: ['ODM Gear', 'Leadership'],
    isAlive: true,
    age: 25,
    image: '/images/Rico_Brzenska.webp',
  },

  {
    name: 'Kitz Weilman',
    rank: 'Officer',
    regiment: 'Garrison Regiment',
    description: 'Officer stationed in Trost District.',
    abilities: ['Command'],
    isAlive: true,
    age: 40,
    image: '/images/Kitz_Weilman.jpg',
  },

  {
    name: 'Annie Leonhart',
    rank: 'Soldier',
    regiment: 'Military Police',
    description: 'Holder of the Female Titan.',
    abilities: ['Female Titan', 'Martial Arts', 'ODM Gear'],
    isAlive: true,
    age: 20,
    image: '/images/Annie_Leonhart.webp',
  },

  {
    name: 'Hitch Dreyse',
    rank: 'Soldier',
    regiment: 'Military Police',
    description: 'Close friend of Annie Leonhart.',
    abilities: ['Investigation', 'ODM Gear'],
    isAlive: true,
    age: 20,
    image: '/images/Hitch_Dreyse.jpg',
  },

  {
    name: 'Marlowe Freudenberg',
    rank: 'Soldier',
    regiment: 'Military Police',
    description: 'Idealistic Military Police officer.',
    abilities: ['Leadership', 'ODM Gear'],
    isAlive: false,
    age: 19,
    image: '/images/Marlowe_Freudenberg.jpg',
  },
]

const adminUser = {
  name     : 'Admin',
  email    : 'admin@aot.com',
  password : 'admin123456',
  role     : 'admin',
}

// ── Seed function ─────────────────────────────────────────────
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✓ MongoDB connected for seeding')

    // Wipe existing data
    await Titan.deleteMany()
    await Soldier.deleteMany()
    await User.deleteMany()
    console.log('✓ Cleared existing data')

    // Insert fresh data
    await Titan.insertMany(titans)
    console.log(`✓ Inserted ${titans.length} titans`)

    await Soldier.insertMany(soldiers)
    console.log(`✓ Inserted ${soldiers.length} soldiers`)

    // Create admin (password hashed by pre-save hook)
    await User.create(adminUser)
    console.log('✓ Created admin user  →  admin@aot.com / admin123456')

    console.log('\n✓ Database seeded successfully!')
    console.log('─────────────────────────────────')
    console.log('Titans   :', titans.length)
    console.log('Soldiers :', soldiers.length)
    console.log('Users    : 1 admin')
    console.log('─────────────────────────────────')

    process.exit(0)
  } catch (err) {
    console.error('✗ Seed failed:', err.message)
    process.exit(1)
  }
}

seedDB()