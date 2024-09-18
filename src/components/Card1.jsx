import "./card1.css";
import Bike from "../assets/bike3.png"

function Card() {
  return (
    <div className="mainContainer">
      <div className="imgContainer"> 
          <img src={Bike} alt="" />
      </div>
      <div className="cardTitle">
        <h1>hello</h1>
      </div>
      <div className="desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi.
        </p>
      </div>

      </div>
  )
}

export default Card