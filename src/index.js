import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

import GlobalStyle from './utils/styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
