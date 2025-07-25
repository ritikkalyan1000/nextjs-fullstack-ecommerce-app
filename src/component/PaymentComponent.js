"use client"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react";



const PaymentComponent = (props) => {

    const [loading, setloading] = useState(false);

    const new_amount = props.amount * 100


    console.log(new_amount)

    const elements = useElements();
    const stripe = useStripe();


    const handlePay = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        setloading(true)

        // get inputs from teh card

        const cardelement = elements.getElement(CardElement)

        // creating paymethod to get paymentmethod.id
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardelement
        })

        // now we take paymentmethod.id from paymentmethod object so to send that to backend in  paymentIntents
        if (error) {
            console.error("Error creating payment method:", error.message);
            alert("Card Error: " + error.message);
            console.log(error)
            setloading(false)
        }

        const paymentid = paymentMethod.id;

        console.log("paymentmethodid", paymentid)


        const send_data = await fetch("/api/BackendPayment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ paymentid, amount: new_amount })
        })

        const res = await send_data.json();



        if (res.success === true) {
            console.log("payment deposited successfully")
        } else {
            console.log("payment failed")

        }

        setloading(false)







    }




    return (
        <>
            <div className='border w-screen h-[95vh]  flex justify-center items-center '>
                <form className='border w-1/2 h-[60%] '>

                    <CardElement options={{
                        style: {
                            base: {
                                fontSize: "22px",
                                color: "blue",
                                "::placeholder": {
                                    color: "gray",
                                },
                            },
                            invalid: {
                                color: "red",
                            },
                        },
                    }} />

                    <button className='cursor-pointer border rounded-xl px-3 bg-blue-400 text-white hover:ring-1  hover:ring-white hover:bg-blue-900' disabled={loading} onClick={handlePay}> {loading === true ? "Processing ...." : "Pay"}</button>


                </form>
            </div>


        </>
    )
}

export default PaymentComponent