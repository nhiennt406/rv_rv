import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getSingleBike } from "../../actions/bike";
import { getSinglePet } from "../../actions/pet";
import PetSingleItem from "./PetSingleItem";
// import BikeSingleItem from "./BikeSingleItem";
const PetDetail = ({ getSinglePet, pet: { pet, loading }, match }) => {
  useEffect(() => {
    getSinglePet(match.params.id);
  }, [getSinglePet]);
  return loading || pet === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="bike_details"></div>
      <PetSingleItem pet={pet} />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  pet: state.pet
});
export default connect(mapStateToProps, { getSinglePet })(PetDetail);
