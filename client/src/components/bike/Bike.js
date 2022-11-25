import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getBike } from "../../actions/bike";
import BikeItem from "./BikeItem";
import { Grid, Card } from "semantic-ui-react";
import { Divider, Input } from 'antd';
import axios from 'axios';
// import ReactSearchBox from "react-search-box";
// import { JsonWebTokenError } from "jsonwebtoken";
const Bike = (
  { getBike, bike: { bikes, loading } }
) => {

  useEffect(() => {
    getBike();
  }, [getBike]);
  // const state = {
  // 	post: [],
  // 	allPosts: []
  // };
  // const componentDidMount=()=> {
  // 	axios
  // 		.get('http://localhost:5000/api/bikes', {
  // 			headers: {
  // 				Accept: "application/json",
  // 				"Content-Type": "application/json"
  // 			}
  // 		})
  // 		.then(({ data }) => {
  // 			this.setState({
  // 				post: data,
  // 				allPosts: data // array data from JSON stored in these
  // 			});
  // 		})
  // 		.catch(err => {});
  // }
  // const _onKeyUp = e => {
  // 	// filter post list by title using onKeyUp function
  // 	const post = this.state.allPosts.filter(item =>
  // 		item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
  // 	);
  // 	this.setState({ post });
  // };
  // const [APIData, setAPIData] = useState([])
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  // const [search, setSearch] = useState('');


  // useEffect(() => {
  //   axios.get(`http://localhost:5000/api/bikes`)
  //     .then((response) => {
  //       setAPIData(response.data);
  //     })
  // }, [])

  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   axios(`http://localhost:5000/api/bikes`).then(
  //     ({ data }) => setdata(data)
  //   );
  // }, []);

  // const [handleSearch] = useFetchDataHook();

  // function handleInputChange(e) {
  //     setKeyword(e.target.value)
  // }
  // const arrSearch = [];

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   if (searchInput !== '') {
  //     const filteredData = APIData.filter((item) => {
  //       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())

  //     })
  //     // JSON.stringify(filteredData);
  //     setFilteredResults(filteredData)
  //     // arrSearch.push(filteredData);

  //     setSearch(arrSearch);
  //     // console.log("h",filteredData);
  //     {
  //       arrSearch.map((item) =>
  //         console.log("item", item))
  //     }
  //   }
  //   else {
  //     setFilteredResults(APIData)
  //   }


  // }
  // console.log('id', search);
  // {arrSearch.map((item) => 
  //   console.log("item",item))}
  // for (var i = 0; i < search.length; i++) {
  //   console.log('id', search[i]._id)
  // }
  // console.log("s:", arrSearch._)
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
          Xe cộ giá rẻ 2019
        </h1>
     

        <div style={{ margin: " 0px 30px" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <div className="banner-doc2"></div>
              </Grid.Column>
              <Grid.Column width={10}>
                {bikes.map(bike =>{  
                    const { _id, text, name, user, date, img, price, status }= bike
                  console.log("bike status:", status)
                  
                  return status==="Đã duyệt" ? (
                    <BikeItem key={bike._id} bike={bike} />
                  ) : ('')
                
              }
                )
                }
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
