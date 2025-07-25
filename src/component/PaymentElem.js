import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

const PaymentElem = () => {

    const elements = useElements();
    const stripe = useStripe();

    // const [loading, setloading] = useState(false)


    const handlePay = async (e) => {
        e.preventDefault();
        try {



            if (!stripe || !elements) {
                return
            }


            const confirm_pay = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: "http://localhost:3000"
                }
            })


        } catch (error) {
            console.error(error);

        }
    }
    return (
        <>

            <div className="w-screen h-screen flex justify-center items-center bg-gray-100 p-4">
                <form onSubmit={handlePay} className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Complete your payment</h2>

                    <PaymentElement />


                    <button type='submit' className='mt-6 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition' >Pay</button>
                </form>
            </div>


        </>
    )
}

export default PaymentElem