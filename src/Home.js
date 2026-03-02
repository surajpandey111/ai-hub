import React, { useState } from "react";
import profilePic from "./assets/suraj.jpg"; // Update with your actual image name
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    fetch("https://web-app-ai-1.onrender.com/")
      .then((res) => console.log("AI server preloaded:", res.status))
      .catch((err) => console.error("Error preloading AI:", err));
  }, []);
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false); // State to toggle AI iframe

  const [loadingAI, setLoadingAI] = useState(false); // New state for loading message

  const handleShowAI = () => {
    setLoadingAI(true); // Show "Please wait..." message

    // Simulate loading time, then show AI
    setTimeout(() => {
      setLoadingAI(false);
      setShowAI(true);
    }, 5000); // 5 seconds delay to simulate loading
  };
  

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className={`home-container ${showAI ? "full-screen" : ""}`}>
      {!showAI ? (
        <>
          <h1>🚀 Welcome to Gyanm-The DeepAI! 🤖</h1>

          {/* Scrolling Notification Bar */}
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              📢 Exciting Updates: Join our AI revolution now! 🚀 |
              <a href="https://www.linkedin.com/company/ai-for-everyday-work/" target="_blank" rel="noopener noreferrer" className="social-link">
                🔗 Follow on LinkedIn
              </a> |
              <a href="https://www.instagram.com/surajpandey6758/" target="_blank" rel="noopener noreferrer" className="social-link">
                📸 Follow on Instagram
              </a> |
              AI-powered automation for everyone! | Follow us for the latest AI innovations! 🎉
            </div>
          </div>

          <p>
            Experience the power of AI in your daily tasks. Smarter, faster, and proudly made in India! 🇮🇳
          </p>
          <div id="use-ai" className="ai-button-container">
            <button onClick={handleShowAI} className="big-ai-btn">
              🚀 Click to Use Our AI Now!
            </button>
            <p className="loading-note">
              Internet Should be Fast!
              ⏳ It may take 30-50 seconds to load. Please wait...
            </p>
          </div>
          <div className="ai-description">
            <h2>Gyanm-The DeepAI</h2>
            <p>🚀 India’s First AI Platform – Built for Innovation and Productivity 🇮🇳</p>
            <p>
            Gyanm-The DeepAI is India’s first homegrown AI platform, designed to bring
              the power of artificial intelligence to everyday tasks. It provides a seamless
              experience in both text and image generation, enabling users to boost
              productivity, enhance creativity, and simplify work through cutting-edge AI
              technology.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>✅ AI-powered automation for daily tasks</li>
              <li>✅ Text generation for content creation, research, and assistance</li>
              <li>✅ Image-text generation for image analysis, design, art, and visual projects</li>
              <li>✅ A hub for AI research & collaboration</li>
              <li>✅ Indian innovation – Built to shape the future of AI</li>
            </ul>

            <h3>Our Mission:</h3>
            <p>
              We aim to revolutionize India’s AI ecosystem by developing a truly Indian AI
              platform, empowering businesses, researchers, and individuals with advanced
              technology.
            </p>

            <h3>Join the Innovation:</h3>
            <ul>
              <li>🔗 Connect with AI researchers & developers</li>
              <li>📢 Be part of India's AI revolution</li>
              <li>🌐 Build, create, and innovate with AI For Everyday Work</li>
            </ul>
          </div>

          {/* AI Open Button */}
          <div id="use-ai" className="ai-button-container">
            <button onClick={handleShowAI} className="big-ai-btn">
              🚀 Click to Use Our AI Now!
            </button>
            <p className="loading-note">
              Internet Should be Fast!
              ⏳ It may take 30-50 seconds to load. Please wait...
            </p>
          </div>


          {/* Join Our Community */}
          <div className="community-section">
            <div className="community-left">
              <h2>Join as an AI Research Coordinator & Participant</h2>
              <a href="https://chat.whatsapp.com/D85V7wVvAmrDbKoiWRFFa4" target="_blank" rel="noopener noreferrer" className="join-btn">
                📢 Join WhatsApp Group
              </a>
            </div>
            <div className="community-right">
              <h2>Provide Feedback & Fill Details</h2>
              <a href="https://forms.gle/vx1eiDKEVQd6KChN6" target="_blank" rel="noopener noreferrer" className="join-btn">
                📝 Fill Google Form
              </a>
            </div>
          </div>

          {/* Founder & Team Section */}
          <div className="founder-team-container">
            <div className="founder-details">
              <img src={profilePic} alt="Suraj Kumar Pandey" className="profile-image" />
              <h3>Suraj Kumar Pandey</h3>
              <p>🇮🇳 CEO / Developer / Founder</p>
              <a href="https://www.linkedin.com/in/suraj-kumar-pandey-8a81b6318/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                🔗 LinkedIn Profile
              </a>
            </div>

            <div className="team-section">
              <h2>Our Team</h2>
              <p>🚀 Updating Soon...</p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="logout-container">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          {/* Footer */}
          <div className="footer">
            <p>© {new Date().getFullYear()} Gyanm-The DeepAI. All Rights Reserved.</p>
          </div>
        </>
            ) : (
              <>
                {loadingAI && !showAI && (
                  <p className="loading-message">⏳ Please wait... AI is loading. Do not refresh.</p>
                )}
      
                {showAI && (
                  <iframe
                    src="https://web-app-ai-1.onrender.com/"
                    title="Gyanm-The DeepAI"
                    className="full-screen-iframe"
                  ></iframe>
                )}
              </>
            )}
      
        
        
    </div>
  );
};

export default Home;
