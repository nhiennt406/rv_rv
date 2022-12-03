import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

import { getPet } from "../../actions/pet";
import BikeItem from "../bike/BikeItem";
import { getBike } from "../../actions/bike";
import PetItem from "./PetItem";
import { Grid, List } from "semantic-ui-react";

const Pet = ({ getPet, pet: {pets }}) => {

  useEffect(() => {
    getPet();
    console.log('pets')
    console.log(pets)
  }, [getPet]);

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

              {pets && pets.length > 0
                ? pets.map((pet) => (
                  <PetItem key={pet._id} pet={pet} />
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
  pet: state.pet
});

export default connect(mapStateToProps, { getPet })(Pet);