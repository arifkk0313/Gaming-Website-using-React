import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="container_head">
          <p className="game">GameStation</p>
          <p className="game1" style={{color:'#7501ff'}}>Tournaments</p>          
        </div>
        <div className="para">
          <p className="lorm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eos,<br /> voluptas tempore fuga laboriosam laudantium libero aliquam pariatur <br /> odit obcaecati eaque velit aspernatur in exercitationem dignissimos <br /> labore, nam officiis a!</p>
      <button className="read">READ MORE</button>
      
        </div>
        <div className="fade"></div>
      </div>
    </div>
  );
}

export default Banner;
