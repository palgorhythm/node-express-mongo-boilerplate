const mongoose = require('mongoose');

// Schema defines how the user's data will be stored in MongoDB
const FooSchema = new mongoose.Schema({
  bar: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  baz: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Foo', FooSchema);
