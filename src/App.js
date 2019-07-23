import React from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Advantages from './components/advantages/Advantages';
import Reviews from './components/reviews/Reviews';
import Quotes from './components/quotes/Quotes';
import Services from './components/services/Services';
import Order from './components/order/Order';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Advantages />
      <Reviews />
      <Quotes />
      <Services />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
