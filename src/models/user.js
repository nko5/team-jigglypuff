import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  UserName: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);
