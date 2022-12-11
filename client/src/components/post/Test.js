import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Grid , Button} from "semantic-ui-react";
import PayBtn from "../pages/PayBtn"
const AddMobile = (i 
  // { createPost }
  ) => {
    const SLbai = JSON.parse(localStorage.getItem("datasl"))
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

  const setLocal = (i) => {
    const kqtemp = JSON.parse(JSON.stringify(i));
   (localStorage.setItem(`tab${kqtemp.i}`, JSON.stringify(formData)))
  }
  return (
    <div>
   
      <div
       
      >
        <Grid>
          <Grid.Row>
            
            <Grid.Column >
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
                        value={formData.text}
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
                      <input
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
                      <i className="pencil alternate icon"></i> Mô tả
                    </label>
                    <div className="ui input">
                      <input
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
                      <i className="pencil alternate icon"></i> Link mạng xã hội
                      để liên lạc
                    </label>
                    <div className="ui input">
                      <input
                        value={formData.social}
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
  
              </form>
            </Grid.Column>

          </Grid.Row>
        </Grid>
        {i == SLbai-1 ?  <Button onClick={() => setLocal(i)} className="ui primary basic button">
            Thanh toán
          </Button>
          :<Button onClick={() => setLocal(i)} className="ui primary basic button">Lưu</Button>
              }
      </div>
    </div>
  );
};

export default AddMobile
// connect(null, { createPost })(withRouter(AddMobile));
