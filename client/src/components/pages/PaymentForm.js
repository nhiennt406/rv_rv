import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Link } from "react-router-dom"
import { createBike } from "../../actions/bike";
import { Button, Container, Header, Icon, Modal } from 'semantic-ui-react'
import BikeItem from '../bike/BikeItem'

const PUBLIC_KEY = "pk_test_51M7zRhBbJjfukPr45AM4xY9GbR6BbhToF4w2AO35u3ShMCrzy1EtibG0ymXo0e4MS8gz4vouCEqUUModv9HGZmeY004W3f34a8"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "red",
            color: "green",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "pink",
            color: "blue"
        }
    }
}
const kq = JSON.parse(localStorage.getItem("datane"));
const kq2 = JSON.parse(localStorage.getItem("datane2"));
let SLbai = JSON.parse(localStorage.getItem("datasl"))
let tien=0;
const dataArr = [];
for (let i = 1; i <= SLbai; i += 1) {
    dataArr[i]=JSON.parse(localStorage.getItem(`tab${i}`))
console.log("data",dataArr);
 tien=parseInt(tien+=dataArr[i].cost,10)
console.log("tinh tien ne:", tien)
}
const kqTemp = JSON.parse(localStorage.getItem("datane"));
// console.log("kq", kq);
// console.log("kq2", kq2);
// const priceTemp = kq.price;
// const tien = parseInt(kq.cost + kq2.cost2, 10);

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const [opened, setOpened] = useState(false);
    const stripe = useStripe()
    const elements = useElements()
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // console.log("data đó bà :", priceTemp);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
            // payment: elements.getElement(PaymentElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:5000/payment", {
                    id, amount: tien
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                    console.log(`response`);
                    console.log(response)
                    for(let i=1;i<=SLbai;i++){
                    try {
                        const res = await axios.post(`http://localhost:5000/api/bikes`, dataArr[i], config)
                        // const res2 = await axios.post(`http://localhost:5000/api/bikes`, dataArr[i], config)
                    }
                    catch {
                        try { const res = await axios.post("http://localhost:5000/api/fashions",dataArr[i], config) }
                        catch {
                        try { const res = await axios.post("http://localhost:5000/api/posts",dataArr[i], config) }
                        catch {
                          
                                try {
                                    const res = await axios.post(`http://localhost:5000/api/pets`, dataArr[i], config)
                                } catch {
                                    try {
                                        const res = await axios.post(`http://localhost:5000/api/works`, dataArr[i], config)
                                    } catch {
                                        console.log("thêm dô chớ sao")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    return (
        <><div>
            {/* {kq.price} */}
            {!success ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <center>THÔNG TIN HÓA ĐƠN </center>
                        <br /><br/>
                        
                        Khách hàng: NT Nhiên <br /><br/>
                        Email: NhienB1805799@student.ctu.edu.vn<br /><br/>
                        Tổng tiền cần thanh Toán:   {tien}<br /><br/>
                        Vui lòng nhập đầy đủ thông tin vào thông tin thanh toán để quá trình đăng bài hoàn tất!<br />
                        <br/>

                        <fieldset className="FormGroup">
                            <center>THÔNG TIN TÀI KHOẢN THANH TOÁN

                            </center>
                            <div className="FormRow"  >

                                <CardElement options={CARD_OPTIONS} />
                                {/* <PaymentElement options={CARD_OPTIONS}/> */}
                            </div>
                        </fieldset>
                        <center>
                            <Button type="submit"
                            >Thanh Toán</Button>
                            <Button onClick={() => setOpened(true)}
                            >Hủy</Button>
                        </center>
                    </form>
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
                                <center>
                                    Bạn sẽ đăng tin thất bại nếu không thanh toán <br />
                                    Bạn có chắn chắc hủy chứ?
                                </center>
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' inverted onClick={() => setOpened(false)}>
                                <Icon name='checkmark' /> Tiếp tục thanh toán
                            </Button>
                            <Button basic color='red' inverted href="http://localhost:3000" onClick={() => setOpened(false)}>
                                <Icon name='remove' />

                                Hủy
                            </Button>

                        </Modal.Actions>
                    </Modal>
                </div>

                :
                <div>
                    {/* <image src={`https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg` }/> */}
                   
                   <center> <h2>Thanh Toán Thành Công
                        </h2>
                        <img src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg" width={200}   left={200}/>
                       
                       <p>
                        Cảm ơn quý khách đã đăng tin, tin của quý khách sẽ sớm được duyệt, chúc quý khách một ngày tốt lành!
                        
                        </p> {/* <Link to={
                            "/addpost"
                        }>Tiếp Tục Đăng Tin</Link>
                         <Link to={
                            "/addpost"
                        }>----</Link>
                        <Link to={"/manager-post"}>Quản Lý Tin</Link> */}
                        </center>
                </div>
            }
        </div>

            {/* </Elements> */}
        </>
    )
}