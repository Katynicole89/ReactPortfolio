import React from 'react';
import Nav from './components/Navigation';
import About from './components/About';

function App() {

  return (
    <div>   
      <Nav />
      <main>
           <About></About> 
      </main>
    </div>
  );
}

export default App;