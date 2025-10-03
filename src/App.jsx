import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import Service from "./page/Service";
import Navbar1 from "./components/Navbar1";
import GetPrice from "./page/GetPrice";
import Product from "./page/Product";
import Payment from "./components/Payment";
const App = () => {
  return (
    <>
      <nav>
        <Navbar1 />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/GetPrice" element={<GetPrice />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
