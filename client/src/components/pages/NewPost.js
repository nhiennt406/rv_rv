
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import Spinner from "../layout/Spinner";
// import { getPost } from "../../actions/post";
// import MobileItem from "./MobileItem";
// import FashionItem from "../fashion/FashionItem"
// import { Grid, GridColumn } from "semantic-ui-react";
// import axios from "axios";
// import{getFashion }  from "../../actions/fashion"
//   const Fashion = ({ getFashion, fashion: {fashions }}) => {

//     useEffect(() => {
//       getFashion();
//       console.log('fashions')
//       console.log(fashions)
//     }, [getFashion]);

//   const [DataListFS, setDataListFS] = useState([]);
//   useEffect(() => {
//     axios(`http://localhost:5000/api/fashions`).then(
//       ({ data }) => setDataListFS(data)
//     );
//   }, []);
//   return (
//     <div>
//       {/* <div className="mobile-banner"></div> */}

//       <h1
//         className="ui header"
//         style={{
//           paddingBottom: "20px",
//           textAlign: "center"
//         }}
//       >
//         TIN MỚI ĐĂNG
//       </h1>
//       <div style={{ margin: " 0px 30px" }}>
//         {DataListFS.map((item)=>{
//           // const (_id)=item
//           return (
//         <Grid colums={3}>         
//             <GridColumn with={8}>

//                   {fashions && fashions.length > 0
//                 ? fashions.map((fashion) => (
//                   <FashionItem key={fashion._id} fashion={fashion} />
//                 ))
//                 : null}

//               {/* <FashionItem  key = {item._id} fashion={item}/> */}
//             </GridColumn>
//             <GridColumn with={8}>
//               hehe
//             </GridColumn>
//             <GridColumn with={8}>
//               hihi
//             </GridColumn>
//         </Grid>)})}
//         {/* <Grid>
//           <GridColumn >as </GridColumn>
//         </Grid> */}
//       </div>
//     </div>
//   );
//           }
// const mapStateToProps = state => ({
//   fashion :state.fashions
// });
// export default connect(mapStateToProps, {getFashion })(Fashion);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import axios from "axios";
import { getFashion } from "../../actions/fashion";
import BikeItem from "../bike/BikeItem";
import { getBike } from "../../actions/bike";
import FashionItem from "../fashion/FashionItem";
import PetItem from "../pet/PetItem"
import WorkItem from "../work/WorkItem"
import { Grid, List } from "semantic-ui-react";

const Fashion = ({ getFashion, fashion: { fashions } }) => {

  useEffect(() => {
    getFashion();
    // console.log('fashions')
    // console.log(fashions)
  }, [getFashion]);
  const [DataListBike, setDataListBike] = useState([]);
  const [DataListPet, setDataListPet] = useState([]);
  const [DataListWork, setDataListWork] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataListBike(data)
    );
    axios(`http://localhost:5000/api/pets`).then(
      ({ data }) => setDataListPet(data)
    );
    axios(`http://localhost:5000/api/works`).then(
      ({ data }) => setDataListWork(data)
    );
  }, []);
  return (
    //   <Spinner />
    // ):(
    <div>

      {/* <div className="fashion-banner"></div> */}

      {/* <h1
        className="ui header"
        style={{
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
        Thời Trang
      </h1> */}
      <div style={{ margin: " 0px 30px" }}>
        <Grid>
          <Grid.Row>
            {/* <Grid.Column width={3}>
              <div className="banner-doc2"></div>
            </Grid.Column> */}
            <Grid.Column width={3}>

            </Grid.Column>
            <Grid.Column width={6}>

              {fashions && fashions.length > 0
                ? fashions.map((fashion) => (
                  <FashionItem key={fashion._id} fashion={fashion} />
                ))
                : null}
                 <Grid.Column width={6}>
                {DataListPet && DataListPet.length > 0

                  ? DataListPet.map((pet) => (

                    <PetItem key={pet._id} pet={pet} />
                  ))
                  : null}
                   </Grid.Column>
                   <Grid.Column width={6}>
                  {DataListWork && DataListWork.length > 0 

                    ? DataListWork.map((work) => (
                      <WorkItem key={work._id} work={work} />
                    // (  {(work.status==="Đã duyệt")?  : null}
                    
                    ))
                    : null}
                </Grid.Column>
                </Grid.Column>
             
               
             
              <Grid.Column width={6}>
                {DataListBike && DataListBike.length > 0

                  ? DataListBike.map((bike) => (

                    <BikeItem key={bike._id} bike={bike} />
                  ))
                  : null}

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