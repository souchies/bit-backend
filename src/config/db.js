import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log('✅ Base de datos conectada');
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    process.exit(1); // Detiene la aplicación
  }
};

export default connectDB; // 