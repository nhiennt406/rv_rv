import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createFashion } from "../../actions/fashion";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Grid, ItemExtra, TextArea } from "semantic-ui-react";
import TextEditor from "./TextEditor";
import { createBike } from "../../actions/bike";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
// import 'antd.css';

// const { DatePicker } = antd;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const AddFashion = ({ createFashion }) => {
  const [formData, setFormData] = useState({
    text: "",
    brand: "",
    tinhtrang: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: "",
    // date: "",
    cost: "",
    date1: "",
    costEdit: 5000,
  });
  const {
    text,
    img,
    price,
    phone,
    address,
    description,
    brand,
    tinhtrang,
    date,
    cost
  } = formData;
  const onChange = e => {
    const costTemp = e.target.value * formData.costEdit;

    formData.cost = costTemp;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  let newDate = new Date();
  // let toMorrow= newDate.setDate(newDate.getDate()+1);
  // let DateNe =new Date();
  const onSubmit = e => {
    e.preventDefault();
    createFashion(formData);
  };
  const handleFiles = files => {
    setFormData({
      ...formData,
      img: files.base64
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
        Đăng tin thời trang{" "}
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
                      <TextArea
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
                      <TextArea
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
                      <i className="phone icon"></i> Tình trạng thời trang
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={tinhtrang}
                        name="tinhtrang"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Tình trạng sản phẩm của bạn"
                      />
                      {/* <TextareaAutosize1
                        aria-label="empty textarea"
                        placeholder="Empty"
                        style={{ width: 200 }}
                      /> */}
                      {/* <TextEditor
                        value={tinhtrang}
                        name="tinhtrang"
                        onChange={e => onChange(e)} /> */}
                    </div>
                  </div>
                </div>
                <div className=" two fields">
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
                      <TextArea
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
                      <i class="car icon"></i> Size
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={brand}
                        name="brand"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Size sản phẩm"
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
                <div> 
                {/* // className="field"> */}
               
               
                </div>
                {/* <label>
                    <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                  </label> */}
                {/* <RangePicker /> */}
                {/* <div className="field">
                  <label>
                    <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                  </label>
                  <div className="ui input">
                    <NumberFormat
                      thousandSeparator={true}
                      value={cost * date}
                      name="price"
                      // onChange={e => onChange(e)}
                      placeholder="Chi phí"
                      prefix={"$"}
                    />
                  </div>
                </div> */}
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
                <button type="submit" className="ui button">
                  Đăng bài
                </button>

                <Link to="/fashion" className="ui primary basic button">
                  Chuyển đến trang rao vặt thời trang
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
  //   <>
  // <DatePicker/>
    
  //   </>
  );
};

export default connect(null, { createFashion })(withRouter(AddFashion));
