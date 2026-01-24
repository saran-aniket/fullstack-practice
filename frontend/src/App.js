// Import React hooks for state management and side effects
import React, { useState, useEffect } from 'react';
// Import axios for making HTTP requests to backend API
import axios from 'axios';
// Import CSS for styling
import './App.css';

// Main App component
function App() {
  // State Management using React Hooks
  // ==================================
  
  // State for storing list of items from backend
  const [items, setItems] = useState([]);
  
  // State for form inputs (name and description)
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  
  // State for tracking which item is being edited
  const [editingId, setEditingId] = useState(null);
  
  // State for error messages
  const [error, setError] = useState('');
  
  // State for success messages
  const [success, setSuccess] = useState('');

  // Backend API URL - update this if your backend runs on a different port
  const API_URL = 'http://localhost:5000/api/items';

  // useEffect Hook - Runs when component mounts
  // ===========================================
  // This fetches all items from the backend when the page loads
  useEffect(() => {
    fetchItems();
  }, []); // Empty dependency array means this runs only once on mount

  // Function to fetch all items from backend (READ operation)
  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch items. Make sure the backend server is running.');
      console.error('Error fetching items:', err);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to create a new item (CREATE operation)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    
    try {
      if (editingId) {
        // UPDATE operation - if we're editing an existing item
        await axios.put(`${API_URL}/${editingId}`, formData);
        setSuccess('Item updated successfully!');
        setEditingId(null);
      } else {
        // CREATE operation - if we're creating a new item
        await axios.post(API_URL, formData);
        setSuccess('Item created successfully!');
      }
      
      // Reset form and refresh items list
      setFormData({ name: '', description: '' });
      fetchItems();
      setError('');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save item. Please check your input.');
      console.error('Error saving item:', err);
    }
  };

  // Function to delete an item (DELETE operation)
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setSuccess('Item deleted successfully!');
        fetchItems();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to delete item.');
        console.error('Error deleting item:', err);
      }
    }
  };

  // Function to start editing an item
  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      description: item.description
    });
    setEditingId(item._id);
  };

  // Function to toggle item completion status
  const handleToggleComplete = async (item) => {
    try {
      await axios.put(`${API_URL}/${item._id}`, {
        ...item,
        completed: !item.completed
      });
      fetchItems();
    } catch (err) {
      setError('Failed to update item status.');
      console.error('Error updating item:', err);
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setFormData({ name: '', description: '' });
    setEditingId(null);
  };

  // JSX Return - The UI of our application
  // =======================================
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎓 MERN Stack Learning Project</h1>
        <p>MongoDB + Express + React + Node.js</p>
      </header>

      <main className="App-main">
        {/* Error and Success Messages */}
        {error && <div className="message error-message">{error}</div>}
        {success && <div className="message success-message">{success}</div>}

        {/* Form Section - CREATE/UPDATE */}
        <section className="form-section">
          <h2>{editingId ? '✏️ Edit Item' : '➕ Add New Item'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter item name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter item description"
                required
              />
            </div>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Item' : 'Add Item'}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Items List Section - READ/UPDATE/DELETE */}
        <section className="items-section">
          <h2>📋 Items List ({items.length})</h2>
          {items.length === 0 ? (
            <p className="no-items">No items yet. Add your first item above!</p>
          ) : (
            <div className="items-grid">
              {items.map((item) => (
                <div key={item._id} className={`item-card ${item.completed ? 'completed' : ''}`}>
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleToggleComplete(item)}
                      title="Mark as complete/incomplete"
                    />
                  </div>
                  <p className="item-description">{item.description}</p>
                  <p className="item-date">
                    Created: {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <div className="item-actions">
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Learning Resources Section */}
        <section className="learning-section">
          <h2>📚 Learning Resources</h2>
          <div className="resources">
            <div className="resource-card">
              <h3>MongoDB</h3>
              <p>NoSQL database for storing data</p>
              <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
            <div className="resource-card">
              <h3>Express.js</h3>
              <p>Backend framework for Node.js</p>
              <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
            <div className="resource-card">
              <h3>React</h3>
              <p>Frontend library for building UIs</p>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
            <div className="resource-card">
              <h3>Node.js</h3>
              <p>JavaScript runtime for backend</p>
              <a href="https://nodejs.org/docs/" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>Built with ❤️ for learning MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;

