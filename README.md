# bit-bakend - API de Tienda con Node.js y MongoDB
# 🛍️ StoreAPI - Backend de Tienda E-commerce

[![GitHub License](https://img.shields.io/github/license/souchies/bit-backend)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green)](https://www.mongodb.com/)

API RESTful para gestión de productos de e-commerce, desarrollada con Node.js, Express y MongoDB.

🔗 **Repositorio del autor**: [github.com/souchies/bit-backend](https://github.com/souchies/bit-backend) _Eileen Sofia Jeronimo_

## 🚀 Características principales
- CRUD completo de productos
- Autenticación JWT (próximamente)
- Validación de datos
- Manejo de errores estructurado
- Documentación con Swagger (en progreso)

## 📦 Estructura del proyecto
bit-backend/
├── src/
│ ├── config/ # Configuraciones (DB, variables de entorno)
│ ├── controllers/ # Lógica de negocio
│ ├── models/ # Esquemas de MongoDB
│ ├── routers/ # Rutas de la API
│ └── server.js # Punto de entrada
├── .env.example # Plantilla de variables de entorno
└── package.json # Dependencias y scripts

## ⚙️ Requisitos técnicos
- Node.js 16+
- MongoDB Atlas o local
- Postman (para pruebas)

## 🛠️ Instalación
```bash
# 1. Clonar repositorio
git clone https://github.com/souchies/bit-backend.git

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (copiar .env.example a .env)
cp .env.example .env

# 4. Iniciar servidor
npm run dev

Método	Endpoint	Descripción
POST	/products	Crear producto
GET	/products	Listar todos los productos
GET	/products/:id	Obtener producto por ID
PUT	/products/:id	Actualizar producto
DELETE	/products/:id	Eliminar producto