import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { createBike } from "../../actions/bike";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
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
// const kq=JSON.parse(localStorage.getItem("datane") );

const kq = JSON.parse(localStorage.getItem("datane"));

const priceTemp = kq.price;
const tien = parseInt(kq.cost, 10) * 100;
// const onSubmit = e => {
//     e.preventDefault();
//     createBike(kq);
// };

const testClick = () => {
    console.log("đã click rồi đó")

}


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
    console.log("data đó bà :", priceTemp);
    console.log(kq);
    console.log(tien);

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
                    try { const res = await axios.post(`http://localhost:5000/api/bikes`, kq, config) }
                    catch {
                        try { const res = await axios.post("http://localhost:5000/api/posts", kq, config) }
                        catch {
                            try { const res = await axios.post("http://localhost:5000/api/fashions", kq, config) }
                            catch {
                                try { const res = await axios.post(`http://localhost:5000/api/pets`, kq, config)
                                } catch {
                                    try { const res = await axios.post(`http://localhost:5000/api/works`, kq, config)
                                    } catch { console.log("thêm dô chớ sao")
                                    }
                                }
                                // }
                                // }
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
        <>

            {kq.price}
            {!success ?
                <div>
                    <form onSubmit={handleSubmit}>
                        Tổng tiền cần thanh Toán<br />
                        {kq.cost}
                        <fieldset className="FormGroup">
                            <center>THÔNG TIN TÀI KHOẢN THANH TOÁN </center>
                            <div className="FormRow">

                                <CardElement options={CARD_OPTIONS} />
                                {/* <PaymentElement options={CARD_OPTIONS}/> */}
                            </div>
                        </fieldset>
                        <button type="submit"
                        >Pay</button>
                        <button onClick={() => setOpened(true)}
                        >Hủy</button>
                    </form>
                    <Modal size="mini"
                        open={opened}
                        onClose={() => setOpened(false)}
                        closeOnDimmerClick={false}
                        closeOnEscape={false}
                        closeOnClickOutside={false}
                        disableEnforceFocus
                    // backdrop='static'
                    // keyboard= {true}
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
                    <h2>Thanh Toán Thành Công rồi đó bà dà</h2>
                </div>
            }


            {/* </Elements> */}
        </>
    )
}