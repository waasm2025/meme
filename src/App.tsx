import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, Settings, Menu, X, Sun, Moon } from 'lucide-react'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import SettingsPage from './pages/SettingsPage'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : ''}`}>
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <motion.div
              className="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>ModernApp</h1>
            </motion.div>
            
            <nav className="desktop-nav">
              <NavLink to="/" icon={<Home size={20} />} label="Home" />
              <NavLink to="/users" icon={<Users size={20} />} label="Users" />
              <NavLink to="/settings" icon={<Settings size={20} />} label="Settings" />
            </nav>

            <div className="header-actions">
              <button
                onClick={toggleDarkMode}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-toggle"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLink to="/" icon={<Home size={20} />} label="Home" onClick={toggleMobileMenu} />
              <MobileNavLink to="/users" icon={<Users size={20} />} label="Users" onClick={toggleMobileMenu} />
              <MobileNavLink to="/settings" icon={<Settings size={20} />} label="Settings" onClick={toggleMobileMenu} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  )
}

// Navigation Link Component
const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href={to} className="nav-link">
      {icon}
      <span>{label}</span>
    </a>
  </motion.div>
)

// Mobile Navigation Link Component
const MobileNavLink = ({ to, icon, label, onClick }: { to: string; icon: React.ReactNode; label: string; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <a href={to} className="mobile-nav-link" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </a>
  </motion.div>
)

export default App