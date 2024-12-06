import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the schema for AdminSign
const adminsignSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving it to the database
adminsignSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
adminsignSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the model
const Adminsign = mongoose.model('Adminsign', adminsignSchema);
export default Adminsign;
