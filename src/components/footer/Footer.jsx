import './footer.css';

// eslint-disable-next-line react/prop-types
export const Footer = ({ setActiveCard }) => {  
  return (
    <div className="footer">
      <button onClick={() => setActiveCard(1)}>Display Card 1</button>
      <button onClick={() => setActiveCard(2)}>Display Card 2</button>
      <button onClick={() => setActiveCard(null)}>Hide Cards</button>
    </div>
  );
};
