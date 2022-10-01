import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  const [imgname, setImgname] = useState("");
  let navigate = useNavigate();
  return (
    <Container className="width">
      <Row>
        <Col className="bgImage">
          <div>
            <div className="style-nav">
              <h1 className="heading">Pixbay</h1>
              <div>
                {/* <button className="custombutton mt-4">Sign-up</button> &nbsp;
                <button className="custombutton mt-4">Log-in</button> &nbsp; */}
              </div>
            </div>

            <center>
              <div id="hero">
                <div className="hero-header">
                  <h1 className="middle-head">
                    Stunning free images & royalty free stock
                  </h1>
                  <h2 className="second-head">
                    Over 2.6 million+ high quality stock images, videos and
                    music shared by our talented community.
                  </h2>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setImgname(e.target.value)}
                    className="inputSearch"
                    placeholder="Search for free photos"
                  />
                  <br />
                  <br />
                  <button
                    className="custombutton"
                    onClick={() => imgname && navigate(`/Search/${imgname}`)}
                  >
                    Search
                  </button>
                </div>
              </div>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
