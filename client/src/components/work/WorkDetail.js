import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getSingleBike } from "../../actions/bike";
import { getSingleWork } from "../../actions/work";
import WorkSingleItem from "./WorkSingleItem";
// import BikeSingleItem from "./BikeSingleItem";
const WorkDetail = ({ getSingleWork, work: { work, loading }, match }) => {
  useEffect(() => {
    getSingleWork(match.params.id);
  }, [getSingleWork]);
  return loading || work === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="bike_details"></div>
      <WorkSingleItem work={work} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  work: state.work
});
export default connect(mapStateToProps, { getSingleWork })(WorkDetail);
