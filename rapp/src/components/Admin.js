import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://dummy-kappa-azure.vercel.app/', { title });
      setMessage('Title updated successfully');
    } catch (error) {
      console.error('Error updating title:', error);
      setMessage('Failed to update title');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">
            New Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Title
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default Admin;
