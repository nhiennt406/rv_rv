import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

import { getFashion } from "../../actions/fashion";
import BikeItem from "../bike/BikeItem";
import { getBike } from "../../actions/bike";
import FashionItem from "./FashionItem";
import { Grid, List } from "semantic-ui-react";

const Fashion = ({ getFashion, fashion: {fashions }}) => {

  useEffect(() => {
    getFashion();
    console.log('fashions')
    console.log(fashions)
  }, [getFashion]);

  return (
  //   <Spinner />
  // ):(
    <div>

      <div className="fashion-banner"></div>

      <h1
        className="ui header"
        style={{
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
        Thời Trang
      </h1>
      <div style={{ margin: " 0px 30px" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-doc2"></div>
            </Grid.Column>
            <Grid.Column width={10}>

              {fashions && fashions.length > 0
                ? fashions.map((fashion) => (
                  <FashionItem key={fashion._id} fashion={fashion} />
                ))
                : null}

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
  fashion: state.fashion
});

export default connect(mapStateToProps, { getFashion })(Fashion);