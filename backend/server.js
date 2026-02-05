// Import required packages
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Define the port number - use environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware Setup
// ================

// CORS (Cross-Origin Resource Sharing) - allows frontend to communicate with backend
app.use(cors());

// JSON Parser - allows Express to parse JSON data in request bodies
app.use(express.json());

// URL-encoded Parser - allows Express to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
// ==================

// Get MongoDB connection string from environment variable
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-learning';

// Connect to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
  });

// Define MongoDB Schema and Model
// ================================

// Create a schema for a simple "Item" collection (for learning CRUD operations)
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const Item = mongoose.model('Item', itemSchema);

// API Routes
// ==========

// Root route - Test if server is running
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to MERN Stack Learning API',
    endpoints: {
      'GET /api/items': 'Get all items',
      'GET /api/items/:id': 'Get item by ID',
      'POST /api/items': 'Create new item',
      'PUT /api/items/:id': 'Update item by ID',
      'DELETE /api/items/:id': 'Delete item by ID'
    }
  });
});

// CREATE - Add a new item (C in CRUD)
app.post('/api/items', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate input
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: 'Name and description are required'
      });
    }

    // Create new item
    const newItem = new Item({
      name,
      description
    });

    // Save to database
    const savedItem = await newItem.save();

    res.status(201).json({
      success: true,
      message: 'Item created successfully',
      data: savedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// READ - Get all items (R in CRUD)
app.get('/api/items', async (req, res) => {
  try {
    // Fetch all items from database
    const items = await Item.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// READ - Get single item by ID
app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// UPDATE - Update an item by ID (U in CRUD)
app.put('/api/items/:id', async (req, res) => {
  try {
    const { name, description, completed } = req.body;

    // Find and update item
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, completed },
      { new: true, runValidators: true } // Return updated document and run validators
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item updated successfully',
      data: updatedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// DELETE - Delete an item by ID (D in CRUD)
app.delete('/api/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item deleted successfully',
      data: deletedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Start Server
// ============

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 Learning MERN Stack - Backend Server`);
});
