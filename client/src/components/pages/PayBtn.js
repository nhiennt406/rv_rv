
import React from "react";
import StripeContainer from "./StripeContainer";

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