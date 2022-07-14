import React from 'react';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import {Footer, Features, Header, Possibility, WhatGP} from './containers';

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
      <Navbar />
      <Header />
     </div>
     <Brand />
     <WhatGP />
     <Possibility />
     <CTA />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
