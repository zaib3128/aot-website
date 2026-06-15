import mongoose from 'mongoose'

const titanSchema = new mongoose.Schema(
  {
    name: {
      type     : String,
      required : [true, 'Titan name is required'],
      unique   : true,
      trim     : true,
    },
    height: {
      type     : Number,        // height in metres
      required : [true, 'Height is required'],
    },
    description: {
      type     : String,
      required : [true, 'Description is required'],
      trim     : true,
    },
    power: {
      type  : String,           // special ability e.g. "Hardening"
      trim  : true,
      default: 'Unknown',
    },
    currentHolder: {
      type  : String,
      trim  : true,
      default: 'Unknown',
    },
    image: {
      type    : String,         // image URL or path
      default : '',
    },
    isIntelligent: {
      type    : Boolean,
      default : true,           // the 9 shifters are intelligent
    },
    category: {
      type    : String,
      enum    : ['The Nine', 'Pure Titan'],
      default : 'The Nine',
    },
  },
  {
    timestamps: true,           // adds createdAt + updatedAt automatically
  }
)

const Titan = mongoose.model('Titan', titanSchema)
export default Titan