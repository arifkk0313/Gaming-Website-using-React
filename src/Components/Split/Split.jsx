import React from "react";
import "./Split.css";
function Split() {
  return (
    <div
      className="split"
      style={{ background: "rgb(33,19,51)", color: "white" }}
    >
      <section className="d-flex align-items-center">
        <div className="he">
          <p className="splitpara">
            Split{" "}
            <span style={{ color: "#7501ff" }}>
              {" "}
              Deathmatch <br />{" "}
            </span>
            Tournament
          </p>
        </div>
        <div className="lo">
          <p className="lopara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Voluptatem est consectetur voluptate laborum a sequi maiores <br />{" "}
            molestiae minima nam non corporis, nisi tempore aperiam sit <br />{" "}
            optio! Reprehenderit voluptatibus quasi a.
          </p>
          <button className="readmore">READ MORE</button>
        </div>
      </section>
      <div className="right-section">
        <img
          className="gamestation"
          src="https://academy.avast.com/hubfs/New_Avast_Academy/How%20to%20improve%20your%20gaming%20PC%20performance%20%28Academy%29/Academy-How-to-improve-your-gaming-PC-performance-Thumb.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Split;
