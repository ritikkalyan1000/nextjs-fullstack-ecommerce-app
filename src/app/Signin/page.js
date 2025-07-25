"use client"

import Image from 'next/image'

import React, { useState } from 'react'

const Signin = () => {

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [msg, setmsg] = useState("")

    const handleOnchange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleSybmit = async (e)=>{
        e.preventDefault();

        const formdata = await fetch("/api/signindata",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })

        const data = await formdata.json();
        // console.log(data.msg)
        setmsg(data.msg)


        setTimeout(() => {
            setmsg("")
        }, 2000);




    }

    return (
        <>

            <div className='w-screen h-[95vh]  flex justify-center items-center bg-gray-800 text-white'>
                <div className=' w-1/2 h-[60%] rounded-r-2xl overflow-hidden flex justify-center items-center border'>

                    <div className='relative  w-full h-full  overflow-hidden'>
                        {/* image */}
                        <Image src="/images/Signin.jpg" fill={true} alt='loginimg' className='object-cover transform ' />

                    </div>
                    <div className=' w-full h-full  text-white  rounded-2xl overflow-hidden'>
                        {/* content */}
                        <form className=' h-full flex flex-col justify-center items-center font-semibold ' onSubmit={handleSybmit}>
                            <div className='  flex items-center  h-1/4 w-full px-3'>

                                <label htmlFor="name" className=''>Name : &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id='name' name='name' type='text' className=' border rounded ' onChange={handleOnchange}></input>

                            </div>
                            <div className='  flex items-center  h-1/4 w-full px-3'>

                                <label htmlFor="email" className=''>Email : &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id='email' name='email' type='email' className=' border rounded px-1' onChange={handleOnchange}></input>

                            </div>
                            <div className='  flex items-center  h-1/4 w-full px-3'>

                                <label htmlFor="password">Password  : &nbsp;</label>
                                <input id='password' name='password' type='password' className='border rounded px-1' onChange={handleOnchange}></input>

                            </div>
                            <button type='submit' className='cursor-pointer rounded  bg-blue-400 text-white hover:ring-1 w-1/2  hover:ring-white hover:bg-blue-900' >Signin</button>
                            <span  className='italic text-sm'>{msg}</span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin