// import { NextResponse } from "next/server";
// import Stripe from "stripe";

import { NextResponse } from "next/server";
import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// export async function POST(req) {

//     const res = await req.json();



//     try {

//         // in response we get paymentmethodid and amount

//         const paymentintent = await stripe.paymentIntents.create({
//             amount: res.amount,
//             payment_method: res.paymentid,
//             currency: "usd",
//             confirm: true,
//             return_url: "http://localhost:3000"
//         })

//         const paymentintentid = paymentintent.id
//         console.log("paymentintent id ",paymentintentid)

//         return NextResponse.json({ success: true, paymentintentid}) // paymentintent id is send to frontend

//     } catch (error) {
//         return NextResponse.json({ success: false })
//     }



// }


// PaymentElement
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {

    //we get amount in req

    const res = await req.json();
    try {


        const paymentintent = await stripe.paymentIntents.create({
            amount: res.amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true }

        })

        return NextResponse.json({ success: true, clientSecret: paymentintent.client_secret })
    } catch (error) {
        return NextResponse.json({ success: false })
    }

}