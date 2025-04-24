import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TrafficMap from "./TrafficMap";
import TrafficAnalysis from "./TrafficAnalysis";
import Events from "./Events";
import Feedback from "./Feedback";
import Analytics from "./Analytics";
import Footer from "./Footer";
import Home from "./Home";
import WasteCollectionBooking from "./WasteCollectionBooking";
import Login from "./Login";
import Register from "./Register";
import ProfileDropdown from "./ProfileDropdown";
import ViewRoute from "./ViewRoute";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import ForgotPassword from "./ForgotPassword";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/traffic">Real-Time Traffic Monitoring</Link>
            <Link to="/traffic-analysis">Traffic Analysis</Link>
            <Link to="/waste">Waste Collection Management</Link>
            <Link to="/events">City Events Management</Link>
            <Link to="/transport">Public Transport Management</Link>
            <Link to="/feedback">Citizen Feedback and Engagement</Link>
            <ProfileDropdown user={user} />
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traffic" element={<TrafficMap />} />
            <Route path="/traffic-analysis" element={<TrafficAnalysis />} />
            <Route path="/waste" element={<WasteCollectionBooking />} />
            <Route path="/events" element={<Events />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view-route" element={<ViewRoute />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
