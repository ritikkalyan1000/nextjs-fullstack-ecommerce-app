"use client"

import { AmountContext } from '@/component/AmountProvider'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {



    const [arr, setArr] = useState([])

    
    const { data: session } = useSession();
    
    const context = useContext(AmountContext);
    // context.settingAmount(0);







    useEffect(() => {

        const userid = session.user.id;

        const getData = async () => {

            const data = await fetch(`/api/CartData?userid=${userid}`)

            const res = await data.json();
            // we get _id ,userid and productid .populate(productid)
            console.log(res.arr)

            setArr(res.arr)
            let amt = 0

            for (let index = 0; index < res.arr.length; index++) {
                amt += res.arr[index].productid.price;

            }
            context.settingAmount(amt)



            // console.log(amt)


        }

        getData()
    }, [])

    const handleclick = async (prodid, prodprice) => {


        context.settingAmount(context.amount - prodprice)






        setArr(arr.filter((item) => item.productid._id !== prodid))

        const userid = session.user.id;



        const data = await fetch(`/api/CartData?userid=${userid}&prodid=${prodid}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }

        })

        const res = await data.json();
        console.log(res.msg) // work well
        // we get _id ,userid and productid .populate(productid)






    }




    return (
        <>
            <div className=' w-full min-h-[50vh] h-auto flex flex-col justify-evenly items-center gap-2 '>
                {arr.length === 0
                    ?
                    <> <h1 className='text-2xl text-center text-gray-500'> There is no item in the cart </h1></>
                    :
                    <>
                        {arr.map((item, index) => {
                            return (<div key={index} className="flex justify-center items-center  h-full w-[80%]  ">

                                <div className='border  rounded-l-3xl overflow-hidden w-[30%]  relative h-[25vh]' >
                                    {/* image */}

                                    <Image src={item.productid.image} fill={true} alt='img' className='object-contain' />

                                </div>

                                <div className=' w-[60%] h-[25vh] pl-5 bg-gray-700 text-white flex flex-col justify-evenly'>
                                    {/* content */}
                                    <p className='capitalize text-bold text-xl '>{item.productid.title}</p>
                                    <p className='italic text-sm'>{item.productid.description}</p>
                                    <p className='italic text-sm'>$ {item.productid.price}</p>
                                    <p className='italic text-sm'>{item.productid.category}</p>
                                </div>
                                <div className='w-[10%] px-15  h-[25vh] relative   '>
                                    <button className="cursor-pointer rounded-xl px-3 bg-black font-black text-white hover:ring-1  hover:ring-white hover:bg-blue-900 absolute top-[40%] " onClick={() => { handleclick(item.productid._id, item.productid.price) }}>Remove</button>
                                </div>
                            </div>)
                        })


                        }

                    </>
                }

                <div className='flex justify-between items-center  w-[90%]'>

                    <div className='text-xl my-6 font-bold italic capitalize tracking-widest border bg-red-400 text-white p-2 rounded-2xl hover:bg-green-300 hover:text-black'>
                        total amount : {context.amount.toFixed(2)}
                    </div>
                    <Link href="/PaymentPage" className='text-xl my-6 font-bold italic capitalize tracking-widest border bg-red-400 text-white p-2 rounded-2xl hover:bg-green-300 hover:text-black'>Pay Now</Link>
                </div>

            </div>

        </>
    )
}

export default page