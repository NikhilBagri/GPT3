import './App.css';
import {Footer, WhatGPT3, Header, Blog, Features, Possibility} from './container';
import {Brand, CTA, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
