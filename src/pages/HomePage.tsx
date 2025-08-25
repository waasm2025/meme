import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Users } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Sparkles className="text-yellow-500" size={32} />,
      title: "Modern Design",
      description: "Beautiful, responsive interface built with the latest technologies"
    },
    {
      icon: <Zap className="text-blue-500" size={32} />,
      title: "Fast Performance",
      description: "Optimized for speed and smooth user experience"
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Secure & Reliable",
      description: "Built with security best practices and modern standards"
    },
    {
      icon: <Users className="text-purple-500" size={32} />,
      title: "User Friendly",
      description: "Intuitive interface designed for the best user experience"
    }
  ]

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="gradient-text">ModernApp</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A beautiful, modern web application built with React, TypeScript, and Framer Motion.
            Experience the future of web development with smooth animations and responsive design.
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn btn-primary">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </motion.div>
        </div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="floating-card">
            <div className="card-content">
              <div className="card-icon">🚀</div>
              <h3>Ready to Launch</h3>
              <p>Your modern app is ready to go!</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose ModernApp?
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h3>100%</h3>
            <p>Responsive</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Components</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
          <div className="stat-item">
            <h3>∞</h3>
            <p>Possibilities</p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default HomePage