import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      default: 0
    }
  },
  { versionKey: false, timestamps: true }
);

export default model('Product', productSchema);


//{ "name": "Laptop HP", "price": 899.99, "category": "Electrónicos", "stock": 10 }
//{ "name": "Mouse Inalámbrico", "price": 25.50, "category": "Accesorios", "stock": 30 }
//{ "name": "Monitor Samsung", "price": 199.99, "category": "Pantallas", "stock": 15 }