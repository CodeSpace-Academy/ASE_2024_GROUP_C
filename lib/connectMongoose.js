import mongoose from 'mongoose';

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
    await mongoose.connect(process.envMONGODB_URI)

    isConnected = true;
    console.log('Connected to MongoDB via Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

