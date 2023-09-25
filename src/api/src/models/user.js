const mongoose = require('../database/index')
const bcryptjs = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre("save", async function (next) {
  try {
    const hash = await bcryptjs.hash(this.password, 10); // Use o número de salt rounds adequado (exemplo: 10)
    console.log(this);
    console.log(hash);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', UserSchema)

module.exports = User