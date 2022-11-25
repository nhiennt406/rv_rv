import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getSingleBike } from "../../actions/bike";
import { getSingleFashion } from "../../actions/fashion";
import FashionSingleItem from "./FashionSingleItem";
// import BikeSingleItem from "./BikeSingleItem";
const FashionDetail = ({ getSingleFashion, fashion: { fashion, loading }, match }) => {
  useEffect(() => {
    getSingleFashion(match.params.id);
  }, [getSingleFashion]);
  return loading || fashion === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="bike_details"></div>
      <FashionSingleItem fashion={fashion} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  fashion: state.fashion
});
export default connect(mapStateToProps, { getSingleFashion })(FashionDetail);
