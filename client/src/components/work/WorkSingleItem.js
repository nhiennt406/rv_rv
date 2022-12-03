import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import icon from "../../img/icon.png"
import icon3 from "../../img/icon3.png"
import { Grid, Image } from "semantic-ui-react";
// import RelatedBike from "./RelatedBike";
const WorkSingleItem = ({
  work: {
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
    img,
    price,
    phone,
    address,
    description,
    size,
    age,
    giong,
  }
}) => {
  return (
    <Fragment>
      <div style={{ margin: "45px" }}>
        <Grid>
          
          <Grid.Column width={10}>
            <h1 className="ui header">Chi tiết bài viết</h1>
            <Link to="/mobile" className="ui secondary button">
              <i className="arrow alternate circle left icon"></i>
              Trở lại
            </Link>
            <div className="ui divider"></div>
            <h1 className="ui header">{text}</h1>

            <div className="description">
              <p>{description}</p>
            </div>
            <h3
              style={{ color: "red", margin: "10px 0px", fontWeight: "bold" }}
            >
              Giá bán: {price} VNĐ
            </h3>

            <div className="ui divider"></div>
            <Image src={img} />
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="ui items">
              <div className="item">
                <a className="ui tiny image" href="!#">
                  <img src={avatar} alt="/" />
                </a>
                <div className="middle aligned content">
                  <a className="header" href="!#">
                    {name}
                  </a>
                  <div className="date" style={{ margin: "10px 0px" }}>
                    <i className="calendar alternate outline icon"></i>
                    Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
                  </div>
                  <div
                    className="ui star rating"
                    role="radiogroup"
                    tabindex="-1"
                  >
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="1"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="2"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="true"
                      aria-posinset="3"
                      aria-setsize="4"
                      className="active icon"
                      role="radio"
                    ></i>
                    <i
                      tabindex="0"
                      aria-checked="false"
                      aria-posinset="4"
                      aria-setsize="4"
                      className="icon"
                      role="radio"
                    ></i>

                  </div>
                </div>
              </div>
            </div>

            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="mobile alternate icon"></i>
              Số điện thoại:{" "}
              <a className="ui teal tag label" href="!#">
                {phone}
              </a>
            </h3>
            <div className="ui divider"></div>
            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="facebook messenger icon"></i>
              Liên hệ với người này qua:{" "}
              <a
                // href={social}
                className="ui circular facebook icon button"
              // href="!#"
              >
                <i className="facebook icon"></i>
              </a>
            </h3>
            <div className="ui divider"></div>
            <h3 style={{ margin: "10px 0px", fontWeight: "bold" }}>
              <i className="map marker icon"></i>
              Khu vực:{" "}
              <a className="ui teal tag label" href="!#">
                {address}
              </a>
            </h3>
            <div className="ui divider"></div>
            <div>
              <Grid columns={2} padded>
                <Grid.Column width={4}>

                  <img src={icon} width={70} height={70} />
                  <img src={icon3} width={70} height={70} />
                </Grid.Column>
                <Grid.Column width={10} >
                  <p className="icon-nho" >
                    Hẹn gặp ở nơi công cộng và quen thuộc khi giao dịch.
                  </p>
                  <p className="icon-nho">
                    Đi cùng 1 người bạn hiểu biết về sản phẩm khi giao dịch.
                  </p>
                </Grid.Column>
              </Grid> <div className="ui divider"></div>
            </div>
          </Grid.Column>
        </Grid>
        <div className="ui divider"></div>
        <div>
          {/* <RelatedBike /> */}
        </div>

      </div>
    </Fragment>
  );
};

export default connect(null, {})(WorkSingleItem);
