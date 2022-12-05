
import React from "react";
import StripeContainer from "./StripeContainer";
import { Button} from "semantic-ui-react";

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
      <Button
      onClick={()=>handleClickH()}
      >  Thanh Toán && Đăng bài</Button>
        </>
    )
}
export default PayBtn;