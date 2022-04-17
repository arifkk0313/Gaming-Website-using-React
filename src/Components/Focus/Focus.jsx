import React from "react";
import "./Focus.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";

function Focus() {
  return (
    <div className="focuss">
      <section id="hero2" class="bannerthree">
        <div class="container-fluid sm-12 m-6 lg-3 xl-1" data-aos="fade-up">
          <div class="row">
            <div class="head col-xl-5 col-lg-6 ">
              <h1 className="focus">
                
                Focus And Game<span style={{color:'orange'}}> Manage</span>
              </h1>
            </div>
          </div>
          <div className="rowtwo">
            <Card className="card1">
              <Card.Img
                variant="top"
                style={{ height: "13rem" }}
                src="https://c4.wallpaperflare.com/wallpaper/777/604/837/cyberpunk-cyberpunk-2077-v-cyberpunk-2077-video-games-wallpaper-preview.jpg"
              />
              <Card.Body>
                <center>
                  <Card.Title>VALORANT</Card.Title>
                </center>
                <button className="view">View Details</button>
                <button className="comment">Comments</button>
              </Card.Body>
              <Card.Body className="timedate">
                <center>
                  <Card.Title className="time">
                    00 <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span>00
                  </Card.Title>
                </center>
                <center>
                  <Card.Title className="day">
                    Days <span style={{ marginLeft: "3rem" }}>Hours</span>{" "}
                    <span style={{ marginLeft: "2.6rem" }}> Minutes </span>{" "}
                    <span style={{ marginLeft: "1.7rem" }}> Seconds </span>
                  </Card.Title>
                </center>
              </Card.Body>
            </Card>
            <Card className="card1 card2">
              <Card.Img
                variant="top"
                style={{ height: "13rem" }}
                src="https://wallpaper.dog/large/10761017.jpg"
              />
              <Card.Body>
                <center>
                  <Card.Title>VALORANT</Card.Title>
                </center>
                <button className="view">View Details</button>
                <button className="comment">Comments</button>
              </Card.Body>
              <Card.Body className="timedate">
                <center>
                  <Card.Title className="time">
                    00 <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span>00
                  </Card.Title>
                </center>
                <center>
                  <Card.Title className="day">
                    Days <span style={{ marginLeft: "3rem" }}>Hours</span>{" "}
                    <span style={{ marginLeft: "2.6rem" }}> Minutes </span>{" "}
                    <span style={{ marginLeft: "1.7rem" }}> Seconds </span>
                  </Card.Title>
                </center>
              </Card.Body>
            </Card>
            <Card className="card1 card3">
              <Card.Img
                variant="top"
                style={{ height: "13rem" }}
                src="https://img5.goodfon.com/wallpaper/nbig/e/a3/cyberpunk-2077-muzhchina-pistolet.jpg"
              />
              <Card.Body>
                <center>
                  <Card.Title>VALORANT</Card.Title>
                </center>
                <button className="view">View Details</button>
                <button className="comment">Comments</button>
              </Card.Body>
              <Card.Body className="timedate">
                <center>
                  <Card.Title className="time">
                    00 <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span> 00{" "}
                    <span className="dot">:</span>00
                  </Card.Title>
                </center>
                <center>
                  <Card.Title className="day">
                    Days <span style={{ marginLeft: "3rem" }}>Hours</span>{" "}
                    <span style={{ marginLeft: "2.6rem" }}> Minutes </span>{" "}
                    <span style={{ marginLeft: "1.7rem" }}> Seconds </span>
                  </Card.Title>
                </center>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Focus;
