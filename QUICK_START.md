# 🚀 Quick Start Guide

Get up and running with the MERN stack in 5 minutes!

## Prerequisites

Before you start, make sure you have:

- ✅ **Node.js** (v14 or higher) installed - [Download](https://nodejs.org/)
- ✅ **MongoDB** installed or MongoDB Atlas account - [Download](https://www.mongodb.com/try/download/community)
- ✅ Basic knowledge of JavaScript
- ✅ A code editor (VS Code recommended)

## Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/saran-aniket/fullstack-practice.git
cd fullstack-practice
```

### 2️⃣ Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)

### 3️⃣ Configure Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file and add your MongoDB connection string
# For local: MONGO_URI=mongodb://localhost:27017/mern-learning
# For Atlas: MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-learning
```

### 4️⃣ Configure Frontend

```bash
# Open a new terminal window
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install
```

### 5️⃣ Start the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

You should see:
```
✅ Connected to MongoDB successfully
🚀 Server is running on http://localhost:5000
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

Browser will automatically open at `http://localhost:3000`

## 🎉 Success!

You should now see the MERN stack application running!

Try these actions:
1. ➕ Add a new item
2. ✏️ Edit an item
3. ✅ Mark an item as complete
4. 🗑️ Delete an item

## 🐛 Troubleshooting

### Backend won't start?

**Problem:** MongoDB connection error
```
Solution: 
- Check if MongoDB is running (mongod command)
- Verify your MONGO_URI in .env file
- For Atlas: Check network access settings
```

**Problem:** Port 5000 already in use
```
Solution:
- Change PORT in backend/.env to a different number
- Or kill the process: lsof -ti:5000 | xargs kill
```

### Frontend won't start?

**Problem:** npm install errors
```
Solution:
- Delete node_modules and package-lock.json
- Run: npm cache clean --force
- Run: npm install again
```

**Problem:** Can't connect to backend
```
Solution:
- Make sure backend is running on port 5000
- Check browser console for errors
- Verify API_URL in frontend/src/App.js
```

## 📚 Next Steps

1. **Read the Code** - Check out the extensive comments in:
   - `backend/server.js` - Backend API
   - `frontend/src/App.js` - Frontend React component

2. **Read the Guide** - Open `LEARNING_GUIDE.md` for detailed explanations

3. **Experiment** - Try modifying the code:
   - Add new fields to items
   - Change the styling
   - Add new features

4. **Learn More** - Check out the resources in `README.md`

## 📁 Project Structure

```
fullstack-practice/
├── backend/                # Backend server (Node.js + Express)
│   ├── server.js          # Main server file with API
│   ├── package.json       # Dependencies
│   └── .env               # Environment variables
│
├── frontend/              # Frontend app (React)
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   └── App.css       # Styling
│   └── package.json      # Dependencies
│
├── README.md             # Main documentation
├── LEARNING_GUIDE.md     # Detailed learning guide
└── QUICK_START.md        # This file
```

## 🎯 What You'll Learn

- ✅ Building RESTful APIs with Express.js
- ✅ Working with MongoDB and Mongoose
- ✅ Creating React components and using hooks
- ✅ Managing state in React applications
- ✅ Making HTTP requests with Axios
- ✅ Full CRUD operations
- ✅ Error handling and validation
- ✅ Best practices for MERN development

## 💡 Tips

- **Keep both terminals running** - Backend and frontend need to run simultaneously
- **Check the console** - Both terminal and browser console show helpful errors
- **Read the comments** - The code is heavily commented for learning
- **Experiment** - Don't be afraid to change things and see what happens!

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Read `LEARNING_GUIDE.md` for concepts and explanations
- Look at `backend/README.md` and `frontend/README.md` for specific info
- Open an issue on GitHub if you're stuck

---

**Happy Coding! 🎉**

Now go build something amazing!
