import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contactus from "./pages/Contactus"
import Home from "./pages/Home"
import AboutUs from "./pages/Aboutus"

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/Announcement" element={<AboutUs />} />
                <Route path="/contact-us" element={<Contactus />} />
            </Routes>
        </Router>
    );
};

export default App
