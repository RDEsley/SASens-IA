import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './styles.css';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Definir Login como a página inicial */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <div className="app">
            <Header />
            <SearchBar />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
