import React from "react";

import "./App.css";

import "./styles/global.scss";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Product } from "./pages/Product/Product";

import { Blog } from "./pages/Blog/Blog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact/Contact";
import Image from "./pages/Image/Index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/image" element={<Image/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
