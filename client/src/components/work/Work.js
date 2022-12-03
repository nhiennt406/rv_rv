import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

import { getWork } from "../../actions/work";
import BikeItem from "../bike/BikeItem";
import { getBike } from "../../actions/bike";
import WorkItem from "./WorkItem";
import { Grid, List } from "semantic-ui-react";

const Work = ({ getWork, work: {works }}) => {

  useEffect(() => {
    getWork();
    console.log('works')
    console.log(works)
  }, [getWork]);

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

              {works && works.length > 0
                ? works.map((work) => (
                  <WorkItem key={work._id} work={work} />
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
  work: state.work
});

export default connect(mapStateToProps, { getWork })(Work);