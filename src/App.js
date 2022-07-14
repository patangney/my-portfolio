import React from 'react';
import { Article, Brand, CallToAction, Feature, Navbar } from './components';
import {Footer, Features, Blog, Header, Possibility, WhatGP} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
      <Navbar />
      <Header />
     </div>
     <Brand />
     <WhatGP />
     <Features />
     <Possibility />
     <CallToAction />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
