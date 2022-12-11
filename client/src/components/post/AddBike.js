import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import { connect } from "react-redux";
import { createBike } from "../../actions/bike";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Button, Divider, Grid, ItemExtra, TextArea } from "semantic-ui-react";
import TextEditor from "./TextEditor";
import PayBtn from "../pages/PayBtn";
import BikeIt from "./BikeIt";
const AddBike = (
  // { createBike }
) => {
  const arrayTemp=[];
  const [formData2, setFormData2] = useState({
    text2: "",
    brand2: "",
    tinhtrang2: "",
    price2: "",
    phone2: "",
    address2: "",
    description2: "",
    img2: "",
    cost2: "",
    date2: "",
    costEdit: 5000,
    status: "Chưa duyệt"
  });
  const [formData, setFormData] = useState({
    text: "",
    brand: "",
    tinhtrang: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: "",
    cost: "",
    date1: "",
    costEdit: 5000,
    status: "Chưa duyệt"
  });
  
  const arr=[];

  const SLbai = JSON.parse(localStorage.getItem("datasl"))
  const[sl,setsl]=useState(Number(SLbai))
  console.log(sl);
  for(let i=0;i <SLbai;i+=1)
  {
    arr[i]= formData;
    // console.log("test",arr[i]);
  }

console.log(window.screen.height)
  const onChange = e => {
    if ([e.target.name] == "date1") {
      const costTemp = e.target.value * formData.costEdit;

      formData.cost = costTemp;
    }
 if ([e.target.name] == "date2") {
      const costTemp = e.target.value * formData2.costEdit;
      
      formData2.cost2 = costTemp;
    }
    formData.status = "Chưa duyệt";
    // arrayTemp.push(formData);
    localStorage.setItem("datane", JSON.stringify(formData));
    localStorage.setItem("datane2", JSON.stringify(formData2));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
    setFormData2({
      ...formData2,
      [e.target.name]: e.target.value,

    });

    // console.log(formData)
  };

  const onSubmit = e => {
    e.preventDefault();
    // createBike(formData);
  };
  console.log('---------------------------');
  // console.log("date1:", formData.date1);
  // console.log('formdata:',formData);
  // const textk = "kkkk";

  const handleFiles = files => {
    setFormData({
      ...formData, img: files.base64
    });
    // setFormData({...formData, e.target.img: e.target.value})
  };
  //   const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  

  return (

    <div>
      <div className="banner-car"></div>

      <h1 className="ui header" style={{ textAlign: "center" }}>
        Đăng tin xe cộ{" "}
      </h1>

      <div
        style={{
          margin: "0px 50px"
        }}
      >

        <Grid >

          {/* <Grid.Row> */}
            {/* <Grid.Column width={3}>
              <div className="banner-dangtin2"></div>
            </Grid.Column> */}
            {/* <Grid.Column width={12}> */}
            {SLbai == 1 ?
           
         <BikeIt/>
              :
          
             null
            }
            {/* <Grid.Column width={3}>
              <div className="banner-doc"></div>
            </Grid.Column> */}
          {/* </Grid.Row> */}
          {/* </Grid.Column> */}
        </Grid>

        <center>
          <PayBtn BikeItem={formData} />
          <Link to="/bike" className="ui primary basic button">
            Chuyển đến trang tin quảng cáo xe cộ
          </Link></center>
      </div>
    </div>
  );
};

export default AddBike;
// connect(null
  // , { createBike }
  // )
  // (withRouter(AddBike));
