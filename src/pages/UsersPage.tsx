import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Edit, Trash2, User, Mail, Phone, MapPin } from 'lucide-react'

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState<any>(null)

  // Mock user data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      status: 'Active',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      location: 'San Francisco, CA',
      status: 'Active',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      status: 'Inactive',
      avatar: '👨‍💻'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1 (555) 789-0123',
      location: 'Austin, TX',
      status: 'Active',
      avatar: '👩‍💻'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@example.com',
      phone: '+1 (555) 321-6540',
      location: 'Seattle, WA',
      status: 'Active',
      avatar: '👨‍🎨'
    }
  ]

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEditUser = (user: any) => {
    setSelectedUser(user)
  }

  const handleDeleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      console.log('Deleting user:', userId)
    }
  }

  return (
    <motion.div
      className="users-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <div className="page-title-section">
          <h1>Users</h1>
          <p>Manage your application users and their information</p>
        </div>
        
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Add User
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="search-section">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search users by name, email, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters">
          <select className="filter-select">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          
          <select className="filter-select">
            <option value="">All Locations</option>
            <option value="ny">New York</option>
            <option value="sf">San Francisco</option>
            <option value="chicago">Chicago</option>
            <option value="austin">Austin</option>
            <option value="seattle">Seattle</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                className="user-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ backgroundColor: 'var(--hover-bg)' }}
              >
                <td className="user-info">
                  <div className="user-avatar">{user.avatar}</div>
                  <div className="user-details">
                    <h4>{user.name}</h4>
                    <span className="user-id">ID: {user.id}</span>
                  </div>
                </td>
                
                <td className="contact-info">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{user.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>{user.phone}</span>
                  </div>
                </td>
                
                <td className="location">
                  <div className="location-item">
                    <MapPin size={16} />
                    <span>{user.location}</span>
                  </div>
                </td>
                
                <td className="status">
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                
                <td className="actions">
                  <motion.button
                    className="action-btn edit"
                    onClick={() => handleEditUser(user)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Edit user"
                  >
                    <Edit size={16} />
                  </motion.button>
                  
                  <motion.button
                    className="action-btn delete"
                    onClick={() => handleDeleteUser(user.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Delete user"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Count */}
      <div className="user-stats">
        <p>Showing {filteredUsers.length} of {users.length} users</p>
      </div>

      {/* Edit User Modal (placeholder) */}
      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit User: {selectedUser.name}</h3>
            <p>User editing functionality would go here...</p>
            <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default UsersPage