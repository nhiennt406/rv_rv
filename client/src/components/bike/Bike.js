import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getBike } from "../../actions/bike";
import BikeItem from "./BikeItem";
import { Grid, Card } from "semantic-ui-react";
import { Divider, Input } from 'antd';
import axios from 'axios';
// import SearchBar from "../SearchBar";
import Search from "../Search"
// import ReactSearchBox from "react-search-box";
// import { JsonWebTokenError } from "jsonwebtoken";

const Bike = (
  { getBike, bike: { bikes, loading } }
) => {

  useEffect(() => {
    getBike();
  }, [getBike]);
  // const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bikes`).then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])

  const [searchResults, setSearchResults] = useState([])
  return loading ? (
    <Spinner />
  ) :
    (

      <div>
        <div className="bike-banner"></div>

        <h1
          className="ui header"
          style={{
            paddingBottom: "20px",
            textAlign: "center"
          }}
        >
          Xe cộ giá rẻ
        </h1>

        {/* <SearchBar/> */}
        {/* <SearchBar posts={posts} setSearchResults={setSearchResults} />
        <ListPage searchResults={searchResults} /> */}
        {/* {searchResults.map(post => {
          return (
            <BikeItem key={post.id} post={post} />
          )
        }
        )
        } */}
        {/* <BikeItem searchResults={searchResults}/> */}
        <div style={{ margin: " 0px 30px" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <div className="banner-doc2"></div>
              </Grid.Column>
              <Grid.Column width={10}>
              <Search/>
                {/* {bikes.map(bike => {
                  const { _id, text, name, user, date, img, price, status } = bike
                  // console.log("bike status:", status)

                  return status === "Đã duyệt" ? (
                    <BikeItem key={bike._id} bike={bike} />
                  ) : ('')

                }
                )
                } */}
              </Grid.Column>

              <Grid.Column width={3}>
                <div className="banner-doc"></div>
                <div className="banner-doc"></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
};
const mapStateToProps = state => ({
  bike: state.bike
});
export default connect(mapStateToProps, { getBike })(Bike);
