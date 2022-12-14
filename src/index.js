import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar.js'
import Hcarousel from './components/carousel.js'
import Aboutus from './components/aboutus';
import Gallery from './components/gallery';
import Videos from './components/videos';
import Posters from './components/posters';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hcarousel />
    <Aboutus />
    <Gallery />
    <Videos />
    <Posters />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
