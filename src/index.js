import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './components/ScrollToTop';

import './sass/style.scss';
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Abouts from './pages/Abouts';
import Catalogs from './pages/Catalogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/about" exact element={<Abouts />} />
      <Route path="/catalog" exact element={<Catalogs />} />
    </Routes>
    <Footer />
  </HashRouter>
);
