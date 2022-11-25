import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridColumn, Input, Button, Container, Image } from "semantic-ui-react";
import QuangCao from "../../img/mobilesinglebannergif.gif";
import QuangCao7 from "../../img/quangcao7.png";
import QuangCao8 from "../../img/gioithieu.jpg";
import Items from "../pages/NewPost";
// import bg from "../../img/ad1.jpg";
export default function Homepage() {
  return (
    // <Container></Container>
    <div>
      {/* className="main"> */}
      <Container size=''>
      <div id="slider" style={{  }}>
        <figure>
          <img src={QuangCao8} alt="/" />
          <img src={QuangCao} alt="/" />
          <img src={QuangCao7} alt="/" />
        </figure>
      </div>
      
      <div className="div-DM">
    
      <h1
        className="ui header"
        style={{
          paddingTop:"15px",
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
      KHÁM PHÁ DANH MỤC
      </h1>
     
      <Grid 
        // relaxed
        // padded
        columns={8}
      >
      
        <Grid.Column />
        <Grid.Column>
          <h3>Điện Thoại</h3>
          <Link to="/mobile">
            <div className="mobile-gif"></div>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <h3>Thời Trang</h3>
          <Link to="/fashion">
            <div className="fashion-gif"></div>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <h3>Thú Cưng</h3>
          <Link to="/pet">
            <div className="dog-gif"></div>
          </Link>{" "} </Grid.Column>
        <Grid.Column>
          <h3>Xe cộ</h3>
          <Link to="/bike">
            <div className="bike-gif"></div>
          </Link> </Grid.Column>
        <Grid.Column>
          <h3>Tuyển Dụng</h3>
          <Link to="/hr">
            <div className="job-gif"></div>
          </Link>   </Grid.Column>

        <Grid.Column>
          <h3>Tuyển Dụng</h3>
          <Link to="/hr">
            <div className="job-gif"></div>
          </Link>   </Grid.Column>
      </Grid>
      </div>
      <span></span><br/>
      <div className="div-NewPost"> 
      
        <Items/>
      </div>
      </Container>
    </div>




  );
}
