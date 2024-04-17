// Category.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('/categories', { name });
      setCategories([...categories, response.data]);
      setName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
