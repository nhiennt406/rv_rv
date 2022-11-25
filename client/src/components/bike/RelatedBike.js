import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getBike } from "../../actions/bike";
// import MobileItem from "./MobileItem";
import BikeItem from "./BikeItem";
import { Grid } from "semantic-ui-react";
const Bike = ({ getBike, bike: { bikes, loading } }) => {
    useEffect(() => {
        getBike();
    }, [getBike]);
    return loading ? (
        <Spinner />
    ) :
        (
            <div>
                <h1
                    className="ui header"
                    style={{
                        paddingBottom: "20px",
                        textAlign: "center"
                    }}
                >
                    Có thể bạn quan tâm
                </h1>
                <div style={{ margin: " 0px 30px" }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                {bikes.map(bike => (
                                    <BikeItem key={bike._id} bike={bike} />
                                ))}
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
