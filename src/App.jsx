import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from './components/Booking';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
