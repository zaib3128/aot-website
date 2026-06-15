import mongoose from 'mongoose'

const soldierSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  rank: {
    type: String,
    enum: [
      'Commander',
      'Captain',
      'Officer',
      'Soldier',
      'Cadet'
    ],
    required: true,
  },

  regiment: {
    type: String,
    enum: [
      'Scout Regiment',
      'Garrison Regiment',
      'Military Police'
    ],
    required: true,
  },

  description: {
    type: String,
    default: '',
  },

  abilities: {
    type: [String],
    default: [],
  },

  image: {
    type: String,
    default: '',
  },

  isAlive: {
    type: Boolean,
    default: true,
  },

  age: Number,
},
{
  timestamps: true,
})

export default mongoose.model('Soldier', soldierSchema)