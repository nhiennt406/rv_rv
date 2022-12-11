import React, { useEffect } from 'react'
import { Button, Grid, Tab } from 'semantic-ui-react'
import BikeIt from './BikeIt';
import PayBtn from '../pages/PayBtn';
import { Link } from 'react-router-dom';
const TabDangTin = () => {
  const brr = [];
  let SLbai = JSON.parse(localStorage.getItem("datasl"))
  for (let i = 1; i <= SLbai; i++) {
    const brrTemp = {
      menuItem: `Tin ${i}`,
      render: () => <Tab.Pane attached={false}>
        <div className="ui header" style={{ textAlign: "center" }}> Nội dung tin thứ {i}</div>
        <BikeIt i={i} /></Tab.Pane>,
    };
    brr.push(brrTemp)
  }
  for (let i = 1; i <= SLbai; i++) {
    console.log(`tab${i}`)
    console.log(JSON.parse(localStorage.getItem(`tab${i}`)))
    console.log("test", i)
  }
  return (<>
    <div className="banner-car"></div>

    <h1 className="ui header" style={{ textAlign: "center" }}>
      Đăng tin xe cộ{" "}
    </h1>
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <div className="banner-dangtin2"></div>
        </Grid.Column>
        <Grid.Column width={10}>
          <Tab menu={{ secondary: true, pointing: true }} panes={brr} >
          </Tab>
          <center>
            <PayBtn BikeItem={brr} />
            <Link to="/bike" className="ui primary basic button">
              Chuyển đến trang tin quảng cáo xe cộ
            </Link></center>
        </Grid.Column>
        <Grid.Column width={3}>
          <div className="banner-dangtin2"></div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
  )
}

export default TabDangTin