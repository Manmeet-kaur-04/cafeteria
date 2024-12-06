import mongoose from 'mongoose';

// Define the schema for Admin
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

// Method to compare emails
adminSchema.methods.compareEmail = function (candidateEmail) {
  return this.email === candidateEmail;
};

// Export the Admin model as default
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
