const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/rose")
  .then(() => console.log("Connected successfully..."))
  .catch((err) => console.log(err));

const first_collectionSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  mno: {
    type: Number,
    required: true
  },
  fees: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now 
  }
});


const first_collection = new mongoose.model("first_collection",first_collectionSchema);

const createfirst_collection= new first_collection({
  name: "Sandeep",
  mno: 1234567890,
  fees: true
});


createfirst_collection.save();
