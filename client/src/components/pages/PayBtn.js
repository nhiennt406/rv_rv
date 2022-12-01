// import axios from "axios"
// import { useSelector } from "react-redux"
// import React, { useEffect } from "react";
// // import BikeItem from "../bike/BikeItem"
// // import url from "./././routes/api"
// const url =`http://localhost:5000/api`;
// const PayBtn = ({
//     BikeItem
// }) => {
//     const user = useSelector((state) => state.auth)
//     const handleCheckOut = () => {
//         console.log(`BikeItem`)
//         console.log(BikeItem)
//         axios.post(`${url}/stripe/create-checkout-session`, {
//             BikeItem
//             // , userId: user._id
//         }).then((res) => {
//             if (res.data.url) {
//                 window.location.href = res.data.url
//             }
//         }
//         ).catch((err) => console.log(err.message));
//     };
//     return (
//         <>
//             <button onClick={() => handleCheckOut()} >
//                 Thanh Toan
//             </button>
//         </>
//     )

// };
// export default PayBtn;
import React from "react";
import StripeContainer from "./StripeContainer";
import BikeItem from "../bike/BikeItem"
const goiThanhToan= ()=>{
    return(
    <StripeContainer/>
    )
}

const handleClickH = () => {
    window.location.href = "http://localhost:3000/pay";
    return(
    // console.log(BikeItem)
    <>
    <StripeContainer/>
    </>
    )
  }
const PayBtn=( BikeItem)=>{
// console.log(`BikeItem`);
// console.log(BikeItem);
    return (
        <>
      <button
      onClick={()=>handleClickH()}
      > Thanh toan</button>
        </>
    )
}
export default PayBtn;