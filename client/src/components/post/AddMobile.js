import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Grid } from "semantic-ui-react";
import PayBtn from "../pages/PayBtn"
const AddMobile = (
  // { createPost }
  ) => {
  const [formData, setFormData] = useState({
    text: "",
    social: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: "", date1:"", cost:"",
    status: "Chưa duyệt", brand:"",
    costEdit:3000,
  });
  const { text,date1, cost, costEdit, brand,img, price, phone, address, description, social,status } = formData;
  const onChange = e => {
    if 
    (
    
      [e.target.name]=="date1"
      )
    {const costTemp = e.target.value * formData.costEdit;
    
    formData.cost = costTemp;}
    formData.status = "Chưa duyệt";
    localStorage.setItem("datane", JSON.stringify(formData));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // {localStorage.setItem("datane", JSON.stringify(formData))}
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // createPost(formData);
  };
  const handleFiles = files => {
    setFormData({ 
      ...formData,
      img: files.base64
    });
    // setFormData({...formData, e.target.img: e.target.value})
  };
  console.log("date1:", formData.date1);
  console.log("brand:", formData.brand);
  
  return (
    <div>
      <div className="banner-dangtin"></div>
      <h1 className="ui header" style={{ textAlign: "center" }}>
        Đăng tin điện thoại{" "}
      </h1>
      <div
        style={{
          margin: "0px 50px"
        }}
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <div className="banner-dangtin2"></div>
            </Grid.Column>
            <Grid.Column width={10}>
              <form onSubmit={e => onSubmit(e)} className="ui form">
                <div className="unstackable two fields">
                  <div className="field">
                    <label>
                      <i className="file image icon"></i> Hình ảnh
                    </label>
                    <div className="ui input">
                      <ReactFileReader
                        fileTypes={["jpg", "png"]}
                        base64={true}
                        handleFiles={handleFiles}
                      >
                        <button type="button">Upload</button>
                      </ReactFileReader>
                      <input
                        onChange={e => onChange(e)}
                        value={img}
                        name="img"
                        handleFiles={handleFiles}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="audio description icon"></i> Tiêu đề
                    </label>
                    <div className="ui input">
                      <input
                        value={text}
                        name="text"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Tiêu đề bài post"
                      />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>
                      <i className="location arrow icon"></i> Địa Chỉ
                    </label>
                    <div className="ui input">
                      <input
                        value={address}
                        name="address"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Địa chỉ của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="phone icon"></i> Số điện thoại
                    </label>
                    <div className="ui input">
                      <input
                        value={phone}
                        name="phone"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Số điện thoại của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="phone icon"></i> Tình trạng bảo hành
                    </label>
                    <div className="ui input">
                      <input
                        value={formData.brand}
                        name="brand"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Tình trạng bảo hành của điện thoại"
                      />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>
                      <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
                    </label>
                    <div className="ui input">
                      <NumberFormat
                        thousandSeparator={true}
                        value={price}
                        name="price"
                        onChange={e => onChange(e)}
                        placeholder="Giá tiền"
                        prefix={"$"}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="pencil alternate icon"></i> Mô tả
                    </label>
                    <div className="ui input">
                      <input
                        value={description}
                        name="description"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Mô tả về sản phẩm của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="pencil alternate icon"></i> Link mạng xã hội
                      để liên lạc
                    </label>
                    <div className="ui input">
                      <input
                        value={social}
                        name="social"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Link mạng xã hội để liên lạc"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                    <label>
                      <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                    </label>
                    <div className="ui input">
                      <NumberFormat
                        thousandSeparator={true}
                        value={formData.date1}
                        name="date1"
                        onChange={e => onChange(e)}
                        placeholder="Thời gian"
                      // prefix={"ngày"}
                      />
                    </div>
                  </div>
                  <div className="field">
                  <label>
                    <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                  </label>
                  <div className="ui input">
                    <NumberFormat
                      // thousandSeparator={true}
                      value={formData.cost}
                      name="cost"
                      // onChange={e => onChange(e)}
                      // placeholder={'cost'}
                      prefix={"$"}
                      disabled
                    />

                  </div>
                </div>
                {/* <button type="submit" className="ui button">
                  Đăng bài
                </button> */}
    <PayBtn BikeItem={formData} />
                <Link to="/mobile" className="ui primary basic button">
                  Chuyển đến trang rao vặt điện thoại
                </Link>
              </form>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="banner-doc"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default AddMobile
// connect(null, { createPost })(withRouter(AddMobile));
