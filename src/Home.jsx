import Card from './components/Card';
import Card1 from './components/Card1';

// eslint-disable-next-line react/prop-types
function Home({ activeCard }) {  
  return (
    <div className="home">
      {activeCard === 1 && <Card />}
      {activeCard === 2 && <Card1 />}
      {activeCard === null && <p>No card selected</p>} 
    </div>
  );
}

export default Home;
