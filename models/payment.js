const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  amount: { type: String },
  id: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Payment = mongoose.model("payment", PaymentSchema);
