
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Get MongoDB URI from environment variables

if (!MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

/**
 * Connects to MongoDB using Mongoose.
 */
let isConnected = false; // Track connection status

export const connectMongoose = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Connected to MongoDB via Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

