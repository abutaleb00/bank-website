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
import IndividualDetails from "./pages/IndividualDetails";
import RtgsLoadDetails from "./pages/RtgsLoadDetails";
 
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
                <Route
                    path="/individual-loan-details"
                    element={<IndividualDetails />}
                />
                <Route
                    path="/rtgs-loan-details"
                    element={<RtgsLoadDetails />}
                />
            </Routes>
            <Footer />
            <Contact />
        </Router>
    );
}
 
export default App;