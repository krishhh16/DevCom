import React from "react";
import './Home.css'
import {Link} from "react-router-dom"
export default function HomePage() {
    return (
        <div>
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sign-up">Sign up for free!!</Link></li>
        <li><Link to="/log-in">Log in</Link></li>
      </ul>
    </nav>
  </header>
  <div className="container">
  <h1 className="title">DevCom</h1>
  <p className="description">DevCom is a startup which helps developers build their online presence on platforms like Twitter and LinkedIn. We automate posts and generate engaging content related to developers' own niche.</p>
  <p className="summary">Given a simple summary of your day, we'll create impactful content, enabling you to focus on what you do best - coding!</p>
</div> 

  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to our Modern Landing Page</h1>
      <p>We provide innovative solutions for your business needs.</p>
      <a href="#" className="btn">Get Started</a>
    </div>
  </section>
  
  <section className="features">
    <h2>Key Features</h2>
    <div className="feature">
      <i className="fas fa-mobile-alt"></i>
      <h3>Responsive Design</h3>
      <p>Your website will look great on any device.</p>
    </div>
    <div className="feature">
      <i className="fas fa-cogs"></i>
      <h3>Easy Customization</h3>
      <p>Customize your website easily with our user-friendly interface.</p>
    </div>
    <div className="feature">
      <i className="fas fa-rocket"></i>
      <h3>Fast Performance</h3>
      <p>Optimized for speed to provide the best user experience.</p>
    </div>
  </section>
  
  <footer>
    <p>&copy; 2022 Modern Landing Page. All rights reserved.</p>
  </footer>
        </div>
    )
}