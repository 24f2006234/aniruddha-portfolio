import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./components/Games";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interests" element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
