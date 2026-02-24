import React from 'react'
import './Trending.css'
import game1 from "../../img/game1.png";
import game2 from "../../img/game2.png";
import game3 from "../../img/game3.png";
import game4 from "../../img/game4.png";
import fire from "../../img/fire.svg";
const Trending = () => {
  return (
   <div className="container tranding">
  <a className="see-all" href="#">SEE ALL</a>
  <h3>Currently Trending Games</h3>

  <div className="games">
    <div className="block">
      <img src={game1} alt="game1" />
      <span><img src={fire} alt="follower" />40 Followers</span>
    </div>
    <div className="block">
      <img src={game2} alt="game2" />
      <span><img src={fire} alt="follower" />40 Followers</span>
    </div>
    <div className="block">
      <img src={game3} alt="game3" />
      <span><img src={fire} alt="follower" />40 Followers</span>
    </div>
    <div className="block">
      <img src={game4} alt="game4" />
      <span><img src={fire} alt="follower" />40 Followers</span>
    </div>
  </div>
</div>
  )
}

export default Trending
