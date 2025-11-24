console.log("🔄 DEBUG VERSION - db.js is loaded!");

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // USE STANDARD MONGODB CONNECTION (NOT SRV)
    const mongoURI = 'mongodb://mongodemo:PASS123456789@cluster0.sqlks2ak.mongodb.net:27017/clinic?retryWrites=true&w=majority&appName=Cluster0';
    
    console.log('=== DEBUGGING DB CONNECTION ===');
    console.log('MongoDB URI:', mongoURI);
    console.log('================================');
    
    // ADD CONNECTION OPTIONS FOR BETTER ERROR HANDLING
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000, // 45 second socket timeout
    });
    
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.log('❌ MongoDB connection failed:', error.message);
    console.log('Error details:', error);
    process.exit(1);
  }
};

module.exports = connectDB;