import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from './components/Booking';
import Rooms from './components/Rooms';
import Contact from './components/Contact1';
import Services from './components/Services';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
