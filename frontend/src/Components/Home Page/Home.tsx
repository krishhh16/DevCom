import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <div>
      <header className="bg-blue-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          {localStorage.getItem("authToken") ? (
            <ul className="flex space-x-4">
              <li>
                <Link to="/profile" className="text-white">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-white hover:underline"
                >
                  Log Out
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex space-x-4">
              <li>
                <Link to="/sign-up" className="text-white hover:underline">Sign up</Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:underline">Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">DevCom</h1>
        <p className="text-gray-700 mb-4">
          DevCom is a startup that helps developers build their online presence
          on platforms like Twitter and LinkedIn. We automate posts and generate
          engaging content related to developers' own niche.
        </p>
        <p className="text-gray-700 mb-8">
          Given a simple summary of your day, we'll create impactful content,
          enabling you to focus on what you do best - coding!
        </p>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to our Modern Landing Page
            </h1>
            <p className="text-gray-700 mb-4">
              We provide innovative solutions for your business needs.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8">Key Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <i className="fas fa-mobile-alt text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p className="text-gray-700">
              Your website will look great on any device.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <i className="fas fa-cogs text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Easy Customization</h3>
            <p className="text-gray-700">
              Customize your website easily with our user-friendly interface.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-gray-700">
              Optimized for speed to provide the best user experience.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2022 Modern Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
