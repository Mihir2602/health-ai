const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Attempting to connect to MongoDB...');
  console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
