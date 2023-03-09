const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  streetName: {
    type: String,
    trim: true,
    required: true,
  },
  amount: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  images: {
    type: Object,
    trim: true,
    default:
      "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png",
  },
  contactNumber: {
    type: String,
    trim: true,
    required: true,
  },
  method_type: {
    type: String,
    trim: true,
    required: true,
  },
  payment_type: {
    type: String,
    trim: true,
    required: true,
  },
  user_created: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// const RealEstate = mongoose.model("places", placesSchema);

// module.exports = RealEstate;

module.exports = mongoose.model("place", placesSchema);
