import React, { useEffect } from 'react'
import { Button, Tab } from 'semantic-ui-react'
import BikeIt from './BikeIt';
import PayBtn from '../pages/PayBtn';
import { Link } from 'react-router-dom';
const TabDangTin = () => {
    const brr=[];
  
    let SLbai = JSON.parse(localStorage.getItem("datasl"))
    for (let i=1;i<=SLbai;i++){
      // console.log("test",i)
        const brrTemp={ menuItem: `Tin ${i}`,
        render: () => <Tab.Pane attached={false}> Nội dung tin thứ {i}<BikeIt i={i}/></Tab.Pane>,};
        brr.push( brrTemp)
        // 
    }
    // useEffect(()=>{
    //   for (let i=1;i<=SLbai;i++){
    //     console.log(`tab1${i}`, JSON.parse(localStorage.getItem(`tab1${i}`)));
    //   }

    // },[])
    for (let i=1;i<=SLbai;i++){

      console.log(`tab${i}`)
      console.log(JSON.parse(localStorage.getItem(`tab${i}`)))
      
      console.log("test",i)}
    // console.log(`tab1ne`, JSON.parse(localStorage.getItem(`tab1`)));
    // console.log(`tab2ne`, JSON.parse(localStorage.getItem(`tab2`)));
    // console.log(JSON.parse(localStorage.getItem(`tab5`)))
    // const handleClickH = () => {
    //   window.location.href = "http://localhost:3000/pay";
    //   return(
    //   // console.log(BikeItem)
    //   <>
    //   <StripeContainer/>
    //   </>
    //   )
    // }
return(<>
  <Tab menu={{ secondary: true, pointing: true }} panes={brr} > 
  {/* ({}) */}
   </Tab>
   <center>
   <PayBtn BikeItem={brr} />
   <Link to="/bike" className="ui primary basic button">
            Chuyển đến trang tin quảng cáo xe cộ
          </Link></center>
  </>
)}

export default TabDangTin