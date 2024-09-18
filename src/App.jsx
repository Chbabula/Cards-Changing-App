import './App.css';
import { Footer } from './components/footer/Footer';
import Home from './Home';
import { useState } from 'react';

function App() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="App">
      <Home activeCard={activeCard} /> 
      <Footer setActiveCard={setActiveCard} />
    </div>
  );
}

export default App;
