import "./Login.css";
import React, { useState, useEffect } from "react";
import { 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "./firebase"; 
import { useNavigate } from "react-router-dom";
import surajImage from "./assets/suraj.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Ensure redirection only when user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home"); // Redirect after login
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Google Login (DO NOT TOUCH)
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError("Google Login Error: " + error.message);
    }
  };

  // ✅ Fixed GitHub Login
  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/home"); // Redirect after GitHub login
    } catch (error) {
      setError("GitHub Login Error: " + error.message);
    }
  };

  // ✅ Fixed Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // Redirect after Email login
    } catch (error) {
      setError("Email Login Error: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to AI-HUB Multi Domain</h2>

      {/* Error Message Display */}
      {error && <p className="error">{error}</p>}

      <div className="login-buttons">
        <button onClick={handleGoogleLogin} className="google-btn">
          Sign in with Google
        </button>
        <button onClick={handleGithubLogin} className="github-btn">
          Sign in with GitHub
        </button>
      </div>

      <form onSubmit={handleEmailLogin} className="email-login">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="email-btn">Sign in with Email</button>
      </form>

      {/* CEO & About Section */}
      <div className="about-section">
        <img src={surajImage} alt="Suraj Pandey" className="ceo-image" />
        <h3>Suraj Pandey</h3>
        <p>Developer | CEO | Founder</p>
        <p>
        AI-HUB Multi Domain is an advanced AI platform that enhances productivity 
          and simplifies daily tasks with cutting-edge AI models.
        </p>
      </div>
    </div>
  );
};

export default Login;
