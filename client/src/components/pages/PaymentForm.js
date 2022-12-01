import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createBike } from "../../actions/bike";
import { Button, Modal } from 'semantic-ui-react'
import BikeItem from '../bike/BikeItem'
import ModalN from "../ModalN"
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
const onSubmit = e => {
    e.preventDefault();
    createBike(kq);
};

//   function ModalN() {
//     return(
//     <Modal
//     trigger={<Button>Show Modal</Button>}
//     header='Reminder!'
//     content='Call Benjamin regarding the reports.'
//     actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
//   />
//     )
//   } export default ModalN();
export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
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
                    const res = await axios.post("http://localhost:5000/api/bikes", kq, config)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
        // createBike(kq);

        // const res = await axios.post("/api/bikes", formData, config);

    }


    return (
        <>

            {kq.price}

            {/* <Elements stripe={stripeTestPromise}> */}
            {!success ?

                <form onSubmit={handleSubmit}>
                    Tổng tiền cần thanh Toán<br />
                    {kq.cost}
                    <fieldset className="FormGroup">
                        <center>THÔNG TIN TÀI KHOẢN THANH TOÁN </center>
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                   
                    <button type="submit"
                    >Pay</button>
 <Button >
                        {/* Hủy */}

                        <ModalN />
                    </Button>
                </form>
                :
                <div>
                    <h2>Thanh Toán Thành Công rồi đó bà dà</h2>
                </div>
            }
            {/* </Elements> */}
        </>
    )
}