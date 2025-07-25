// "use client"
// import { AmountContext } from '@/component/AmountProvider'
// import PaymentComponent from '@/component/PaymentComponent'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import React, { useContext } from 'react'

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
// const PaymentPage = () => {
//     const context = useContext(AmountContext)
//   return (
//     <Elements stripe={stripePromise}>
//         <PaymentComponent amount = {context.amount}/>
//     </Elements>
//   )
// }

// export default PaymentPage
"use client"
import { AmountContext } from '@/component/AmountProvider'
import PaymentElem from '@/component/PaymentElem'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useContext, useEffect, useState } from 'react'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const PaymentPage = () => {

    const [clientSec, setClientSec] = useState("")
    const context = useContext(AmountContext)

    const new_amount = context.amount * 100;


    useEffect(() => {

        const getData = async () => {
            const data = await fetch("/api/BackendPayment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: new_amount })

            })
            const res = await data.json() // in this we get clientsecret

            setClientSec(res.clientSecret)
        }

        getData();


    }, [])


    return (clientSec && (
        <Elements stripe={stripePromise} options={{ clientSecret: clientSec }}>
            <PaymentElem />
        </Elements>
    ))
}

export default PaymentPage