import mongoose from 'mongoose';

var ItemSchema = new mongoose.Schema({
  ItemName: { type: String, required: true },
  ItemDescription: { type: String, required: true },
  UserId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

export default mongoose.model('Item', ItemSchema);
