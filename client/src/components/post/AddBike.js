import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import { connect } from "react-redux";
import { createBike } from "../../actions/bike";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Button, Divider, Grid, ItemExtra, TextArea } from "semantic-ui-react";
import TextEditor from "./TextEditor";
import PayBtn from "../pages/PayBtn";

const AddBike = (
  // { createBike }
) => {
  const arrayTemp=[];
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
  const SLbai = JSON.parse(localStorage.getItem("datasl"))
  console.log(SLbai);

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

        <Grid>
          <Grid.Row>
            {/* <Grid.Column width={3}>
              <div className="banner-dangtin2"></div>
            </Grid.Column> */}
            {SLbai == 1 ?
              <Grid.Column width={10}>
                <form
                  onSubmit={e => onSubmit(e)}
                  className="ui form">
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
                          {/* <button type="btn">Upload</button> */}
                          <Button>
                            Upload
                          </Button>
                        </ReactFileReader>
                        <input
                          // onChange={e => onChange(e)}
                          value={formData.img}
                          name="img"
                          // handleFiles={handleFiles}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="audio description icon"></i> Tiêu đề
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
                      </label>
                      <div className="ui input">
                        <input
                          value={formData.text}
                          name="text"
                          onChange={e => onChange(e)}
                          type="text"
                          placeholder={formData.text}
                        // disabled
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
                          value={formData.address}
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
                          value={formData.phone}
                          name="phone"
                          onChange={e => onChange(e)}
                          type="text"
                          placeholder="Số điện thoại của bạn"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="phone icon"></i> Tình trạng xe
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
                      </label>
                      <div className="ui input">
                        <TextArea
                          value={formData.tinhtrang}
                          name="tinhtrang"
                          onChange={e => onChange(e)}
                          type="text"
                          placeholder="Tình trạng xe của bạn"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="unstackable two fields">
                    <div className="field">
                      <label>
                        <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
                      </label>

                      <div className="ui input">
                        <NumberFormat
                          thousandSeparator={true}
                          value={formData.price}
                          name="price"
                          onChange={e => onChange(e)}
                          placeholder="Giá tiền"
                          prefix={"$"}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
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
                  </div>
                  <div className="two fields">
                    <div className="field">
                      <label>
                        <i className="pencil alternate icon"></i> Mô tả
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
                      </label>
                      <div className="ui input">
                        <TextArea
                          value={formData.description}
                          name="description"
                          onChange={e => onChange(e)}
                          type="text"
                          placeholder="Mô tả về sản phẩm của bạn"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i class="car icon"></i> Hãng xe
                        <sup
                          style={{ color: "red", fontSize: "20px" }}
                          color="red"> *</sup>
                      </label>
                      <div className="ui input">
                        <TextArea
                          value={formData.brand}
                          name="brand"
                          onChange={e => onChange(e)}
                          type="text"
                          placeholder="Hãng xe"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                    </label>
                    <div className="ui input">
                      <NumberFormat
                        thousandSeparator={true}
                        value={formData.cost}
                        name="cost"
                        // onChange={e => onChange(e)}
                        // placeholder={'cost'}
                        prefix={"$"}
                        disabled
                      />

                    </div>
                  </div>

                  {/* <PayBtn BikeItem={formData} /> */}
                </form>
              </Grid.Column>
              : <div>
                <h2>Nội dung tin đầu tiên</h2>
                <Grid.Column width={10}>
                  <form
                    onSubmit={e => onSubmit(e)}
                    className="ui form">
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
                            {/* <button type="btn">Upload</button> */}
                            <Button>
                              Upload
                            </Button>
                          </ReactFileReader>
                          <input
                            // onChange={e => onChange(e)}
                            value={formData.img}
                            name="img"
                            // handleFiles={handleFiles}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="audio description icon"></i> Tiêu đề
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <input
                            value={formData.text}
                            name="text"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder={formData.text}
                          // disabled
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
                            value={formData.address}
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
                            value={formData.phone}
                            name="phone"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Số điện thoại của bạn"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="phone icon"></i> Tình trạng xe
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData.tinhtrang}
                            name="tinhtrang"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Tình trạng xe của bạn"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="unstackable two fields">
                      <div className="field">
                        <label>
                          <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>

                        <div className="ui input">
                          <NumberFormat
                            thousandSeparator={true}
                            value={formData.price}
                            name="price"
                            onChange={e => onChange(e)}
                            placeholder="Giá tiền"
                            prefix={"$"}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
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
                    </div>
                    <div className="two fields">
                      <div className="field">
                        <label>
                          <i className="pencil alternate icon"></i> Mô tả
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData.description}
                            name="description"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Mô tả về sản phẩm của bạn"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i class="car icon"></i> Hãng xe
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData.brand}
                            name="brand"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Hãng xe"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                      </label>
                      <div className="ui input">
                        <NumberFormat
                          thousandSeparator={true}
                          value={formData.cost}
                          name="cost"
                          // onChange={e => onChange(e)}
                          // placeholder={'cost'}
                          prefix={"$"}
                          disabled
                        />

                      </div>
                    </div>

                    {/* <PayBtn BikeItem={formData} /> */}
                  </form>
                </Grid.Column>
                <Divider />
                <h2>
                  Nội dung Tin tiếp theo
                </h2>
                <Grid.Column width={10}>
                  <form
                    onSubmit={e => onSubmit(e)}
                    className="ui form">
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
                            {/* <button type="btn">Upload</button> */}
                            <Button>
                              Upload
                            </Button>
                          </ReactFileReader>
                          <input
                            // onChange={e => onChange(e)}
                            value={formData2.img2}
                            name="img2"
                            // handleFiles={handleFiles}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="audio description icon"></i> Tiêu đề
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <input
                            value={formData2.text2}
                            name="text2"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder={formData2.text2}
                          // disabled
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
                            value={formData2.address2}
                            name="address2"
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
                            value={formData2.phone2}
                            name="phone2"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Số điện thoại của bạn"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="phone icon"></i> Tình trạng xe
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData2.tinhtrang2}
                            name="tinhtrang2"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Tình trạng xe của bạn"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="unstackable two fields">
                      <div className="field">
                        <label>
                          <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>

                        <div className="ui input">
                          <NumberFormat
                            thousandSeparator={true}
                            value={formData2.price2}
                            name="price2"
                            onChange={e => onChange(e)}
                            placeholder="Giá tiền"
                            prefix={"$"}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <NumberFormat
                            thousandSeparator={true}
                            value={formData2.date2}
                            name="date2"
                            onChange={e => onChange(e)}
                            placeholder="Thời gian"
                          // prefix={"ngày"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="two fields">
                      <div className="field">
                        <label>
                          <i className="pencil alternate icon"></i> Mô tả
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData2.description2}
                            name="description2"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Mô tả về sản phẩm của bạn"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label>
                          <i class="car icon"></i> Hãng xe
                          <sup
                            style={{ color: "red", fontSize: "20px" }}
                            color="red"> *</sup>
                        </label>
                        <div className="ui input">
                          <TextArea
                            value={formData2.brand2}
                            name="brand2"
                            onChange={e => onChange(e)}
                            type="text"
                            placeholder="Hãng xe"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                      </label>
                      <div className="ui input">
                        <NumberFormat
                          thousandSeparator={true}
                          value={formData2.cost2}
                          name="cost2"
                          // onChange={e => onChange(e)}
                          // placeholder={'cost'}
                          prefix={"$"}
                          disabled
                        />

                      </div>
                    </div>

                    {/* <PayBtn BikeItem={formData} /> */}
                  </form>
                </Grid.Column>

              </div>

            }
            {/* <Grid.Column width={3}>
              <div className="banner-doc"></div>
            </Grid.Column> */}
          </Grid.Row>
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
