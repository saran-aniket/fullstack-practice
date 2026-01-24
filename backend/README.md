# Backend - MERN Stack Learning Project

This is the backend server for the MERN stack learning project, built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB connection string

# Start development server
npm run dev
```

## 📦 Dependencies

- **express** - Web framework for Node.js
- **mongoose** - MongoDB object modeling tool
- **cors** - Enable CORS for cross-origin requests
- **dotenv** - Load environment variables from .env file
- **nodemon** (dev) - Auto-restart server on file changes

## 🔌 API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint           | Description              | Request Body                      |
|--------|-------------------|--------------------------|-----------------------------------|
| GET    | `/`               | API information          | -                                 |
| GET    | `/api/items`      | Get all items           | -                                 |
| GET    | `/api/items/:id`  | Get item by ID          | -                                 |
| POST   | `/api/items`      | Create new item         | `{ name, description }`          |
| PUT    | `/api/items/:id`  | Update item by ID       | `{ name, description, completed }`|
| DELETE | `/api/items/:id`  | Delete item by ID       | -                                 |

## 🗄️ Database Schema

### Item Schema

```javascript
{
  name: String (required),
  description: String (required),
  completed: Boolean (default: false),
  createdAt: Date (default: Date.now)
}
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-learning
```

## 📝 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🧪 Testing the API

You can test the API using:

1. **Browser** - For GET requests, visit the endpoints in your browser
2. **Postman** - Full API testing with request bodies
3. **cURL** - Command line testing

### Example cURL Commands

```bash
# Get all items
curl http://localhost:5000/api/items

# Create new item
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"This is a test"}'

# Update item
curl -X PUT http://localhost:5000/api/items/ITEM_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"Updated description","completed":true}'

# Delete item
curl -X DELETE http://localhost:5000/api/items/ITEM_ID
```

## 🔐 CORS Configuration

CORS is enabled for all origins in development. For production, configure specific origins in `server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

## 📚 Learning Points

This backend demonstrates:

- ✅ Express server setup
- ✅ RESTful API design
- ✅ MongoDB connection with Mongoose
- ✅ CRUD operations
- ✅ Error handling
- ✅ Environment variables
- ✅ Middleware usage
- ✅ Schema validation

## ⚠️ Security Considerations

**Note**: This is an educational project. For production use, add:

1. **Rate Limiting** - Prevent API abuse
   ```bash
   npm install express-rate-limit
   ```
   ```javascript
   const rateLimit = require('express-rate-limit');
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   app.use('/api/', limiter);
   ```

2. **Input Validation** - Validate and sanitize all inputs
   ```bash
   npm install express-validator
   ```

3. **Authentication** - Protect routes with JWT or session-based auth
4. **HTTPS** - Use SSL/TLS in production
5. **Helmet** - Security headers middleware
   ```bash
   npm install helmet
   ```

6. **MongoDB Injection Protection** - Mongoose provides this by default, but always validate inputs

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check your connection string in `.env`
- For MongoDB Atlas, verify network access and credentials

**Port Already in Use:**
- Change PORT in `.env` file
- Kill the process using port 5000: `lsof -ti:5000 | xargs kill`

**Module Not Found:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
