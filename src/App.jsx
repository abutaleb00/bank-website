// Filename - App.js
 
import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LoanDetails from "./pages/LoanDetails";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route
                    path="/loan-details"
                    element={<LoanDetails />}
                />
            </Routes>
            <Footer />
            <Contact />
        </Router>
    );
}
 
export default App;