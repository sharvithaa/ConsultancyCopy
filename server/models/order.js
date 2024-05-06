import mongoose from 'mongoose'; // Import mongoose

const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

const orderSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  items: [{
    // Define the schema for each item in the array
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    images: [String], // Assuming images is an array of strings
    quantity: {
      type: Number,
      required: true
    }
  }],
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Order = model('Order', orderSchema);

export default Order;
