import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

// import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { Table, Space } from 'antd';

import "./table.css"
import {
    Grid, Button,
    Container, Header, Icon, Modal
} from 'semantic-ui-react';
import NumberFormat from "react-number-format";
import { Row, Col } from "antd"
// import classNames from 'classnames';


const QLTin = (auth) => {
    const title = 'Quản Lý Tin Quảng Cáo';
    const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

    const breadcrumbs = [
        { to: '', text: 'Trang Chủ' },
        { to: 'apps', title: 'Người Dùng' },
    ];

    const [formT, setformT] = useState(
        { songay: 0 }
    );
    const onChange = e => {


        setformT({
            ...formT,
            [e.target.name]: e.target.value,

        }
        )
        localStorage.setItem("songay", JSON.stringify(formT.songay));

    };
    const onSubmit = e => {
        e.preventDefault();
        // createBike(formData);

    };
    const slTemp = JSON.parse(localStorage.getItem("songay"))
    console.log("test", slTemp)
    const dispatch = useDispatch();
    const [hehe, sethehe] = useState([]);
    const [term, setTerm] = useState('');
    const [opened, setOpened] = useState(false);
    const [dataListDt, setDataListDt] = useState([]);
    const [dataListBike, setDataListBike] = useState([]);
    const [dataListPet, setDataListPet] = useState([]);
    const [dataListWork, setDataListWork] = useState([]);
    const [dataListFashion, setDataListFashion] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/auth`).then(({ data }) => {
            return (
                localStorage.setItem("IDhien_tai", JSON.stringify(data._id))
            )
        })
    }, []);
    const id_ht = JSON.parse(localStorage.getItem("IDhien_tai"));
    useEffect(() => {
        axios(`http://localhost:5000/api/posts`).then(
            ({ data }) => {
                setDataListDt(data)
                // for (let i = 0; i < data.length; i += 1) {
                //     if (id_ht == data[i].user) {
                //         console.log("data[i].user", id_ht == data[i].user);
                //         arrTemp.push(data[i])
                //     }
                //     console.log("hisiiiiiiii", arrTemp);
                // }
            }
        );
        axios(`http://localhost:5000/api/bikes`).then(
            ({ data }) => {
                setDataListBike(data)
                // for (let i = 0; i < data.length; i += 1) {
                //     if (id_ht == data[i].user) {
                //         console.log("data[i].user", id_ht == data[i].user);
                //         arrTemp.push(data[i])
                //     }

                // }
            }
        );


        axios(`http://localhost:5000/api/pets`).then(
            ({ data }) => {
                // for (let i = 0; i < data.length; i += 1) {
                //     if (id_ht == data[i].user) {
                //         console.log("data[i].user", id_ht == data[i].user);
                //         arrTemp.push(data[i])
                //     }
                // }
                setDataListPet(data)
            }
        );
        axios(`http://localhost:5000/api/fashions`).then(
            ({ data }) => {
                // for (let i = 0; i < data.length; i += 1) {
                //     if (id_ht == data[i].user) {
                //         console.log("data[i].user", id_ht == data[i].user);
                //         arrTemp.push(data[i])
                //     }
                // }
                setDataListFashion(data)
            }
        );
        axios(`http://localhost:5000/api/works`).then(
            ({ data }) => {
                setDataListWork(data)
                // for (let i = 0; i < data.length; i += 1) {
                //     if (id_ht == data[i].user) {
                //         console.log("data[i].user", id_ht == data[i].user);
                //         arrTemp.push(data[i])
                //     }
                // }
                // setDataListWork(arrTemp);
                // console.log("mm",dataListWork)
            }
        );

    }, []);
    const Dele = (id) => {
        axios.delete(`http://localhost:5000/api/bikes/${id}`).then((res) => {

            window.location.reload();
        })
            .catch((err) => {
                alert("Xóa thất bại");

            }
            )
    }

    const DeleDt = (id) => {
        axios.delete(`http://localhost:5000/api/posts/${id}`).then((res) => {

            window.location.reload();
        })
            .catch((err) => {
                alert("Xóa thất bại");

            }
            )
    }
    const DeleFs = (id) => {
        axios.delete(`http://localhost:5000/api/fashions/${id}`).then((res) => {

            window.location.reload();
        })
            .catch((err) => {
                alert("Xóa thất bại");

            }
            )
    }
    const DeleTC = (id) => {
        axios.delete(`http://localhost:5000/api/pets/${id}`).then((res) => {

            window.location.reload();
        })
            .catch((err) => {
                alert("Xóa thất bại");

            }
            )
    }
    const DeleTD = (id) => {
        axios.delete(`http://localhost:5000/api/works/${id}`).then((res) => {

            window.location.reload();
        })
            .catch((err) => {
                alert("Xóa thất bại");

            }
            )
    }
    const View = (id) => {
        window.location.href = `/bike/${id}`;
    }
    const ViewDt = (id) => {
        window.location.href = `/mobile/${id}`;
    }
    const ViewFs = (id) => {
        window.location.href = `/fashion/${id}`;
    }
    const ViewTd = (id) => {
        window.location.href = `/work/${id}`;
    }
    const ViewTC = (id) => {
        window.location.href = `/pet/${id}`;
    }
    const Giahan = (id) => {
        axios.patch(`http://localhost:5000/api/fashions/giahan/${id}`,
            { date1: slTemp }
        )
        window.location.reload();
    }
    const GiahanDt = (id) => {
        axios.patch(`http://localhost:5000/api/posts/giahan/${id}`,
            { date1: slTemp }
        )
        window.location.reload();
    }
    const GiahanBike = (id) => {
        axios.patch(`http://localhost:5000/api/bikes/giahan/${id}`,
            { date1: slTemp }
        )
        window.location.reload();
    }
    const GiahanTD = (id) => {
        axios.patch(`http://localhost:5000/api/works/giahan/${id}`,
            { date1: slTemp }
        )
        window.location.reload();
    }
    const GiahanTC = (id) => {
        axios.patch(`http://localhost:5000/api/pets/giahan/${id}`,
            { date1: slTemp }
        )
        window.location.reload();
    }




    useEffect(() => {
        axios(`http://localhost:5000/api/bikes`).then(
          ({ data }) => {
            for (let i = 0; i < data.length; i += 1) {
              const { _id, name, status } = data[i];
              const dateTemp = new Date(data[i].date);
              const datehethan = new Date();
              dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
              if (dateTemp.getTime() < datehethan.getTime()) {
                axios.patch(`http://localhost:5000/api/bikes/hh/${_id}`)
              }
            }
          }
        )
      }, []);
      useEffect(() => {
        axios(`http://localhost:5000/api/posts`).then(
          ({ data }) => {
            for (let i = 0; i < data.length; i += 1) {
              const { _id, name, status } = data[i];
              const dateTemp = new Date(data[i].date);
              const datehethan = new Date();
              dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
              if (dateTemp.getTime() < datehethan.getTime()) {
                axios.patch(`http://localhost:5000/api/posts/hh/${_id}`)
              }
            }
          }
        )
      }, []);
      useEffect(() => {
        axios(`http://localhost:5000/api/fashions`).then(
          ({ data }) => {
            for (let i = 0; i < data.length; i += 1) {
              const { _id, name, status } = data[i];
              const dateTemp = new Date(data[i].date);
              const datehethan = new Date();
              dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
              if (dateTemp.getTime() < datehethan.getTime()) {
                axios.patch(`http://localhost:5000/api/fashions/hh/${_id}`)
              }
            }
          }
        )
      }, []);
      useEffect(() => {
        axios(`http://localhost:5000/api/pets`).then(
          ({ data }) => {
            for (let i = 0; i < data.length; i += 1) {
              const { _id, name, status } = data[i];
              const dateTemp = new Date(data[i].date);
              const datehethan = new Date();
              dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
              if (dateTemp.getTime() < datehethan.getTime()) {
                axios.patch(`http://localhost:5000/api/pets/hh/${_id}`)
              }
            }
          }
        )
      }, []);
      useEffect(() => {
        axios(`http://localhost:5000/api/works`).then(
          ({ data }) => {
            for (let i = 0; i < data.length; i += 1) {
              const { _id, name, status } = data[i];
              const dateTemp = new Date(data[i].date);
              const datehethan = new Date();
              dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
              if (dateTemp.getTime() < datehethan.getTime()) {
                axios.patch(`http://localhost:5000/api/works/hh/${_id}`)
              }
            }
          }
        )
      }, []);
    let id_gh = "";
    {id_gh = JSON.parse(localStorage.getItem("id_fs"))}
    return (
        <>

            {/* <HtmlHead title={title} description={description} className="table" /> */}
            <div className="container" id="contacts">
                {/* Title and Top Buttons Start */}
                <div className="page-title-container">
                    <Row className="g-0">
                        <Col xs="auto" className="mb-2 mb-md-0 me-auto">
                            <div className="w-auto sw-md-30">
                                <h1 className="mb-0 pb-0 display-4">{title} </h1>
                                {/* <BreadcrumbList items={breadcrumbs} /> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
           
            {/* Title and Top Buttons End */}
            <Modal size="mini"
                open={opened}
                onClose={() => setOpened(false)}
                closeOnDimmerClick={false}
                closeOnEscape={false}
                closeOnClickOutside={false}
                disableEnforceFocus

            >
                <Header icon>
                    <Icon name='exclamation triangle' color="red" />
                    Cảnh báo
                </Header>
                <Modal.Content>
                    <p >
                        <form>
                            <label>

                                <i className="audio description icon"></i> Bạn muốn gia hạn thêm bao nhiêu ngày:
                                <sup
                                    style={{ color: "red", fontSize: "20px" }}
                                    color="red"> *</sup>
                            </label>
                            <div className="ui input">
                                <NumberFormat
                                    value={formT.songay}
                                    name="songay"
                                    onChange={e => onChange(e)}
                                    type="text"
                                    placeholder={"Nhập số ngày"}

                                />
                            </div>
                        </form>
                        {/* </div> */}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={() => Giahan(id_gh)}>
                        <Icon name='checkmark' /> Xác nhận gia hạn
                    </Button>
                    <Button color='red' inverted onClick={() => setOpened(false)}>
                        <Icon name='remove' />

                        Hủy
                    </Button>

                </Modal.Actions>
            </Modal>
            <table className='table--container'>
                {/* <tbody > */}
                <tr className='thea'>
                    <td style={{ textAlign: 'center' }}>Tên</td>
                    <td style={{ textAlign: 'center' }}>Tiêu đề</td>
                    <td style={{ textAlign: 'center' }}> Trạng thái</td>
                    <td style={{ textAlign: 'center' }}>Thao Tác</td>
                </tr>
                {dataListWork && dataListWork.map(
                    (Work) => {
                        const { user, name, text, _id, status } = Work;
                        return (
                            (user === id_ht) ? ((
                                <tr key={_id} className="header" style={{ border: "1px boild" }}>
                                    <td style={{ border: "1px boild" }} > {name}</td>
                                    <td style={{ border: "1px boild" }}>{text}</td>
                                    <td style={{ borderBottom: "9px boild red" }}>  {status}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        {(status === "Chưa duyệt") ? (
                                            <Button
                                                onClick={() => DeleTD(_id)}
                                            >
                                                Hủy
                                            </Button>) : ((status === "Đã duyệt") ? (<Button
                                                onClick={() => ViewTd(_id)}
                                            >
                                                Xem
                                            </Button>) : (
                                                <>
                                                    <Button
                                                        onClick={() => {
                                                            setOpened(true);
                                                            localStorage.setItem("id_fs", JSON.stringify(_id));
        
                                                        }}
                                                    >
                                                        Gia hạn
                                                    </Button>
                                                    <Button onClick={() => DeleTD(_id)}
                                                    > Xóa </Button>
                                                </>
                                            )
                                        )
                                        }
                                    </td>
                                </tr>
                            )) : (" ")
                        )
                    }
                )
                }

                {dataListBike && dataListBike.map(
                    (bike) => {
                        const { user, name, text, _id, status } = bike;
                        return (
                            (user === id_ht) ? ((
                                <tr key={_id} className="header">
                                    <td > {name}</td>
                                    <td>{text}</td>
                                    <td> {status}</td>
                                    {/* <td > {_id}</td> */}
                                    <td style={{ textAlign: 'center' }}>
                                        {(status === "Chưa duyệt") ? (
                                            <Button
                                                onClick={() => Dele(_id)}
                                            >
                                                Hủy
                                            </Button>) : ((status === "Đã duyệt") ? (<>  <Button
                                                onClick={() => View(_id)}
                                            >
                                                Xem
                                            </Button> <Button
                                                onClick={() => Dele(_id)}
                                            >
                                                    Xóa
                                                </Button>
                                            </>) : (<>
                                                <Button
                                                        onClick={() => {
                                                            setOpened(true);
                                                            localStorage.setItem("id_fs", JSON.stringify(_id));
        
                                                        }}
                                                    >
                                                        Gia hạn
                                            </Button>
                                                <Button
                                                    onClick={() => Dele(_id)}
                                                >
                                                    Xóa
                                                </Button>
                                            </>)
                                        )
                                        }
                                    </td>
                                </tr>)) : ("")
                        )
                    }
                )

                }
                {dataListPet && dataListPet.map(
                    (pet) => {
                        const { user, name, text, _id, status } = pet;
                        return (
                            (user === id_ht) ? ((
                                <tr key={_id} className="header">

                                    <td > {name}</td>
                                    <td>{text}</td>
                                    <td> {status}</td>
                                    {/* <td > {_id}</td> */}
                                    <td style={{ textAlign: 'center' }}>
                                        {(status === "Chưa duyệt") ? (
                                            <Button
                                                onClick={() => DeleTC(_id)}
                                            >
                                                Hủy
                                            </Button>) : ((status === "Đã duyệt") ? (<Button
                                                onClick={() => ViewTC(_id)}
                                            >
                                                Xem
                                            </Button>) : (<>  
                                              <Button
                                                        onClick={() => {
                                                            setOpened(true);
                                                            localStorage.setItem("id_fs", JSON.stringify(_id));
        
                                                        }}
                                                    >
                                                        Gia hạn
                                            </Button>
                                                <Button
                                                    onClick={() => DeleTC(_id)}
                                                >
                                                    Xóa
                                                </Button>
                                            </>)
                                        )
                                        }
                                    </td>
                                </tr>)) : ("")
                        )
                    }
                )

                }
                {dataListDt && dataListDt.map(
                    (Dt) => {
                        const { user, name, text, _id, status } = Dt;
                        return (
                            (user === id_ht) ? ((
                                <tr key={_id} className="header">

                                    <td > {name}</td>
                                    <td>{text}</td>
                                    <td> {status}</td>
                                    {/* <td > {_id}</td> */}
                                    <td style={{ textAlign: 'center' }}>
                                        {(status === "Chưa duyệt") ? (
                                            <Button
                                                onClick={() => DeleDt(_id)}
                                            >
                                                Hủy
                                            </Button>) : ((status === "Đã duyệt") ? (<Button
                                                onClick={() => ViewDt(_id)}
                                            >
                                                Xem
                                            </Button>) : (<>     <Button
                                                         onClick={() => {
                                                            setOpened(true);
                                                            localStorage.setItem("id_fs", JSON.stringify(_id));
        
                                                        }}
                                                    >
                                                        Gia hạn
                                            </Button>
                                                <Button
                                                    onClick={() => DeleDt(_id)}
                                                >
                                                    Xóa
                                                </Button>
                                            </>)
                                        )
                                        }
                                    </td>
                                </tr>)) : ("")
                        )
                    }
                )

                }
                {dataListFashion && dataListFashion.map(
                    (fashion) => {
                        const { user, name, text, _id, status } = fashion;
                        return (
                            (user === id_ht) ? ((
                                <tr key={_id} className="header">

                                    <td > {name}</td>
                                    <td>{text}</td>
                                    <td> {status}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        {(status === "Chưa duyệt") ? (
                                            <Button
                                                onClick={() => DeleFs(_id)}
                                            >
                                                Hủy
                                            </Button>) : ((status === "Đã duyệt") ? (
                                                <>  <Button
                                                    onClick={() => ViewFs(_id)}
                                                >
                                                    Xem
                                                </Button> <Button
                                                    onClick={() => DeleFs(_id)}
                                                >
                                                        Xóa
                                                    </Button>
                                                </>
                                            ) : (<>  <Button
                                                onClick={() => {
                                                    setOpened(true);
                                                    localStorage.setItem("id_fs", JSON.stringify(_id));

                                                }}
                                            >
                                                Gia hạn
                                            </Button> <Button
                                                onClick={() => DeleFs(_id)}
                                            >
                                                    Xóa
                                                </Button>
                                            </>)
                                        )
                                        }

                                    </td>
                                </tr>)) : ("")
                        )
                    }
                )

                }
                {/* {this.renderTableData()} */}
                {/* </tbody> */}
            </table>

        </>

    );
};

export default QLTin;
