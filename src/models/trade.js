import mongoose from 'mongoose';

var TradeSchema = new mongoose.Schema({
  TradeItems: { type: [mongoose.Schema.Types.ObjectId], required: true },
  TradeDate: { type: Date, required: true }
});

export default mongoose.model('Trade', TradeSchema);
